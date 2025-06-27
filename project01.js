import axios from "axios";
import * as Cheerio from "cheerio";
import fs from "fs";

const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'accept-language': 'en-GB,en;q=0.5',
    'cache-control': 'max-age=0',
    'referer': 'https://books.toscrape.com/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
};

async function toScrape() {
    try {
        const resp = await axios.get('https://books.toscrape.com/', { headers });

        const $ = Cheerio.load(resp.data);

        // Example: extract book titles from homepage
        const books = [];
        $('.product_pod h3 a').each((_, el) => {
            const title = $(el).attr('title');
            books.push(title);
        });
        const prices = []
        $('.product_price .price_color').each((_, el) => {
            prices.push($(el).text().trim());
        })
        const stars = []
        $('.star-rating').each((_, el) => {
            const classlist = $(el).attr('class').split(/\s+/)
            const rating = classlist.find(cls => cls !== 'star-rating')
            stars.push(rating)
        })
        const url = []
        $('.product_pod .image_container a').each((_, el) => {
            const href = $(el).attr('href')
            url.push(href)
        })
        console.log("Extracted Titles:", books);
        console.log("Extracted prices:", prices);
        console.log("Extracted stars:", stars);
        console.log("Extracted url:", url);
    } catch (error) {
        console.error("❌ Error scraping site:", error.message);
    }
}

toScrape();
