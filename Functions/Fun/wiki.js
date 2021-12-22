import wiki from 'wikipedia'
const { search } = wiki
import wikiEmbed from '../../Embeds/Templates/wiki-embed.js'
import fetch from 'node-fetch'
import error from '../../Embeds/error.js'



async function wikiSearch (msg, args) {

	args.shift()

	if (!args[1]) {
		return msg.channel.send({embeds: [
			error ({
				num: 400,
				code: 'BAD_REQUEST',
				name: `Missing parameter: [search-term]`,
				value: `Please specify what to search on Wikipedia.`,
				help: '!Help Wiki'
			}, msg.author)
		]})
	}

	let term = args.join('_')

	let wikiResults = await search(term)

	if (!wikiResults.results[0]) {
		return msg.channel.send({embeds: [
			error ({
				num: 404,
				code: 'NOT_FOUND',
				name: `No results found`,
				value: `We searched far and wide but could not find any results for: \` ${args.join(' ')} \`.`,
				help: '!Help Wiki'
			}, msg.author)
		]})
	}
	
	term = wikiResults.results[0].title.replace(' ', '_')

	let searchResults = await fetch (`https://en.wikipedia.org/api/rest_v1/page/summary/${term}`)

	let result = await searchResults.json()

	let obj = {
		title: result.title,
		url: result.content_urls.desktop.page,
		extract: result.extract,
		type: result.type
	}

	if (result.originalimage) {
		obj.image = result.originalimage.source
	}


	
	return msg.channel.send({embeds: [wikiEmbed(msg, args, obj)]})
	
}


const meta = {
	name: 'Wikipedia',
	description: 'Finds results for requested term on Wikipedia.',
	syntax: '!Wiki [term-to-search-for]',
	category: 'Fun',
	perms: 'none',
	version: '1.0',
	comm: 'added in alpha 1.5'
}


export { meta }
export default wikiSearch