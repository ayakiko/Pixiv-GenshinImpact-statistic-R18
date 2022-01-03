let parseTable = {"Keqing": "%E5%88%BB%E6%99%B4(%E5%8E%9F%E7%A5%9E)", "Ganyu": "%E7%94%98%E9%9B%A8(%E5%8E%9F%E7%A5%9E)", "Hu Tao": "%E8%83%A1%E6%A1%83(%E5%8E%9F%E7%A5%9E)", "Aether": "%E7%A9%BA(%E5%8E%9F%E7%A5%9E)", "Lumine": "%E8%9B%8D(%E5%8E%9F%E7%A5%9E)", "Amber": "%E3%82%A2%E3%83%B3%E3%83%90%E3%83%BC(%E5%8E%9F%E7%A5%9E)", "Raiden": "%E9%9B%B7%E9%9B%BB%E5%B0%86%E8%BB%8D", "Kujou Sara": "%E4%B9%9D%E6%9D%A1%E8%A3%9F%E7%BE%85", "Guuji Yae": "%E5%85%AB%E9%87%8D%E7%A5%9E%E5%AD%90", "Sucrose": "%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%B9(%E5%8E%9F%E7%A5%9E)", "Arataki Itto": "%E8%8D%92%E7%80%A7%E4%B8%80%E6%96%97", "Thoma": "%E3%83%88%E3%83%BC%E3%83%9E", "Paimon": "%E3%83%91%E3%82%A4%E3%83%A2%E3%83%B3(%E5%8E%9F%E7%A5%9E)", "Klee": "%E3%82%AF%E3%83%AC%E3%83%BC(%E5%8E%9F%E7%A5%9E)", "Qiqi": "%E4%B8%83%E4%B8%83(%E5%8E%9F%E7%A5%9E)", "Sayu": "%E6%97%A9%E6%9F%9A", "Diona": "%E3%83%87%E3%82%A3%E3%82%AA%E3%83%8A(%E5%8E%9F%E7%A5%9E)", "Diluc": "Diluc(GenshinImpact)", "Yoimiya": "%E5%AE%B5%E5%AE%AB", "Aloy": "Aloy", "Scaramouche": "%E3%82%B9%E3%82%AB%E3%83%A9%E3%83%9E%E3%82%B7%E3%83%A5", "Kadzuha": "%E6%A5%93%E5%8E%9F%E4%B8%87%E8%91%89", "Tartaglia": "%E3%82%BF%E3%83%AB%E3%82%BF%E3%83%AA%E3%83%A4", "Zhongli": "%E9%8D%BE%E9%9B%A2", "Venti": "%E3%82%A6%E3%82%A7%E3%83%B3%E3%83%86%E3%82%A3", "Chongyun": "%E9%87%8D%E9%9B%B2", "Xingqiu": "%E8%A1%8C%E7%A7%8B(%E5%8E%9F%E7%A5%9E)", "Ayaka": "%E7%A5%9E%E9%87%8C%E7%B6%BE%E8%8F%AF", "Kokomi": "%E7%8F%8A%E7%91%9A%E5%AE%AE%E5%BF%83%E6%B5%B7", "Kaeya": "%E3%82%AC%E3%82%A4%E3%82%A2%E3%83%BB%E3%82%A2%E3%83%AB%E3%83%99%E3%83%AA%E3%83%92", "Dáinsleif": "%E3%83%80%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%B4", "Albedo": "%E3%82%A2%E3%83%AB%E3%83%99%E3%83%89(%E5%8E%9F%E7%A5%9E)", "Beidou": "%E5%8C%97%E6%96%97(%E5%8E%9F%E7%A5%9E)", "Ningguang": "%E5%87%9D%E5%85%89(%E5%8E%9F%E7%A5%9E)", "Barbara": "%E3%83%90%E3%83%BC%E3%83%90%E3%83%A9(%E5%8E%9F%E7%A5%9E)", "Jean": "%E3%82%B8%E3%83%B3(%E5%8E%9F%E7%A5%9E)", "Bennet": "%E3%83%99%E3%83%8D%E3%83%83%E3%83%88(%E5%8E%9F%E7%A5%9E)", "Fischl": "%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%83%AB(%E5%8E%9F%E7%A5%9E)", "Mona": "%E3%83%A2%E3%83%8A(%E5%8E%9F%E7%A5%9E)", "Eula": "%E3%82%A8%E3%82%A6%E3%83%AB%E3%82%A2", "Lisa": "%E3%83%AA%E3%82%B5(%E5%8E%9F%E7%A5%9E)", "Noelle": "%E3%83%8E%E3%82%A8%E3%83%AB(%E5%8E%9F%E7%A5%9E)", "Razor": "%E3%83%AC%E3%82%B6%E3%83%BC(%E5%8E%9F%E7%A5%9E)", "Rosaria": "%E3%83%AD%E3%82%B5%E3%83%AA%E3%82%A2(%E5%8E%9F%E7%A5%9E)", "Xiao": "%E9%AD%88(%E5%8E%9F%E7%A5%9E)", "Yanfei": "%E7%85%99%E7%B7%8B(%E5%8E%9F%E7%A5%9E)", "Xinyan": "%E8%BE%9B%E7%82%8E", "Yunjin": "yunjin", "Shenhe": "Shenhe"};

