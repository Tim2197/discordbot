const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('message', msg => {
    if (msg.content === "you a bitch") {
        msg.message('no u');
    }
});

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`)
});

client.login(token);