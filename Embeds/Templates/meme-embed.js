import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function memeEmbedFunction (msg, args, obj) {

	const memeBed = new MessageEmbed()
	.setTitle(`${obj.title}`)
	.setAuthor(`${client.user.username} fun`, client.user.displayAvatarURL())
	.setURL(`https://www.reddit.com${obj.link}`)
	.setColor('#39ad58')
	.setImage(obj.imgURL)
	.setFooter(`MEME?r=dankmemes&id=${msg.author.id}`, msg.author.displayAvatarURL())
	
	
	return memeBed

}


export default memeEmbedFunction