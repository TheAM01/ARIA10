import error from '../../Embeds/error.js'
import maths from './maths.js'
import util from '../../Server/utility.js'


function main (msg, args) {

	let noteCase

	if (!args[1]) {
		
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [subject]',
				value: 'Please enter a valid excercise for this command to work.',
				help: '?Help Notes'
			}, msg.author)]
		});
		
	} else {
		
		noteCase = args[1].toString().toLowerCase();
		
	}

	

	if (noteCase === 'maths' || noteCase === 'math') {
		
		args.shift();
		return maths(msg, args);
		
	} else {
		
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Invalid value',
				value: `Please enter a valid subject for this command to work. ${util.inlineCode(noteCase, ' ')} is not a valid subject.`,
				help: '?Help Notes'
			}, msg.author)]
		});
		
	}

}


const meta = {
	name: 'Notes',
	description: 'Fetches notes.',
	syntax: '?Notes [subject] [chapter]',
	timeout: 'none',
	category: 'Utility',
	perms: 'none',
	version: '1.1',
	comm: 'additional comments [unread]'
}


export { meta }
export default main