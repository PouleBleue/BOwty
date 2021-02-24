const Discord = require("discord.js");

module.exports.run = async (message, args) => {
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas trouvé d'utilisateur !");
    let user = message.mentions.users.first();
    if (user === message.author) return message.channel.send("Tu ne peux pas te unmute toi même ! ")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Il te manque des permissions");
    let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
    tomute.roles.remove(muterole.id);
    message.reply(`<@${tomute.id}> a été unmute!`);
}


module.exports.help = {
    name: "unmute",
    description: "owo"
}
