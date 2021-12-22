import error from '../../Embeds/error.js'
import fetch from 'node-fetch'
import animeBed from '../../Embeds/Templates/anime-embed.js'

const endpoint = 'https://api.jikan.moe/v3/search/anime?q='

async function animeSearch (msg, args) {

	let animeCase;

	if (!args[1]) {
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [term]',
				value: 'Please define an anime to search.',
				help: '!Help anime'
			}, msg.author)]
		})
	} else {
		args.shift();
		animeCase = args.join('%20');
	}

	let result = await fetch(endpoint + animeCase);
	result = await result.json();
	if (!result.results) {
		return msg.channel.send({
			embeds: [ error({
				num: 404,
				code: 'NOT_FOUND',
				name: 'No results found',
				value: `No suitable results found for your search: \` ${animeCase} \`. Maybe try different keywords?`,
				help: '!Help Anime'
			}, msg.author)]
		});
	}

	result = result.results[0]
	


	let obj = {
		title: result.title,
		term: animeCase,
		url: 	result.url,
		image: result.image_url,	
		description: result.synopsis,
		fields: [
			{
				name: 'Link', value: `[${result.title}](${result.url})`
			}, {
				name: 'Type', value: result.type, inline: true
			}, {
				name: 'Episodes', value: result.episodes.toString(), inline: true
			}, {
				name: 'Rating', value: result.rated, inline: true
			}
		],
		index: 0
	}

	return msg.channel.send({embeds: [animeBed(msg, args, obj)]})

}

const meta = {
	name: 'Anime search',
	description: 'Searches for anime on MyAnimeList.net',
	syntax: '!Anime [anime-name]',
	category: 'Fun',
	perms: 'none',
	version: '0.1',
	comm: 'additional comments [unread]'
}


export { meta }
export default animeSearch