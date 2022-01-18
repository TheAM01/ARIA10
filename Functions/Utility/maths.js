import error from '../../Embeds/error.js'
import util from '../../Server/utility.js'
import db from '../../Main/database.js'
import summary from '../../Embeds/Templates/results-summary.js'


async function main (msg, args) {

	let excercise;

	if (!args[1]) {
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [excercise]',
				value: 'Please enter a valid excercise for this command to work.',
				help: '?Help Math'
			}, msg.author)]
		})
	}

	excercise = args[1].toString().toLowerCase();

	let chapter = await db.get(`ex_${excercise}`);

	if (!chapter) {
		return msg.channel.send({
			embeds: [ error({
				num: 404,
				code: 'NOT_FOUND',
				name: 'No results found for search',
				value: `We couldn't find any exercise for the query: ${util.inlineCode(excercise, ' ')}. Please try a different query.`,
				help: '?Help Math'
			}, msg.author)]
		})
	}

	const obj = {
		title: `Math excercise ${excercise} fetch summary`,
		fields: [
			{
				name: 'Total images', value: chapter.length.toString()
			}
		],
		description: ''
	}

	let embed = summary(msg, args, obj)

	chapter.forEach((img) => {
		msg.channel.send(img)
	});

	msg.channel.send({embeds: [embed]})
	
}


const meta = {
	name: 'Math notes',
	description: 'Fetches mathematics notes.',
	syntax: '?Maths [chapter/excercise]',
	timeout: 'none',
	category: 'Utility',
	perms: 'none',
	version: '1.1',
	comm: 'additional comments [unread]'
}

export {meta}
export default main