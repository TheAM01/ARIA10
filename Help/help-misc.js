import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'
import list from '../Server/all.js'
import util from '../Server/utility.js'


function helper (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`Miscellaneous Help`)
	.setAuthor(`${client.user.username} help`, client.user.displayAvatarURL())
	.setDescription(`This is the list of miscellaneous commands available in ${client.user.username}.\nRun the corresponding help command for each command to get its details and syntax.`)
	.addFields(util.helpFieldsArray(list.misc))
	.setColor('#39ad58')
	.setFooter(`HELP?id=${person.id}&index=misc`, person.displayAvatarURL())

	return msg.channel.send({embeds: [log]})

}


const meta = {
	name: 'Miscellaneous Help',
	description: 'Lists all miscellaneous commands.',
	syntax: '!Help Miscellaneous',
	category: 'Help',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.6'
}


export {meta}
export default helper