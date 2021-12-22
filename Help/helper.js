import Discord from 'discord.js'
import error from '../Embeds/error.js'
import help from '../Embeds/help.js'

// importing help meta objects

// moderation

	import {meta as kick} from '../Functions/Moderation/kick.js'
	import {meta as ban} from '../Functions/Moderation/ban.js'
	import {meta as purge} from '../Functions/Moderation/purge.js'

// fun

	import {meta as ud} from '../Functions/Fun/ud.js'
	import {meta as wiki} from '../Functions/Fun/wiki.js'
	import {meta as inspire} from '../Functions/Fun/inspire.js'
	import {meta as meme} from '../Functions/Fun/meme.js'
	import {meta as anime} from '../Functions/Fun/anime.js'
	import {meta as dict} from '../Functions/Fun/dictionary.js'

// misc

	import {meta as log} from '../Embeds/log.js'

// economy

	import {meta as balance} from '../Functions/Economy/balance.js'
	import {meta as daily} from '../Functions/Economy/daily-cash.js'

// utility

	import {meta as memberinfo} from '../Functions/Utility/info-member.js'


// importing help categories

import general from './help-general.js'
import fun from './help-fun.js'
import misc from './help-misc.js'
import moderation from './help-moderation.js'
import utility from './help-utility.js'
import economy from './help-economy.js'
import all from './help-all.js'



const helper = (msg, args) => {

	let helpCase

	if (args.length < 2) {
		helpCase = 'general'
	} else {
		helpCase = args[1].toString().toLowerCase()
	}

	// Categories help

	if (helpCase === 'fun') {
		return fun(msg, args, msg.author)
	}

	if (helpCase === 'moderation') {
		return moderation(msg, args, msg.author)
	}

	if (helpCase === 'general') {
		return general(msg, args, msg.author)
	}

	if (helpCase === 'misc' || helpCase === 'miscellaneous') {
		return misc(msg, args, msg.author)
	}

	if (helpCase === 'economy') {
		return economy(msg, args, msg.author)
	}

	if (helpCase === 'utility') {
		return utility(msg, args, msg.author)
	}

	if (helpCase === 'all') {
		if (!msg.author.id === '726735174229819392') {
			
			return msg.channel.send({embeds: [
				error ({
					num: 401,
					code: 'UNAUTHORIZED',
					name: 'You are not authorized',
					value: 'This command is restricted because it is under development. Only the development team can access this command. Please check back later.',
					help: '!Help'
				}, msg.author)
			]})
		} else {
			return all(msg, args, msg.author)
		}
	}

	// Individual commands help

	if (helpCase === 'kick') {
		return msg.channel.send( { embeds: [help(kick, msg.author)] } )
	}

	if (helpCase === 'ban') {
		return msg.channel.send( { embeds: [help(ban, msg.author)] } )
	}

	if (helpCase === 'clear' || helpCase === 'purge') {
		return msg.channel.send( { embeds: [help(purge, msg.author)] } )
	}

	if (helpCase === 'ud') {
		return msg.channel.send( { embeds: [help(ud, msg.author)] } )
	}

	if (helpCase === 'log') {
		return msg.channel.send( { embeds: [help(log, msg.author)] } )
	}

	if (helpCase === 'wiki' || helpCase === 'wikipedia') {
		return msg.channel.send( { embeds: [help(wiki, msg.author)] } )
	}

	if (helpCase === 'inspire' || helpCase === 'quote') {
		return msg.channel.send( { embeds: [help(inspire, msg.author)] } )
	}

	if (helpCase === 'meme') {
		return msg.channel.send( { embeds: [help(meme, msg.author)] } )
	}

	if (helpCase === 'anime') {
		return msg.channel.send( { embeds: [help(anime, msg.author)] } )
	}

	if (helpCase === 'dic' || helpCase === 'dict' || helpCase === 'dictionary') {
		return msg.channel.send( { embeds: [help(dict, msg.author)] } )
	}

	if (helpCase === 'balance' || helpCase === 'bal') {
		return msg.channel.send({embeds: [help(balance, msg.author)]})
	}

	if (helpCase === 'daily') {
		return msg.channel.send({embeds: [help(daily, msg.author)]})
	}

	if (helpCase === 'userinfo' || helpCase === 'memberinfo') {
		return memberinfo(msg, args, msg.author)
	}

	else {
		return msg.channel.send({embeds: [
			error ({
				num: 404,
				code: 'NOT_FOUND',
				name: 'Could not find requested help',
				value: `We could not find help for the requested function: \` ${helpCase} \``,
				help: '!Help'
			}, msg.author)
		]})
	}
}

export default helper