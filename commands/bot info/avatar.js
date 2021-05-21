const Discord = require("discord.js");

module.exports.run = (message, args) => {
    let user = message.mentions.users.first() || message.author
        const data = user.displayAvatarURL({dynamic: true, size: 4096})
        message.channel.send(`Photo de profil de ${user.username} \n${data}`);
}

module.exports.help = {
    name: "avatar",
    description: "oof",
}