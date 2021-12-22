import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function animeFunction (msg, args, obj) {

	const animeBed = new MessageEmbed()
	.setTitle(obj.title)
	.setAuthor(`${client.user.username} fun`, client.user.displayAvatarURL())
	.setDescription(obj.description)
	.addFields(obj.fields)
	.setColor('#2C4E9D')
	.setImage(obj.image)
	.setFooter(`ANIME?q=${obj.term}&i=${obj.index}&id=${msg.author.id}`)
	
	
	return animeBed

}


export default animeFunction