  
const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = (message, args) => {
    let guild = message.guild;

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(guild.iconURL())
    .setTitle(`Information sur le serveur : ${guild.name}`)
    .addField("ID du serveur: ", `${guild.id}`)
    .addField("Owner du serveur:", `${guild.owner.user.tag}`)
    .addField("Roles:", `${guild.roles.cache.size}`)
    .addField("Emojis:", `${guild.emojis.cache.size}`)
    .addField("Nombre total de membres:", `${guild.memberCount}`)
    .addField("Nombre de total de bots:", `${guild.members.cache.filter(member => member.user.bot).size}`, true)
    .addField("Nombre total d'humains:", `${guild.members.cache.filter(member => !member.user.bot).size}`)
    .addField("Crée le:", `${moment(guild.createdAt).format("DD/MM/YYYY")}`)
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "serverinfo"
}
