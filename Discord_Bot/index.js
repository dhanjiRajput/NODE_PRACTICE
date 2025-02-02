const { Client, Events, GatewayIntentBits }= require ('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
require("dotenv").config();

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    message.reply({
        content: "Hii, i'm from Bot How Can I Help You....!"
    });
});

client.on("interactionCreate",(interaction)=>{
   interaction.reply("Pong!");
});

client.login(process.env.bot_token);