async function fetch_search(tag, page) {
	return await (await fetch(`https://www.pixiv.net/ajax/search/artworks/${ tag }?word=${ tag }&order=date_d&mode=r18&p=${ page }&s_mode=s_tag&type=all&lang=en`, {method: "GET"})).json();
}

async function fetch_artwork(url) {
	return await (await fetch(url, {method: 'GET'})).text();
}

function parseStatistics(text) {
	return (/likeCount":(?<likes>\d+).*viewCount":(?<views>\d+)/).exec(text).groups;
}

function streamSort(list, url, views, views_day, likes, likes_day, date) {
	let found = false;

	for (let i = 0; i < list.length; i++)
		if (list[i].views_day < views_day) {
			list.splice(i, 0, {
				url: url,
				views: views,
				views_day: views_day,
				likes: likes,
				likes_day: likes_day,
				date: date
			});

			if (list.length > 10)
				list.pop();

			found = true;
			break;
		}

	if (!found) {
		list.push({
			url: url,
			views: views,
			views_day: views_day,
			likes: likes,
			likes_day: likes_day,
			date: date
		});

		if (list.length > 10)
			list.pop();
	}
}

function stringifyPopular(list) {
	let str = '';

	for (let e of list) {
		str += `${ e.url } views ${ e.views } views_day ${ e.views_day } likes ${ e.likes } likes_day ${ e.likes_day } date ${ e.date.toISOString() }\n`;
	}

	return str;
}

var statistics = {
	time: new Date()
};

var popular_artworks = {};

for (const it in parseTable) {

	let seg_statistics = {
		views: 0,
		views_day: 0,
		likes: 0,
		likes_day: 0,

		date: null
	};

	let page_max = 1;

	popular_artworks[it] = {list: []};
	let list = popular_artworks[it].list;

	for (let page = 1; page < (page_max + 1); page++) {

		let search_json = await fetch_search(parseTable[it], page);
		let count = Object.keys(search_json.body.illustManga.data).length;
		let total = search_json.body.illustManga.total;

		if (page_max < 3 && total > 59)
			page_max++;

		for (let i = 0; i < count; i++) {

			let url = `https://www.pixiv.net/en/artworks/${ search_json.body.illustManga.data[i].id }`;
			let text = await fetch_artwork(url);
			let match = parseStatistics(text);

			let date = new Date(search_json.body.illustManga.data[i].createDate);
			let days = (statistics.time - date) / (1000 * 60 * 60 * 24);

			let views = Number(match.views);
			let likes = Number(match.likes);
			let views_day = views / days;
			let likes_day = likes / days;

			if (!seg_statistics.date) {
				seg_statistics.date = date;
			}else if (seg_statistics.date > date)
				seg_statistics.date = date;


			streamSort(list, url, views, Math.floor(views_day), likes, Math.floor(likes_day), date);


			seg_statistics.views += views;
			seg_statistics.views_day += views_day;

			seg_statistics.likes += likes;
			seg_statistics.likes_day += likes_day;

		}

		statistics[it] = {
			date: seg_statistics.date,
			views: seg_statistics.views,
			views_day: Math.floor(seg_statistics.views_day),
			likes: seg_statistics.likes,
			likes_day: Math.floor(seg_statistics.likes_day),
			total: total,
			pages_listed: (59 * (page - 1)) + count - 1};

		console.log(`
				Statistics for ${ it }:
				total: ${ total }
				pages_listed: ${ (59 * (page - 1)) + count - 1 }
				views: ${ seg_statistics.views }
				views_day: ${ Math.floor(seg_statistics.views_day) }
				likes: ${ seg_statistics.likes }
				likes_day: ${ Math.floor(seg_statistics.likes_day) }`);

	}

	console.save(stringifyPopular(popular_artworks[it].list), `${ it }_mostpopular.txt`);
	console.save(JSON.stringify(popular_artworks[it]), `${ it }_mostpopular.json`);

}

console.save(JSON.stringify(statistics), "GenshinImpact_PixivR18stats.json");
