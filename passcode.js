console.clear();
import puppeteer from 'puppeteer';
import chalk from 'chalk';

const run = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("http://127.0.0.1:5500/passcode.html");

    let code = 0;

    for (code = 0; code < 10000; code++) {
        await page.type("#passcode", code + "");
        await page.click("#login");
        await page.evaluate(() => {
            document.getElementById("passcode").value = "";
        })
        const output = await page.evaluate(() => {
            return document.getElementById("output").innerHTML;
        });
        if (output === "No luck :(") {
            console.log(chalk.red("TRIED " + code));
        } else {
            console.clear();
            console.log(chalk.green("LOGGED IN SUCCESSFULLY!"));
            break;
        };
    };

    console.log(chalk.green("THE CODE IS " + code));
    await page.close();
    await browser.close();
};

run()
