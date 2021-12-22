import error from '../../Embeds/error.js'
import reddit from 'simple-reddit-api'
import memeEmbed from '../../Embeds/Templates/meme-embed.js'


async function meme (msg, args) {

	let meme = await reddit.randomPost({subreddit: 'dankmemes', fulldata: true}).then((res) => {
		return res.posts[0].data
	});

	let memeData = {
		title: meme.title,
		sub: meme.subreddit,
		imgURL: meme.url,
		link: meme.permalink
	}

	let embed = memeEmbed(msg, args, memeData)

	msg.channel.send({ embeds: [embed]})

}

const meta = {
	name: 'Meme',
	description: 'Fetches a random post from r/dankmemes',
	syntax: '!Meme',
	category: 'Fun',
	perms: 'none',
	version: '1.2',
	comm: 'added in Alpha 1.7'
}


export { meta }
export default meme