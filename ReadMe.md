# ARIA 1.10

*` Build: Stable ALPHA 1.10.6 `*

Refer to [Assets/Update.md](https://github.com/TheAM01/ARIA10/tree/Projects/Assets/Update.md) for the recent updates.

## Introduction

Advanced Robotic Artificial Intelligence (ARAI), stylized as ARIA, is an advanced Discord bot Engine, built in [discord.js](https://npmjs.org/package/discord.js). ARIA is packed with moderation, fun & utility commands with new commands being added very often. Whether you are aiming to build a bot for a big server or a small community, ARIA Engine will never fail to fulfill your requirements. ARIA Engine is open source. Feel free to clone and modify based on your needs. 

## Commands

ARIA categorizes commands into categories. It has the following sectors (categories):

- Moderation
- Fun
- Utility
- Economy

## Guide

For object declaration guide, please refer to the [Object map](https://github.com/TheAM01/ARIA10/tree/Projects/Assets/Object-map.md).

For error declaration guide, please refer to the [Error guide](https://github.com/TheAM01/ARIA10/tree/Projects/Assets/Error-guide.md).

To find function or embed templates, refer to the [Templates](https://github.com/TheAM01/ARIA10/tree/Projects/Assets/Templates.md).

### Rules

ARIA Engine has strict object and function formatting rules. These rules are discussed below.

#### Functions/Commands

Commands should be added in their respective sector in the ` Functions ` folder. Write command's function within the ` foo ` function. Change to ` async ` if needed.
```js

// Functions/[category]/[command-name].js

function foo (msg, args) {
  // function statements
}

```

#### Command info

Command info is the info that will be shown in the help-info embed when the help for that specific command will be triggered. Put the command's info in the ` meta ` object in the function's file & export it. For meta object declaration, please refer to the [object declaration guide](https://github.com/TheAM01/ARIA10/tree/Projects/Assets/Object-map.md).

```js

const meta = {
  //meta object declaration
}

export {meta} // exporting the info

```

#### Adding the command

In order to make your bot listen for your command, import your command in the ` Handlers/messages.js ` file. Add an ` if...else ` statement within the respective sector in the ` cmd ` function. The ` command ` variable stores the first word (argument) of the command. Use ` await ` to execute the command.

```js

import cmd from '../Functions/[category]/[command-name].js'; // importing the command

export default async function cmd (msg) {

  //  ...
  
  if (command === '![cmd]' || command === '![command]') {
    await cmd (msg, args)
  }
  
	//  ...
}

```

#### Client side errors

To make the client aware of an error, use the Error module in ` Embeds/error.js `. `error.js` handles client side errors. This module uses basic https error format. Refer to the [error guide](https://github.com/TheAM01/ARIA10/tree/Projects/Assets/Error-guide.md) for error object declaration.

```js
function foo (msg, args) {

  if (!args[1]) { 

		return msg.channel.send({
			embeds: [ error({
				num: ERR_NUM,
				code: 'ERROR_CODE',
				name: 'error',
				value: `error details.`,
				help: '!Help [this-command]'
			}, msg.author)]
		})

	}
  
  // statements if there is no error
  
}

```

### Using the database

ARIA Engine comes with Replit's database system. If you are using it on Replit, skip the next steps, else if you are running it on your local machine,

1. Go to [Replit](https://replit.com) and signin/register for an account.
2. Create a new NodeJS/TypeScript REPL.
3. Open shell and run ` echo $REPLIT_DB_URL `. Shell will return a URL.
4. Go back to your local machine and run ` npm install replit ` in your shell.
5. Paste this URL in ` Main/database.js ` file in the ` new Database() ` constructor.
  - ` const db = new Database('YOUR_URL'); `
6.  Save changes.

** Using the database **
To use the database in your code, import the database on the top of your code. Use ` async function ` with ` await ` to execute the database functions. Refer to [Replit's database documentation](https://docs.replit.com/hosting/database-faq) for more info.

To store a value, use ` db.set("NAME", "VALUE"); `
To get a value, use ` db.get("NAME"); `
To delete a value, user ` db.delete("NAME"); `

```js

import db from '../../Main/database.js'


async function foo (msg, args) {

  //  ...
  
  await db.set(`${msg.author.id}_balance`, 2000)
  
  //  ...
  
}

```

---

*Thats it for now! You will be made aware of new changes when they roll out. Stay tuned.*
