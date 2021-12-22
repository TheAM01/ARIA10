import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'
import list from '../Server/all.js'
import util from '../Server/utility.js'


function helper (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`Utility Help`)
	.setAuthor(`${client.user.username} help`, client.user.displayAvatarURL())
	.setDescription(`This is the list of utility commands available in ${client.user.username}.\nRun the corresponding help command for each command to get its details and syntax.`)
	.addFields(util.helpFieldsArray(list.util))
	.setColor('#39ad58')
	.setFooter(`HELP?id=${person.id}&index=utility`, person.displayAvatarURL())

	return msg.channel.send({embeds: [log]})

}


const meta = {
	name: 'Utility Help',
	description: 'Lists all utility commands.',
	syntax: '!Help Utility',
	category: 'Help',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.9'
}


export {meta}
export default helper