const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = (message, args) => {
    let presencestatus = {
        "idle": "Inactif",
        "dnd": "Ne pas déranger",
        "online": "En ligne",
        "offline": "Hors ligne"
    }
    let mentionMember = message.mentions.members.first();
    let mentionUser = message.mentions.users.first();
    let avatar = mentionUser.displayAvatarURL({dynamic: true});
    const roles = mentionMember.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1);
    const embed  = new Discord.MessageEmbed()
    .setTitle(`${mentionUser.username}`)
    .setThumbnail(avatar)
    .setColor("#0000FF")
    .addField("Nom d'utilisateur:", `${mentionUser.username}`)
    .addField("Identifiant du compte:", `${mentionUser.id}`)
    .addField("Date de création du compte:", `${moment(mentionUser.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss')}`)
    .addField("À rejoins le serveur:", `${moment(mentionUser.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss')}`)
    .addField("Rôle le plus haut:", `${mentionMember.roles.highest.id === message.guild.id ? "Rien." : mentionMember.roles.highest.name}`)
    .addField("Rôles:", `${roles.length}: ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.timeArray(roles) : "Rien."}`)
    message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo",
    description: "oof",
}