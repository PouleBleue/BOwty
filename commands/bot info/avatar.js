const Discord = require("discord.js");

module.exports.run = (message, args) => {
    let user = message.mentions.users.first() || message.author
        const data = user.displayAvatarURL({dynamic: true, size: 4096})
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`Photo de profil de ${user.username}`)
        .setImage(data)
        .setColor("RANDOM")

        message.channel.send(embed);
}

module.exports.help = {
    name: "avatar",
    description: "oof",
}