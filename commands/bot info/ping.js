const Discord = require('discord.js')

module.exports.run = (message, args) => {
    
    const ping = new Discord.MessageEmbed()
    .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


    message.channel.send(ping);
}

module.exports.help = {
    name: "ping",
    description: "lol",
}