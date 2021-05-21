const Discord = require("discord.js");
const { set } = require("mongoose");
const ms = require("ms");

module.exports.run = async (message, args) => {
  let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
  if(!muterole){
    return message.channel.send("Le rôle mute est introuvable, veuillez utiliser la commande `b!configmute`")
  };
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas trouvé d'utilisateur !");
    let guild = message.guild;
    let user = message.mentions.users.first();
    if (user === message.author) return message.channel.send("Tu ne peux pas te mute toi même ! ")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Il te manque des permissions");
    let raison = args.join(" ").slice(5);
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



    user.send(`Tu as été mute du serveur portant le nom de ${guild.name} pendant ${ms(ms(mutetime))}`)
  
    setTimeout(function(){
      tomute.roles.remove(muterole.id);
      message.channel.send(`<@${tomute.id}> a été unmute!`);
    }, ms(mutetime));
  }
  
module.exports.help = {
    name: "tmute",
    description: "owo"
}