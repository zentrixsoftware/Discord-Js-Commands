/////////////////////////////////////////////////////////////////////////////////
//                          Zentrix (Navaz)                                   //
//  What ever is in comments it will be marked in "//", These commands where  //
//  coded for my bot and may not work without making a few adjustments        //
//  This command if for sending messages in cool embed colors.                //
//                                                                            //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////


//For the embed i am using 'Method' and not value or properties but you can use whatever that flaots your boat
// Read discord.js documentation for more details

const { RichEmbed } = require('discord.js');
const config = require('../config/config.json'); // This will be diffrent for you
exports.run = async (client, msg, args) => { //This will be partly diffrent to yours
    const embed = new RichEmbed() // Embed constructor 
    .setColor(Math.floor(Math.random()*16777215)) //This generates diffrent color embed each time the command is used
    .setDescription(args.join(' ')) //This is where the text goes i.e [prefix]embed Test or [text]
    msg.delete(); //deletes the executed command. handy if you want a clean server 
    msg.channel.send({embed}); //Proccess of sending the embed..
    
    //This part will also be diffrent to other as its for my bot..
};
exports.help = {
    category: 'util',
    usage: 'embed',
    description: 'send messages in embed',
    detail: 'embeds messages',
    botPerm: ['SEND_MESSAGES'],
    authorPerm: [],
    alias: ['em'],
    example: 'embed <Message>'
};


//Command Preview : http://prntscr.com/irtcj7
