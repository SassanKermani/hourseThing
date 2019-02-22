/*==============================
=            Set Up            =
==============================*/

const puppeteer = require('puppeteer');

let horseName = `game winner`;

/*=====  End of Set Up  ======*/

(async()=>{

	const browser = await puppeteer.launch({
		headless: false,
		executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
		defaultViewport: 'null'
	});

	const page = await browser.newPage();

	await page.goto(`https://www.equibase.com/` );

	await page.waitForNavigation();

	await page.type("input#searchInput", `${horseName}`);

	await page.evaluate(()=>{
		
		Array.from(document.querySelector('#search').children)[4].click()

	})

	await page.waitFor(5000)

	let arrFormSearch =  await page.evaluate(()=>{
		let temparr = Array.from(Array.from(document.querySelector(`.text-left.fullwidth.table-hover`).children)[1].children);
		return temparr;
	})

	console.log(arrFormSearch);

	browser.close();

})();