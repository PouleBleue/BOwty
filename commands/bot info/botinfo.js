const Discord = require("discord.js");

module.exports.run = (message, args) => { 
    var binfo_embed = new Discord.MessageEmbed()
    .setColor("18d67e")
    .setTitle(`Infos sur le bot : ${message.client.user.tag}`)
    .addField("Créateur du bot :", `PouleBleue`)
    .addField("Bot crée :", `Le 18 octobre 2020`)
    .addField("Nombre total de personnes :", message.client.users.cache.size)
    .addField("Nombre total de serveur :", message.client.guilds.cache.size)
    .addField("Version bêta :", `Version : 0.1.2.0`)
    .setTimestamp()
message.channel.send(binfo_embed)
}

module.exports.help = {
    name: "botinfo",
    description: "lol",
}