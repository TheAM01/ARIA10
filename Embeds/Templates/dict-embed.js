import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function dictFunction (msg, args, obj) {

	const dictBed = new MessageEmbed()
	.setTitle(`${msg.author.username}\'s dictionary lookup`)
	.setAuthor(`${client.user.username} fun`, client.user.displayAvatarURL())
	.addFields(obj.fields)
	.setURL(obj.url)
	.setColor('#39ad58')
	.setFooter(`DICTIONARY?q=${obj.term}&id=${msg.author.id}`)
	
	
	return dictBed

}


export default dictFunction