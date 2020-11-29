const Discord = require("discord.js")
module.exports.run = (message, args) => {
    let hug = [
        "https://media.discordapp.net/attachments/669682722641281030/693039173749440541/tenor_1.gif",
         "https://media.discordapp.net/attachments/669682722641281030/693039174307020840/tenor.gif", 
         "https://media.discordapp.net/attachments/669682722641281030/693039174697222174/giphy.gif", 
         "https://media.discordapp.net/attachments/669682722641281030/693039175087423498/PersonalUnlinedAsiaticwildass-size_restricted.gif", 
         "https://cdn.discordapp.com/attachments/669682722641281030/693075288200052736/tenor.gif", 
         "https://cdn.discordapp.com/attachments/669682722641281030/693075336396800030/giphy.gif", 
         "https://cdn.discordapp.com/attachments/669682722641281030/693075710071275571/46b0a213e3ea1a9c6fcc060af6843a0e.gif", 
         "https://cdn.discordapp.com/attachments/669682722641281030/693076193729052682/source_1.gif"
    ]

        let random = hug[Math.floor(Math.random() * hug.length)];

        let user = message.mentions.users.first()
        if(!user){
            message.reply(`Tu as mentionné personne !`)
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} slap ${user.username}`)
        .setColor("RANDOM")
        .setImage(random)
        .setFooter(`${message.author.username} | b!help`)
        message.channel.send(embed)
}

module.exports.help = {
    name: "slap",
    description: "ok",
}