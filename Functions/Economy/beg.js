import error from '../../Embeds/error.js'
import success from '../../Embeds/success.js'
import db from '../../Main/database.js'
import ms from 'pretty-ms'


async function foo (msg, args) {

	let bheek = Math.floor(Math.random() * 101);
	const check = await db.get(`${msg.author.id}_begCheck`);
	let timeout = 30000;
	
	let gotBeg = [
		`You explored a sewer and found ${bheek} coins.`,
		`You begged for some coins from Harry Styles and he gave you ${bheek} coins.`,
		`You asked a random stranger for some money and he gave you ${bheek} coins.`,
		`You looked so broke that a beggar gave you ${bheek} coins.`,
		`You asked for some charity money and you got ${bheek} coins.`,
		`You found ${bheek} coins lying around somewhere.`,
		`You looked so pathetic that MEE6 gave you ${bheek} coins. Say thank you to MEE6.`
	]

	
	if (check !== null && timeout - (Date.now() - check) > 0) {

		const timeLeft = ms(timeout - (Date.now() - check));

		return msg.channel.send({
			embeds: [ error({
				num: 429,
				code: 'TOO_MANY_REQUESTS',
				name: 'You are being rate limited',
				value: `Wait ${timeLeft} more before trying again, you beggar. You can only use this command once every 30 seconds.`,
				help: '!Help Beg'
			}, msg.author)]
		})
		
		// oops(msg, 'Timeout', `At least wait for a little time before begging again, you disgusting beggar. You have ${timeLeft} left.`, 'begTimeout');

	}

	let currentBalance = await db.get(`${msg.author.id}_wallet`);
	await db.set(`${msg.author.id}_wallet`, currentBalance + bheek);
	await db.set(`${msg.author.id}_begCheck`, Date.now());

	return msg.channel.send({
		embeds: [success({
			num: 200,
			description: gotBeg[Math.floor(Math.random() * gotBeg.length)],
			title: '',
			command: 'BEG'
		}, msg.author)]
	})

}

const meta = {
	name: 'Beg',
	description: 'You beg for money, you may or may not get some.',
	syntax: '!Beg',
	timeout: '30s',
	category: 'Economy',
	perms: 'none',
	version: '2.1',
	comm: 'added in ALPHA 1.10'
}


export { meta }
export default foo