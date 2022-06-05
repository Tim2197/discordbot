const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;
const password = process.env.PASS;
const username = process.env.USER;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${username}:${password}@cluster0.q4cnn.mongodb.net/?retryWrites=true&w=majority`;
const dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`)
});

client.login(token);