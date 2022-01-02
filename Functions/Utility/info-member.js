import error from '../../Embeds/error.js'
import infoEmbed from '../../Embeds/Templates/info-embed.js'
import util from '../../Server/utility.js'


function foo (msg, args) {

	let person

	if (!args[1] || !msg.mentions.members.first()) {

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [user]',
				value: 'Please mention a user to get their info.',
				help: '!Help memberinfo'
			}, msg.author)]
		});
		
	} else {
		person = msg.mentions.members.first();
	}

	let timeJoined = new Date(person.joinedTimestamp)
	let timeRegistered = new Date(person.user.createdAt)
	let roles = [];

	timeJoined = util.preciseDate(timeJoined)
	timeRegistered = util.preciseDate(timeRegistered)

	for (let i = 0; i < person._roles.length; i++) {
		roles.push(`<@&${person._roles[i]}>`)
	}
	roles.push('@everyone')

	const obj = {
		obj: person,
		thumbnail: person.user.displayAvatarURL(),
		type: 'Member',
		title: `${person.user.username}\'s user`,
		fields: [
			{
				name: 'Name', value: person.user.username
			}, {
				name: 'ID', value: person.user.id
			}, {
				name: `Date joined ${msg.guild.name}`, value: timeJoined
			}, {
				name: 'Date joined Discord', value: timeRegistered
			}, {
				name: 'Roles', value: roles.join(',\n')
			}
		]
	}

	let embed = infoEmbed(msg, args, obj)

	msg.channel.send({embeds: [embed]})

}

const meta = {
  name: 'Member info',
  description: 'Returns information about the mentioned member including roles, ID, joining, and registering date. Note that in order to get info about yourself, you will have to mention yourself.',
  syntax: '!Userinfo @[user]',
  category: 'Utility',
  perms: 'none',
  version: '2.2',
  comm: 'added in A 1.9'
}


export { meta }
export default foo