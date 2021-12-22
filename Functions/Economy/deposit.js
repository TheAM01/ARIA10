import error from '../../Embeds/error.js'
import db from '../../Main/database.js'
import depositEmbed from '../../Embeds/success.js'



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
				help: '!Help Deposit'
			}, msg.author)]
		})

	} else if (parseInt(args[1]) % 1 != 0 || parseInt(args[1]) < 1) {

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Invalid amount',
				value: `Please specify a valid amount of cash to deposit from your wallet into your bank.`,
				help: '!Help Deposit'
			}, msg.author)]
		})
		
	} else if (args[1].toString().toLowerCase() === 'all') {
		amount = wallet
	} else {
		amount = parseInt(args[1]);
	}

	

	if (amount > wallet) {

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Invalid amount',
				value: `The amount requested to deposit (\` ${amount} \`) is more then the amount that you possess (\` ${wallet} \`). Please mention an amount that you possess.`,
				help: '!Help Deposit'
			}, msg.author)]
		});

	}

	// taking away amount

	await db.set(`${msg.author.id}_wallet`, wallet - amount)
	
	// putting amount in bank

	await db.set(`${msg.author.id}_bank`, bank + amount)

	let obj = {
		num: 200,
		description: `Successfully deposited ${amount} cash into your bank.`,
		title: 'Deposit successful',
		command: 'DEPOSIT'
	}

	const embed = depositEmbed(obj, msg.author)

	msg.channel.send({embeds: [embed]})

}


const meta = {
  name: 'Deposit',
  description: 'Deposits cash from your wallet to your bank,',
  syntax: '!Deposit Amount',
  category: 'Economy',
  perms: 'none',
  version: '0.1',
  comm: 'additional comments [unread]'
}


export { meta }
export default foo