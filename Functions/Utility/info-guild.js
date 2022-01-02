import error from '../../Embeds/error.js'
import infoEmbed from '../../Embeds/Templates/info-embed.js'
import util from '../../Server/utility.js'


function foo (msg, args) {

	let {guild} = msg

	/* let roles = [`@everyone, \n`]
	guild.roles.cache.forEach(role => {

		if (role.name === '@everyone') return

		if (roles[roles.length - 1] === `*+${guild.roles.cache.size - roles.length + 1} more...*`) {
			return
		}

		if (roles.toString().length > 550) {
			return roles.push(`*+${guild.roles.cache.size - roles.length} more...*`)
		}

		roles.push(`<@&${role.id}>, \n`)

	}) */

	let creationDate = util.preciseDate(new Date(guild.createdTimestamp).toString())

	const obj = {
		obj: guild,
		type: 'Guild',
		title: `${guild.name}\'s guild`,
		thumbnail: guild.iconURL(),
		fields: [
			{
				name: 'Name', value: util.inlineCode(guild.name)
			}, {
				name: 'Owner', value: `<@${guild.ownerId}>`, inline: true
			}, {
				name: 'ID', value: util.inlineCode(guild.id), inline: true
			}, {
				name: 'Date created', value: util.inlineCode(creationDate)
			}, {
				name: 'Total members', value: util.inlineCode(guild.members.cache.size.toString(), ' '), inline: true
			}, {
				name: `Total amount of roles`, value: util.inlineCode(guild.roles.cache.size.toString(), ' '), inline: true
			}
		]
	}

	let embed = infoEmbed(msg, args, obj)

	msg.channel.send({embeds: [embed]})

}

const meta = {
  name: 'MembeGuild info',
  description: 'Returns information about the current guild including roles, ID, owner, and creation date.',
  syntax: '!Guildinfo',
  category: 'Utility',
  perms: 'none',
  version: '2.2',
  comm: 'added in A 1.9'
}


export { meta }
export default foo