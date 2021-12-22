import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'
import list from '../Server/all.js'
// list


function helper (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`All commands help`)
	.setAuthor(`${client.user.username} help`, client.user.displayAvatarURL())
	.setDescription(`This is the list of all commands available in ${client.user.username}.\nRun the corresponding help command for each command to get its details and syntax. Example: \`!Help [command-name]\`.`)
	.addFields(
		{
			name: 'Moderation', value: c(list.mod)
		}, {
			name: 'Fun', value: c(list.fun)
		}, {
			name: 'Utility', value: c(list.util)
		}, {
			name: 'Economy', value: c(list.econ)
		}, {
			name: 'Miscellaneous', value: c(list.misc)
		}
	)
	.setColor('#39ad58')
	.setFooter(`HELP?id=${person.id}&index=moderation`, person.displayAvatarURL())

	return msg.channel.send({embeds: [log]})

}


function c (elon) {

	let musk = []

	for (let i = 0; i < elon.length; i++) {
		musk.push(`\`${elon[i]}\`` )
	}

	return musk.join(', ')

}


const meta = {
	name: 'All commands list',
	description: 'Lists all commands.',
	syntax: '!Help All',
	category: 'Help',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.9'
}


export {meta}
export default helper