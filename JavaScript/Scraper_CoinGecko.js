// CONSTANTS AND VARIABLES
const puppeteer = require('puppeteer');
var a = 0;
var pagenum = 0;
var tokenValue = [];
var tokenPrint = [];
var priceValue = [];
var pricePrint = [];
var dailychangeValue = [];
var dailychangeValuePrint = [];
var dailychangeINT = [];

// SLEEP/WAIT
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// NASLOV
function printHeader(){
    console.clear();
    console.log('===========================================================================================');
    console.log('Sauger Scraper - Coingecko // 2 Pages // 200 Cryptocurrencies ');
    console.log('===========================================================================================');
    console.log('02.2023.                                                                         ver 2.0.5b');
    console.log('-------------------------------------------------------------------------------------------');
    sleep(100);
}

// SCRAPE GECKO, SORT DATA, PRINT DATA FOR PAGE1
async function scrapeGeckoPage1(){

    pagenum = pagenum + 1
    console.log('\nScraping Page ',pagenum,'/2 | Tokens ',a,'/200 ..\n\n');
    sleep(1000);
    console.log('-------------------------------------------------------------------------------------------');
    console.log('  [#]\t Token:\t\t\t\t  Price:\t\t  24h:');
    console.log('-------------------------------------------------------------------------------------------');

    // INITIATE SCRAPER FOR COINGECKO.COM PAGE 1
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.coingecko.com/');

    // SCRAPE 100 TIMES
    for (i=1; i<=100; i++){

        a++;

        // TOKENS
        var [tokenGet] = await page.$x('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr[' + i + ']/td[3]/div/div[2]/a/span[1]');
        var tokenValueGet = await tokenGet.getProperty('textContent');
        tokenValueGet[i] = await tokenValueGet.jsonValue();
        tokenValueGet[i] = tokenValueGet[i].replace(/\n/g,'');
        tokenValue[a] = tokenValueGet[i].replace(/\$$/g,'');


                // FORMAT AND SAVE DATA
                if (tokenValueGet[i].length <=6){
                    tokenPrint[i] = tokenValueGet[i] + '\t\t\t\t';
                }
                else if (tokenValueGet[i].length >= 7 && tokenValueGet[i].length <= 14){
                    tokenPrint[i] = tokenValueGet[i] + '\t\t\t';
                }
                else if (tokenValueGet[i].length >= 15 && tokenValueGet[i].length <= 21){
                    tokenPrint[i] = tokenValueGet[i] + '\t\t';
                }
                else {
                    tokenPrint[i] = tokenValueGet[i] + '\t';
                }

        // PRICES
        var [priceGet] = await page.$x('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr[' + i + ']/td[4]/div/div[2]/span');
        var priceValueGet = await priceGet.getProperty('textContent');
        priceValue[i] = await priceValueGet.jsonValue();
        priceValue[i] = priceValue[i].replace(/\n/g,'');
        priceValue[i] = priceValue[i].replace(/,/g,'');


                // FORMAT AND SAVE DATA - Prices
                if (priceValue[i].length <=5){
                    pricePrint[i] = priceValue[i] + '\t\t\t';
                }
                else if (priceValue[i].length >=6 && priceValue[i].length <= 14){
                    pricePrint[i] = priceValue[i] + '\t\t';
                }
                else if (priceValue[i].length >= 15 && priceValue[i].length <= 21){
                    pricePrint[i] = priceValue[i] + '\t';
                }
                else {
                    pricePrint[i] = priceValue[i] + '';
                }

        // 24HOUR CHANGE
        var [dailychangeGet] = await page.$x('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr[' + i + ']/td[6]/span');
        var dailychangeValueGet = await dailychangeGet.getProperty('textContent');
        dailychangeValue[i] = await dailychangeValueGet.jsonValue();
        dailychangeINT[i] = parseFloat(dailychangeValue[i],10);


        // FORMAT AND SAVE DATA - Daily Changes
        if (dailychangeINT[i] < 0){
            dailychangeValuePrint[i] = ('\x1b[31m'+dailychangeValue[i]+'\x1b[0m');
        }
        else if (dailychangeINT[i] > 0){
            dailychangeValuePrint[i] = ('\x1b[32m'+dailychangeValue[i]+'\x1b[0m');
        }
        else {
            dailychangeValuePrint[i] = ('\x1b[0m'+dailychangeValue[i]);
        }

        // PRINT DATA
        if (a <= 9) {
            console.log('  ',a,'\t',tokenPrint[i],'\x1b[33m',pricePrint[i],dailychangeValuePrint[i],'\t');
            sleep(10);
        }
        else if (10 <= a && a <= 99) {
            console.log(' ',a,'\t',tokenPrint[i],'\x1b[33m',pricePrint[i],dailychangeValuePrint[i],'\t');
            sleep(10);
        }
        else {
            console.log('',a,'\t',tokenPrint[i],'\x1b[33m',pricePrint[i],dailychangeValuePrint[i],'\t');
            sleep(10);
        }
    }

    browser.close();

    console.log('-------------------------------------------------------------------------------------------');
    sleep(500);
    console.log('Scraped Page ',pagenum,'/2 | Tokens ',a,'/200 ..\nScraping Page ',pagenum+1,'/2..');
    sleep(1000);
    console.log('-------------------------------------------------------------------------------------------');
    sleep(2000);

    scrapeGeckoPage2();
}
// SCRAPE GECKO, SORT DATA, PRINT DATA FOR PAGE2
async function scrapeGeckoPage2(){

          pagenum = pagenum + 1;
          sleep(1000);
          console.log('-------------------------------------------------------------------------------------------');
          console.log('  [#]\t Token:\t\t\t\t  Price:\t\t  24h:');
          console.log('-------------------------------------------------------------------------------------------');

          // INITIATE SCRAPER FOR COINGECKO.COM PAGE 1
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto('https://www.coingecko.com/?page='+pagenum);

          // SCRAPE 100 TIMES
          for (i=1; i<=100; i++){

              a++;

              // TOKENS
              var [tokenGet] = await page.$x('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr[' + i + ']/td[3]/div/div[2]/a/span[1]');
              var tokenValueGet = await tokenGet.getProperty('textContent');
              tokenValueGet[i] = await tokenValueGet.jsonValue();
              tokenValueGet[i] = tokenValueGet[i].replace(/\n/g,'');
              tokenValue[a] = tokenValueGet[i].replace(/\$$/g,'');

                      // FORMAT AND SAVE DATA
                      if (tokenValueGet[i].length <=6){
                          tokenPrint[i] = tokenValueGet[i] + '\t\t\t\t';
                      }
                      else if (tokenValueGet[i].length >= 7 && tokenValueGet[i].length <= 14){
                          tokenPrint[i] = tokenValueGet[i] + '\t\t\t';
                      }
                      else if (tokenValueGet[i].length >= 15 && tokenValueGet[i].length <= 21){
                          tokenPrint[i] = tokenValueGet[i] + '\t\t';
                      }
                      else {
                          tokenPrint[i] = tokenValueGet[i] + '\t';
                      }

              // PRICES
              var [priceGet] = await page.$x('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr[' + i + ']/td[4]/div/div[2]/span');
              var priceValueGet = await priceGet.getProperty('textContent');
              priceValue[i] = await priceValueGet.jsonValue();
              priceValue[i] = priceValue[i].replace(/\n/g,'');
              priceValue[i] = priceValue[i].replace(/,/g,'');

                      // FORMAT AND SAVE DATA - Prices
                      if (priceValue[i].length <=5){
                          pricePrint[i] = priceValue[i] + '\t\t\t';
                      }
                      else if (priceValue[i].length >=6 && priceValue[i].length <= 14){
                          pricePrint[i] = priceValue[i] + '\t\t';
                      }
                      else if (priceValue[i].length >= 15 && priceValue[i].length <= 21){
                          pricePrint[i] = priceValue[i] + '\t';
                      }
                      else {
                          pricePrint[i] = priceValue[i] + '';
                      }

              // 24HOUR CHANGE
              var [dailychangeGet] = await page.$x('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr[' + i + ']/td[6]/span');
              var dailychangeValueGet = await dailychangeGet.getProperty('textContent');
              dailychangeValue[i] = await dailychangeValueGet.jsonValue();
              dailychangeINT[i] = parseFloat(dailychangeValue[i],10);

              // FORMAT AND SAVE DATA - Daily Changes
              if (dailychangeINT[i] < 0){
                  dailychangeValuePrint[i] = ('\x1b[31m'+dailychangeValue[i]+'\x1b[0m');
              }
              else if (dailychangeINT[i] > 0){
                  dailychangeValuePrint[i] = ('\x1b[32m'+dailychangeValue[i]+'\x1b[0m');
              }
              else {
                  dailychangeValuePrint[i] = ('\x1b[0m'+dailychangeValue[i]);
              }

              // PRINT DATA
              if (a <= 9) {
                  console.log('  ',a,'\t',tokenPrint[i],'\x1b[33m',pricePrint[i],dailychangeValuePrint[i],'\t');
                  sleep(10);
              }
              else if (10 <= a && a <= 99) {
                  console.log(' ',a,'\t',tokenPrint[i],'\x1b[33m',pricePrint[i],dailychangeValuePrint[i],'\t');
                  sleep(10);
              }
              else {
                  console.log('',a,'\t',tokenPrint[i],'\x1b[33m',pricePrint[i],dailychangeValuePrint[i],'\t');
                  sleep(10);
              }
          }

          browser.close();

    console.log('-------------------------------------------------------------------------------------------');
    sleep(500);
    console.log('Scraped Page ',pagenum,'/2 | Tokens ',a,'/200 ..');
    sleep(1000);
    console.log('-------------------------------------------------------------------------------------------');
    sleep(2000);


}

printHeader();
scrapeGeckoPage1();