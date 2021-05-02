const Discord = require("discord.js");

module.exports.run = async (message, args) => {
  let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
  if(!muterole){
    return message.channel.send("Le rôle mute est introuvable, veuillez utiliser la commande `b!configmute`")
  };
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas trouvé d'utilisateur !");
    let user = message.mentions.users.first();
    let raison = args[1];
    if (user === message.author) return message.channel.send("Tu ne peux pas te mute toi même ! ")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Il te manque des permissions");
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

    }
module.exports.help = {
    name: "mute",
    description: "owo"
}
