const Discord = require("discord.js");

module.exports.run = (message, args) => {
    const user = message.mentions.users.first();
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Il te manque des permissions");
        if (user === message.author) return message.channel.send("Tu ne peux pas te warn toi même!")
        let reason = args.join(" ").slice(22);
  if (!reason) return message.channel.send("Merci de mettre une raison!")
 

  let warnEmbed = new Discord.MessageEmbed()
    .setTitle("Warn")
    .setColor("#fc6400")
    .addField("Utilisateur", `${user.tag}`)
    .addField("Moderateur", `${message.author.tag}`)
    .addField("Raison", `${reason ? reason : "Rien."}`)
    .setTimestamp()
  message.channel.send(warnEmbed);

    }

module.exports.help = {
    name: "warn",
    description: "Permet de Warn un membre d'un serveur"
}