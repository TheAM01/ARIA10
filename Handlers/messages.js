import client from '../Main/client.js'
import db from '../Main/database.js'

// Importing commands

// Moderation
	import kick from '../Functions/Moderation/kick.js'
	import ban from '../Functions/Moderation/ban.js'
	import purge from '../Functions/Moderation/purge.js'


// Fun
	import ud from '../Functions/Fun/ud.js'
	import wiki from '../Functions/Fun/wiki.js'
	import inspire from '../Functions/Fun/inspire.js'
	import anime from '../Functions/Fun/anime.js'
	import dictionary from '../Functions/Fun/dictionary.js'
	import meme from '../Functions/Fun/meme.js'

// Misc
	import log from '../Embeds/log.js'

// Economy
	import balance from '../Functions/Economy/balance.js'
	import daily from '../Functions/Economy/daily-cash.js'
	import deposit from '../Functions/Economy/deposit.js'
	import withdraw from '../Functions/Economy/withdraw.js'
	import beg from '../Functions/Economy/beg.js'

// Utility
	import memberinfo from '../Functions/Utility/info-member.js'

// end

import help from '../Help/helper.js'


export default async function cmd (msg) {
	
	if (msg.author.id === client.user.id) return;
	if (!msg.content) return
	let args = msg.content.split(' ').filter((x) => x !== '');
	let command = args[0].toString().toLowerCase();

	// responding to commands

	// Moderation

	if (command === '!kick') {
		return await kick (msg, args);
	}

	if (command === '!ban') {
		return await ban (msg, args)
	}

	if (command === '!clear' || command === '!purge') {
		return await purge (msg, args)
	}

	// Fun
	
	if (command === '!ud') {
		return await ud (msg, args)
	}

	if (command === '!wiki' || command === '!wikipedia') {
		return await wiki (msg, args)
	}

	if (command === '!inspire' || command === '!quote') {
		return await inspire (msg, args)
	}

	if (command === '!meme') {
		return await meme (msg, args)
	}

	if (command === '!anime') {
		return await anime (msg, args)
	}

	if (command === '!dictionary' || command === '!dic') {
		return await dictionary (msg, args)
	}

	// Utility

	if (command === '!memberinfo' || command === '!userinfo') {
		return await memberinfo (msg, args)
	}


	// Economy

	if (command === '!bal' || command === '!balance') {
		return await balance (msg, args)
	}

	if (command === '!daily') {
		return await daily (msg, args)
	}

	if (command === '!deposit') {
		return await deposit (msg, args)
	}

	if (command === '!withdraw') {
		return await withdraw(msg, args)
	}

	if (command === '!beg') {
		return await beg (msg, args)
	}

	// Misc

	if (command === '!log') {
		return await log (msg, args, msg.author)
	}

	if (command === '!info') {
return await log (msg, args, msg.author)
	}	// Help

	if (command === '!help') {
		return await help (msg, args)
	}

	if (command === '&&del') {
		await db.delete(args[1].toString())
		msg.channel.send('success')
	}


}