import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('Hello')
});

function up () {
	return app.get('/status', (req, res) => {
    res.send('Bot is up')
	})
} 

app.listen(3000)


export default up