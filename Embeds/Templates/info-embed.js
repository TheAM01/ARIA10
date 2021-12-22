import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function embedFunction (msg, args, obj) {



  const embed = new MessageEmbed()
	.setTitle(`${obj.title} info`)
	.setAuthor(`${client.user.username} Utility`, client.user.displayAvatarURL())
	.addFields(obj.fields)
	.setColor('#39ad58')
	.setThumbnail(obj.person.displayAvatarURL())
	.setFooter(`INFO?type=${obj.type.toLowerCase()}&id=${msg.author.id}`, msg.author.displayAvatarURL())
    
    
  return embed

}


export default embedFunction