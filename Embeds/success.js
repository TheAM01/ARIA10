import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'


const succ = (success, person) => {
	
	const succEmbed = new MessageEmbed()
	.setTitle(`${success.title}`)
	.setDescription(success.description)
	.setColor('#00ff66')
	.setFooter(`${success.command}?num=${success.num}&id=${person.id}`, person.displayAvatarURL());

	return succEmbed

}

export default succ