const Discord = require("discord.js");
const client = new Discord.Client()

module.exports.run = (message, args) => {
        if(message.member.voice.channel){
        message.member.voice.channel.join().then(connection => {

        }).catch(err => {
            message.reply("Je n'ai pas pu me connecté au salon vocal!")
        });
    }
    else {
        message.reply("Vous n'êtes pas connecté en vocal")
    }
}

module.exports.help = {
    name: "join",
    description: "AH"
}
