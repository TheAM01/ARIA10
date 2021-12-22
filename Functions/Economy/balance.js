import error from '../../Embeds/error.js'
import db from '../../Main/database.js'
import balanceEmbed from '../../Embeds/Economy/balance-embed.js'


async function foo (msg, args) {

	let wallet = await db.get(`${msg.author.id}_wallet`);

	let balance = await db.get(`${msg.author.id}_bank`)

	if (!wallet) wallet = 0;

	if (!balance) balance = 0;


	let obj = {
		wallet: wallet,
		bank: balance
	}
	
	let embed = await balanceEmbed (msg, args, obj);

	msg.channel.send({embeds: [embed]})

}


const meta = {
  name: 'Balance check',
  description: 'Checks balance in the wallet and bank.',
  syntax: '!Balance',
  category: 'Economy',
  perms: 'none',
  version: '0.1',
  comm: 'ALPHA 1.9'
}


export { meta }
export default foo