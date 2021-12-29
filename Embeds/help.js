import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'
import util from '../Server/utility.js'


const helpEmbed = (help, person) => {

	if (!help.timeout) help.timeout = 'none' 

	return new MessageEmbed()
	.setTitle(`${help.name} command help`)
	.setAuthor(`${client.user.username} help`, client.user.displayAvatarURL())
	.setColor('#39ad58')
	.setDescription(`**About the command:**\n${help.description}`)
	.addFields(
		{
			name: 'Category', value: help.category
		}, {
			name: 'Standard syntax', value: `\`\`\`${help.syntax}\`\`\``
		}, {
			name: 'Timeout', value: util.codeFormatSmall(` ${help.timeout} `), inline: true
		}, {
			name: 'Required permissions', value: `\` ${help.perms} \``, inline: true
		}
	)
	.setFooter(`HELP?id=${person.id}&index=${help.name.toLowerCase().replace(/ /g, '_')}`, person.displayAvatarURL())

}

export default helpEmbed