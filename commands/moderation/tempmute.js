const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (message, args) => {
       let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas trouvé d'utilisateur !");
    let user = message.mentions.users.first();
    if (user === message.author) return message.channel.send("Tu ne peux pas te mute toi même ! ")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Il te manque des permissions");
    let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
    let raison = args[2];

    if(!muterole){
      message.channel.send("Merci de crée un rôle `Muted`(Le bot créera le rôle automatiquement, cette fonctionnalité sera ajouté dans une future mise à jour)")
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Il faut que tu dises le temps exact pendant lequel l'utilisateur choisi sera mute !");
    if(!raison) return message.channel.send("Merci de mettre une raison !");
    await(tomute.roles.add(muterole.id));
    
    const pdp = user.displayAvatarURL()

    const embed = new Discord.MessageEmbed()
    .setTitle("Mute")
    .setColor("RANDOM")
    .setThumbnail(pdp)
    .addField("Utilisateur :", `<@${tomute.id}>`)
    .addField("Mute par :", `${message.author.username}`)
    .addField("Mute pendant :", `${ms(ms(mutetime))}`)
    .addField("Raison :", `${raison}`)
    message.channel.send(embed)



    user.send(`Tu as été mute pendant ${ms(ms(mutetime))}`)
  
    setTimeout(function(){
      tomute.roles.remove(muterole.id);
      message.channel.send(`<@${tomute.id}> a été unmute!`);
    }, ms(mutetime));
}
module.exports.help = {
    name: "tmute",
    description: "owo"
}
