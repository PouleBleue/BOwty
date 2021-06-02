const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (message, args) => {
    const owo = new Discord.MessageEmbed()
        .setTitle("Liste des commandes: (prefix : b!)")
        .addField("Modération:", "`Ban`,`Kick`, `clear`, `mute`, `nuke`, `tmute`, `dm`, `unban`")
        .addField("Fun:", "`8ball`, `cry`, `wasted`, `crandom`, `cat`, `dog`, `fox`, `hug`, `meme`, `pfc`, `say`, `slap`, `trigger`, `rip`, `inverse`, `facepalm`, `emojify`, `baka`")
        .addField("Bot info :", "`avatar`, `botinfo`, `help`, `ping`, `serverinfo`, `userinfo`, `roleinfo`")
        .setColor("#0000FF")
        message.channel.send(owo)
}

module.exports.help = {
    name: "help",
    description: "lgijzomeirdhirhsdjkdskjkdsgghfdhgjfdkghdsghjkds",
}
