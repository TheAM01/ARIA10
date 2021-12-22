import error from '../../Embeds/error.js'
import { Permissions } from 'discord.js'
import client from '../../Main/client.js'


function bulkDelete(msg, args) {

	let amount
	let author = msg.guild.members.cache.get(msg.author.id);
	let self = msg.guild.members.cache.get(client.user.id);

	if (!args[1]) {

		return msg.channel.send( {embeds: [error ( {
			num: 400,
			code: 'BAD_REQUEST',
			name: 'Missing value [amount]',
			value: 'You did not provide a valid amount of messages to delete.',
			help: '!Help Clear'
		}, msg.author)]})

	} else {
		amount = parseInt(args[1]);
	}

	if (author.permissions.has([Permissions.FLAGS.MANAGE_MESSAGES]) == false) {

		return msg.channel.send( {embeds: [error ( {
			num: 401,
			code: 'UNAUTHORIZED',
			name: 'Missing permissions [MANAGE_MESSAGES]',
			value: 'You dont have the permissions to manage and delete messages. Consider contacting a moderator.',
			help: '!Help Clear'
		}, msg.author)]})

	}
	
	if (self.permissions.has([Permissions.FLAGS.MANAGE_MESSAGES]) == false) {

		return msg.channel.send( {embeds: [error ( {
			num: 401,
			code: 'UNAUTHORIZED',
			name: 'Missing permissions [MANAGE_MESSAGES]',
			value: 'I dont have the permissions to manage and delete messages. Consider contacting a moderator.',
			help: '!Help Clear'
		}, msg.author)]})

	}

	if (amount % 1 != 0) {

		return msg.channel.send( {embeds: [error ( {
			num: 400,
			code: 'BAD_REQUEST',
			name: `Invalid value [amount]`,
			value: 'Enter a valid integer from 2 - 10.',
			help: '!Help Clear'
		}, msg.author)]})

	}

	if (amount < 2 || amount > 100) {

		return msg.channel.send( {embeds: [error ( {
			num: 400,
			code: 'BAD_REQUEST',
			name: `Invalid value [amount] (\` ${amount} \`)`,
			value: 'You can only enter a value from 2 - 100',
			help: '!Help Clear'
		}, msg.author)]})

	}

	return msg.channel.bulkDelete(amount)
	
}


const meta = {
	name: 'Clear',
	description: 'Bulk deletes and clears a specific amount (2 - 100) of messages in the current channel.',
	syntax: '!Clear [amount]',
	category: 'Utility',
	perms: 'MANAGE_MESSAGES',
	version: '1.2',
	comm: 'Added in alpha 1.7'
}


export default bulkDelete
export {meta}