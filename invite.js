/*
This command basicly a fancy way to tell users how they can add your bot
check at the bottom to see how it looks
*/

const { RichEmbed } = require('discord.js');
const config = require('../config/config.json');
exports.run = async (client, msg, args) => {

const embed = new RichEmbed() // Discord embed constructor 
.setAuthor(msg.author.username , msg.author.avatarURL) //Show username and profile pic of the person who executed command 
.setColor(Math.floor(Math.random()*16777215)) //Random embed color 
.addField('Invite Bot:' , 'Hey feel free to invite my bot to your server')
.addField('learners bot', '[Invite bot](Your-0auth2-link') //This "[]()" is basicly hyperlinking a text or word 
.setTimestamp(); //Stamps new time 

msg.channel.send({embed}) //Send the embed to the channel the command was executed
 
 //msg.author.send({embed})
// You can also use this to get the bot to send it to the dms

 
 //This part will be diffrent based on your bot..
};
exports.help = {
    category: 'util',
    usage: 'invite',
    description: 'sends information on how to add bot to your server',
    detail: 'Embed Invitation',
    botPerm: ['SEND_MESSAGES'],
    authorPerm: [],
    alias: [ ],
    example: 'invite'
};


//Preview : http://prntscr.com/isa7zq
