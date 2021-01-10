const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = (message, args) => {
    let guild = message.guild;

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(guild.iconURL())
    .setDescription(`Information sur le serveur : ${guild.name}: `)
    .addField("ID du serveur: ", `${guild.id}`)
    .addField("Owner du serveur:", `${guild.owner.user.tag}`)
    .addField("Roles", `${guild.roles.cache.size}`)
    .addField("Crée le:", `${moment(guild.createdAt).format("DD/MM/YYYY")}`)
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "serverinfo"
}
