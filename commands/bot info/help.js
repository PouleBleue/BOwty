const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports.run = (message, args) => {
    const embed = new MessageEmbed()
    .setTitle("Liste des commandes: (prefix : b!)")
    .addField("Modération:", "`Ban`,`Kick`, `clear`, `mute`, `nuke`, `tmute`, `dm`")
    .addField("Economie (En bêta) ", "`daily`, `balance`, `work`" )
    .addField("Fun:", "`8ball`, `cat`, `dog`, `fox`, `hug`, `meme`, `pfc`, `qi`, `random`, `say`, `slap`, `trigger`")
    .addField("Bot info :", "`avatar`, `botinfo`, `help`, `ping`, `serverinfo`, `userinfo`")
    .setColor("#0000FF")
    message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    description: "lgijzomeirdhirhsdjkdskjkdsgghfdhgjfdkghdsghjkds",
}
