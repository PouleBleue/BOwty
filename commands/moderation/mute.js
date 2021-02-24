const Discord = require("discord.js");

module.exports.run = async (message, args) => {
     let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas trouvé d'utilisateur !");
    let user = message.mentions.users.first();
    let raison = args[1];
    if (user === message.author) return message.channel.send("Tu ne peux pas te mute toi même ! ")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Il te manque des permissions");
    let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
    if(!raison) return message.channel.send("Tu as oublié de mettre une raison !")
    tomute.roles.add(muterole.id);
    const pdp = user.displayAvatarURL()

    const embed = new Discord.MessageEmbed()
    .setTitle("Mute")
    .setColor("RANDOM")
    .setThumbnail(pdp)
    .addField("Utilisateur :", `<@${tomute.id}>`)
    .addField("Mute par :", `${message.author.username}`)
    .addField("Raison :", `${raison}`)
    message.channel.send(embed)

    if(!muterole){
      message.channel.send("Merci de crée un rôle `Muted`(Le bot créera le rôle automatiquement, cette fonctionnalité sera ajouté dans une future mise à jour)")
      }
}


module.exports.help = {
    name: "mute",
    description: "owo"
}
