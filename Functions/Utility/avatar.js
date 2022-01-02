import error from '../../Embeds/error.js'
import { MessageEmbed } from 'discord.js'


function foo (msg, args) {

	let person;

	if (!msg.mentions.members.first() || args[1] === '-s') {
		person = msg.author
	}

	if (msg.mentions.members.first()) {
		person = msg.mentions.members.first().user
	}

	let embed = new MessageEmbed()
	.setTitle(`${person.username}'s avatar`)
	.setColor('#39ad58')
	.setImage(person.displayAvatarURL({size: 1024}))
	.setFooter(`AVATAR?id=${person.id}`)

	msg.channel.send({embeds: [embed]})
	
}

const meta = {
	name: 'Avatar',
	description: 'Displays the mentioned user\'s profile picture/avatar.',
	syntax: '!Avatar @[user (optional)]',
	timeout: 'none',
	category: 'Utility',
	perms: 'none',
	version: '3.1',
	comm: 'additional comments [unread]'
}


export { meta }
export default foo