const { RichEmbed } = require('discord.js');
const Discors = require('discord.js');

exports.run = async (client, args, msg) => {
//Yet again im using "Method" but you can still use "Properties or Value" 

const embed = new RichEmbed()
.setAuthor(msg.author.username) //Show username of the person who executed command 
.setColor(Math.floor(Math.random()*16777215)) //Random embed color 
.addField(Invite Bot:, 'Hey feel free to invite my bot to your server')
.addField('learners bot', '[Invite bot](Your-0auth2-link')) //This "[]()" is basicly hyperlinking a text or word 
.setTimestamp(); //Stamps new time 

//Sends the embed in the channel command was executed
msg.channel.send({embed})


//You can use this to send to users dm when they use the command
msg.author.send({embed})

};
//This is for my bot your will be diffrent
exports.help = { 
category: 'util', 
usage: 'invite', 
description: 'invitation to invite bot', 
detail: 'embeds messages',
 botPerm: ['SEND_MESSAGES'], authorPerm: [], 
 alias: ['add'], 
 example: 'invite'

 };


//I will upload url to show example 
