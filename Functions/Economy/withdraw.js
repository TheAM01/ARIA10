import error from '../../Embeds/error.js'
import db from '../../Main/database.js'
import success from '../../Embeds/success.js'
import util from '../../Server/utility.js'



async function foo (msg, args) {

	let amount
	// getting values in database

	let wallet = await db.get(`${msg.author.id}_wallet`);
	let bank = await db.get(`${msg.author.id}_bank`);

	if (!args[1]) { 

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [amount]',
				value: `Please specify a valid amount to deposit from your wallet into your bank.`,
				help: '!Help Withdraw'
			}, msg.author)]
		})

	}
	
	if (util.isNatural(args[1])) {

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Invalid amount',
				value: `Please specify a valid amount of cash to withdraw from your bank into your wallet.`,
				help: '!Help Withdraw'
			}, msg.author)]
		})

	}


	amount = parseInt(args[1]); // setting the amount


	if (amount > bank) {

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Invalid amount',
				value: `The amount requested to withdraw (\` ${amount} \`) is more then the amount that you possess (\` ${wallet} \`). Please mention an amount that you possess.`,
				help: '!Help Withdraw'
			}, msg.author)]
		});

	}

	// taking away amount

	await db.set(`${msg.author.id}_bank`, bank - amount)
	
	// putting amount in wallet

	await db.set(`${msg.author.id}_wallet`, wallet + amount)

	let obj = {
		num: 200,
		description: `Successfully withdrew \` ${amount} \` cash into your wallet.`,
		title: 'Withdraw successful',
		command: 'WITHDRAW'
	}

	const embed = success(obj, msg.author)

	msg.channel.send({embeds: [embed]})

}


const meta = {
  name: 'Withdraw',
  description: 'Withdraws cash from your bank to your wallet.',
  syntax: '!Withdraw Amount',
  category: 'Economy',
  perms: 'none',
  version: '1.1',
  comm: 'additional comments [unread]'
}


export { meta }
export default foo