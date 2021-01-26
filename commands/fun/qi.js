const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let user = message.mentions.users.first() || message.author
    if(!user) return message.channel.send("Tu as oublié de mentionné quelqu'un")
    let qi = Math.floor(Math.random() * 200) + 1;
    message.channel.send(`**${user} a ${qi} de QI**`)
}

module.exports.help = {
    name: "qi",
    description: "oof"
}
