import axios from "axios";
import cheerio from "cheerio";
import express from "express";

const app = express()

const PORT = 8000;
const url = 'https://www.theguardian.com/uk'

axios(url).then(res => {
	const html = res.data
	const $ = cheerio.load(html)
	const articles = []
	$('.fc-item__content', html).each(function()
	{
		const title = $(this).text()
	    const url1 = $(this).find('a').attr('href')
		articles.push({
			title,
			url1
		})
	})
	console.log(articles)
})
	.catch( err => console.log(err))


app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`))
