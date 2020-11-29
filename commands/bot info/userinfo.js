const Discord = require("discord.js");

module.exports.run = (message, args) => {
    let mentionMember = message.mentions.members.first();
    let mentionUser = message.mentions.users.first();
    let avatar = mentionUser.displayAvatarURL()

    const embed  = new Discord.MessageEmbed()
    .setTitle(`${mentionUser.username}`)
    .setThumbnail(avatar)
    .setColor("#0000FF")
    .addField("Nom d'utilisateur:", `${mentionUser.username}`)
    .addField("ID:", `${mentionUser.id}`)
    .addField("Création du compte:", `${mentionUser.createdAt}`)
    .addField("A rejoins le serveur:", `${mentionMember.joinedAt}`)
    .addField("Statut de l'utilisateur:", `${mentionUser.presence.status}`)
    message.channel.send(embed)
}

module.exports.help = {
    name: "userinfo",
    description: "oof",
}