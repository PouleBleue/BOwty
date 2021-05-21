const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = (message, args) => {
    const role = message.mentions.roles.first();
    if(!role) return message.channel.send("Veuillez mentionner le rôle dont vous voulez avoir les informations.");
    const embed = new Discord.MessageEmbed()
    .setTitle(`Information sur le rôle : ${role.name}`)
    .setColor("BLUE")
    .addField("Membres possédant ce rôle:", `${role.members.size || 0}`)
    .addField("Couleur:", role.hexColor, true)
    .addField("Date de création:", moment(role.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
    .addField("Mentionnable:", role.mentionable ? "Oui" : "Non", true)
    .setFooter(`ID : ${role.id}`)
    message.channel.send(embed)
}

module.exports.help = {
    name: "roleinfo"
}
