import error from '../../Embeds/error.js'
import dictEmbed from '../../Embeds/Templates/dict-embed.js'
import od from 'oxford-dictionary'
import fs from 'fs'
const config = {
  app_id : process.env.OD_APP_ID,
  app_key : process.env.OD_APP_KEY,
  source_lang : 'en-us'
};
const dict = new od(config);



async function foo (msg, args) {
	
	let term, result;

	if (!args[1]) {
		
		return msg.channel.send({embeds: [
			error ({
				num: 400,
				code: 'BAD_REQUEST',
				name: `Missing parameter: [search-term]`,
				value: `Please specify what to word to lookup on the dictionary.`,
				help: '!Help Dictionary'
			}, msg.author)
		]})

	} else {

		args.shift()
		term = args.join('+')

	}

	result = await dict.find(args.join(' '))
	.catch(err => {
		return err
	})
	
	if (!result.results) {

		return msg.channel.send({embeds: [
			error ({
				num: 404,
				code: 'NOT_FOUND',
				name: `No entries found`,
				value: `No entries/definitions found for the word: \` ${args.join(' ')} \`.`,
				help: '!Help Dictionary'
			}, msg.author)
		]})

	}

	const obj = {
		url: `https://www.oxfordlearnersdictionaries.com/definition/english/${term}`,
		term: args.join(' '),
		fields: [
			{
				name: 'Definition', value: result.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
			}, {
				name: 'Language', value: 'English US (en-us)'
			}, {
				name: 'Link', value: `https://www.oxfordlearnersdictionaries.com/definition/english/${term}`
			}
		]
	}

	return msg.channel.send({embeds: [dictEmbed(msg, args, obj)]})
	
}


const meta = {
	name: 'Dictionary',
	description: 'Look ups words on dictionary',
	syntax: '!Dictionary [word]',
	category: 'Fun',
	perms: 'none',
	version: '2.0',
	comm: 'additional comments [unread]'
}


export { meta }
export default foo