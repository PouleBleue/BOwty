const Discord = require("discord.js");

module.exports.run = (message, args) => { 
    var binfo_embed = new Discord.MessageEmbed()
    .setColor("18d67e")
    .setTitle(`Infos sur le bot : ${message.client.user.tag}`)
    .addField("Créateur du bot :", `PouleBleue`)
    .addField("Bot crée :", `Le 18 octobre 2020`)
    .addField("Nombre total d'utilisateurs :", message.client.users.cache.size)
    .addField("Nombre total de serveurs :", message.client.guilds.cache.size)
    .addField("Version gamma :", `Version : g1.0.0`)
    .addField("Version de discord.js :", "12.5.1")
    .setTimestamp()
message.channel.send(binfo_embed)
}

module.exports.help = {
    name: "botinfo",
    description: "lol",
}
