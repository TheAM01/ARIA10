import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function embedFunction (msg, args, obj) {

	const embed = new MessageEmbed()
	.setTitle(`${msg.author.username}'s bank balance`)
	.setAuthor(`${client.user.username} Economy`, client.user.displayAvatarURL())
	.setColor('#00aeff')
	.addFields(
		{
			name: 'Cash in wallet', value: obj.wallet.toString(), inline: true
		}, {
			name: 'Cash in bank', value: obj.bank.toString(), inline: true
		}
	)
	.setFooter(`BAL?id=${msg.author.id}`, msg.author.displayAvatarURL())
    
    
  return embed

}


export default embedFunction