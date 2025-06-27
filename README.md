# 🕷️ Web Scraping Project

## 📄 Description

This project is dedicated to learning and mastering web scraping using modern tools in the Node.js ecosystem. The goal is to understand how data can be programmatically extracted from websites, even when they involve complex HTML structures, cookies, headers, CAPTCHAs, and dynamic content rendered with JavaScript.

This project will be structured in stages, from static scraping using Cheerio to dynamic page scraping using Puppeteer and Playwright.

---

## 🎯 Project Goals

- Understand the fundamentals of HTTP requests, headers, status codes, and cookies.
- Learn how to fetch and parse HTML data using Cheerio.
- Scrape static websites (e.g., blogs, e-commerce product pages).
- Manage form submissions and session cookies.
- Handle pagination and filtering of data.
- Scrape dynamic content using headless browsers (Puppeteer/Playwright).
- Solve CAPTCHA using OCR tools like `tesseract.js`.
- Store scraped data to files or databases (MongoDB or JSON).
- Respect `robots.txt` and ethical scraping guidelines.

---

## 🧰 Tools & Libraries Used

| Tool / Library          | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
| **Axios**                | Promise-based HTTP client to send GET/POST requests             |
| **Cheerio**              | jQuery-like library to parse and traverse HTML content          |
| **Puppeteer**            | Headless Chrome for scraping JavaScript-rendered pages          |
| **Playwright**           | Automation framework for Chromium, Firefox, and WebKit          |
| **FormData**             | To simulate form submissions and upload POST payloads           |
| **fs (File System)**     | Node.js module to save scraped data to local files              |
| **tesseract.js**         | OCR engine to extract text from CAPTCHA images                  |
| **dotenv**               | To load and manage environment variables                        |
| **cookie/tough-cookie**  | Cookie jar to persist login and session cookies                 |
| **Node.js**              | JavaScript runtime environment for running scraping scripts     |

---

## 🏁 Future Enhancements

- Export scraped data to Excel or CSV
- Build a dashboard to display and search scraped data
- Add proxy rotation and rate-limiting
- Integrate with APIs for smarter scraping (e.g., Google Search, CAPTCHA solver)

---

## 📌 Disclaimer

This project is for **educational purposes only**. Make sure to check a website’s `robots.txt` and **Terms of Service** before scraping it. Always scrape responsibly and avoid putting load on websites’ servers.


## Timeline of this course 
## project1 done for pratice  
# week1

| Day | Topics                                   |             |Tasks                                                                      |
| --- | ---------------------------------------- | -------------------------------------------------------------------------- |
| 1   | **What is Web Scraping? Legal + Ethics** | Learn basics of HTML, CSS structure, HTTP. Tools: Postman, DevTools        |
| 2   | **Request-Response & Axios**             | Setup Node.js + Axios. Try scraping a public site like quotes.toscrape.com |
| 3   | **Cheerio DOM Parsing**                  | Practice selecting tags, attributes, and text using Cheerio                |
| 4   | **Headers, Cookies & Sessions**          | Learn to pass `headers`, handle cookies via `axios-cookiejar-support`      |
| 5   | **Login Forms & Sessions**               | Scrape sites with login (e.g., dummy login form with session token)        |
| 6   | **Form Data + Hidden Fields**            | Parse `ViewState`, `CSRF`, hidden inputs and post them correctly           |
| 7   | **Practical Project 2**                  | Scrape a job listing site or e-commerce product list with filtering        |

# week2 
| Day | Topics                                | Tasks                                                                         |
| --- | ------------------------------------- | ----------------------------------------------------------------------------- |
| 8   | **Puppeteer (Headless Browser)**      | Load a site, click buttons, extract dynamic content                           |
| 9   | **Handling JS-heavy sites**           | Scrape content from JS-rendered pages (like infinite scrolls)                 |
| 10  | **Login via Puppeteer**               | Automate login via form filling and CAPTCHA detection                         |
| 11  | **Captcha Handling Basics**           | Learn OCR (Tesseract), fake captcha DOM check, or image classification        |
| 12  | **True Captcha Solving**              | Understand schema-based text captchas or integrate 3rd party solvers          |
| 13  | **Rate-Limits, Proxies, User-Agents** | Rotate user agents, use delays and proxy switching                            |
| 14  | **Practical Project 3**               | Scrape an authenticated, paginated portal like TDS TRACES (what you're doing) |

# week3
| Day | Topics                     | Tasks                                                             |
| --- | -------------------------- | ----------------------------------------------------------------- |
| 15  | **Intercepting API Calls** | Use DevTools → Network tab to mimic API requests                  |
| 16  | **Saving Data**            | Save scraped data into MongoDB, CSV, or Excel                     |
| 17  | **Scheduling Scrapes**     | Use `node-cron`, `setInterval`, or puppeteer-cron                 |
| 18  | **Export & Clean Up**      | Handle broken tags, character encoding, malformed HTML            |
| 19  | **Project 4 (Combo)**      | End-to-end scraper → login + dynamic form + PDF or Excel download |
| 20  | **Deploying a Scraper**    | Run on VPS (like Railway, Vercel, Render, or barebone server)     |

