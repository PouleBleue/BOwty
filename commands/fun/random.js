const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let random = Math.floor(Math.random() * 9);
    message.channel.send(`**Le nombre aléatoire est ${random}`)
}

module.exports.help = {
    name: "random"
}
