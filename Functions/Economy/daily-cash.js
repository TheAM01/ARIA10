import ms from 'pretty-ms';
import db from '../../Main/database.js'
import error from '../../Embeds/error.js'
import success from '../../Embeds/success.js'


async function dailyCash (msg, args) {

	const check = await db.get(`${msg.author.id}_daily_check`);
	const timeout = 86400000;

	if (check !== null && timeout - (Date.now() - check) > 0) {
		const timeLeft = ms(timeout - (Date.now() - check));

		return msg.channel.send({
			embeds: [ error({
				num: 429,
				code: 'TOO_MANY_REQUESTS',
				name: 'You are being rate limited',
				value: `Please wait ${timeLeft} more before trying again. You can only use this command once every 24 hours.`,
				help: '!Help Daily'
			}, msg.author)]
		})
	}

	let reward = 5000;
	let currentBalance = await db.get(`${msg.author.id}_wallet`);
		
	await db.set(`${msg.author.id}_wallet`, currentBalance + reward);
	await db.set(`${msg.author.id}_daily_check`, Date.now())

	let obj = {
		num: 200,
		description: `Congratulations, ${msg.author.username}. You claimed your daily prize of ${reward} cash!`,
		title: 'Daily cash claim successful',
		command: 'DAILY_CASH'
	}

	const embed = success(obj, msg.author)

	msg.channel.send({embeds: [embed]})

}


const meta = {
  name: 'Daily cash redeem',
  description: 'Redeems the daily reward of 5000 coins.',
  syntax: '!Daily',
	timeout: '24h',
  category: 'Economy',
  perms: 'none',
  version: '1.0',
  comm: 'ALPHA 1.9'
}


export { meta }
export default dailyCash