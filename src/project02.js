import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import qs from "qs";
import * as cheerio from "cheerio";
import db from "../db/db.js";
import Quote from "../db/model.js";

db();
const jar = new CookieJar();
const Ax = wrapper(
  axios.create({
    jar,
    withCredentials: true,
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    },
    timeout: 5000,
  }),
);

async function toscrape() {
  try {
    // Step 1: Get login page
    const { data } = await Ax.get("https://quotes.toscrape.com/login");
    const $ = cheerio.load(data);
    const csrfToken = $('input[name="csrf_token"]').val();

    if (!csrfToken) {
      console.log("CSRF token not found!");
      return;
    }

    // Step 2: Prepare form data
    const postData = qs.stringify({
      csrf_token: csrfToken,
      username: "admin",
      password: "admin",
    });

    // Step 3: Post login form
    const resp = await Ax.post("https://quotes.toscrape.com/login", postData);

    // Step 4: Check success
    if (resp.data.includes("Logout")) {
      console.log("Successfully logged in!");
      // const cookies = await jar.getCookies('https://quotes.toscrape.com/');
      // console.log('Cookies after login:', cookies);
      const quotes = await scrapeQuotesPage("https://quotes.toscrape.com/");
      console.log(quotes.length);
      const result = await Quote.insertMany(quotes);
      console.log("Inserted:", result.length);
    } else {
      console.log("Login failed");
    }
  } catch (error) {
    console.error(error);
  }
}

async function scrapeQuotesPage(url) {
  const resp = await Ax.get(url);
  const $ = cheerio.load(resp.data);

  const quotes = [];
  $(".quote").each((_, el) => {
    const text = $(el).find(".text").text().trim();
    const author = $(el).find(".author").text().trim();
    const tags = [];
    $(el)
      .find(".tags a.tag")
      .each((_, tagEl) => {
        tags.push($(tagEl).text().trim());
      });
    quotes.push({ text, author, tags });
  });

  // Check if there's a next page
  const nextPageLink = $(".next a").attr("href");
  if (nextPageLink) {
    const nextUrl = "https://quotes.toscrape.com" + nextPageLink;
    const nextQuotes = await scrapeQuotesPage(nextUrl);
    quotes.push(...nextQuotes);
  }

  return quotes;
}

toscrape();
