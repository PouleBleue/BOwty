const Discord = require("discord.js");

module.exports.run = (message, args) => {
    let Saymessage = args.join(" ")
    if(!Saymessage) return message.reply("Tu dois précisé ton message!")
    message.channel.send(`**Le message de ${message.author.username} est ${Saymessage}**`)
}

module.exports.help = {
    name: "say",
    description: "lol",
}
