const Discord = require("discord.js");

module.exports.run = (message, args) => {
    const user = message.mentions.users.first();
      if (user === message.author) return message.channel.send("Tu ne peux pas te bannir toi même ! ")
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
        if (user) {
          const member = message.guild.member(user);
          const raison = args.join(" ").slice(22)
         
          if(!raison) return message.channel.send("Merci de mettre une raison")
          if (member) {
            member.ban({
                reason: raison,})
              .then(() => {
                const embed  = new Discord.MessageEmbed()
                .setTitle("Ban")
                .setColor("RANDOM")
                .addField("Utilisateur bannis :", `${user.tag}`)
                .addField("Bannis par :", `${message.author.tag}`)
                .addField("Raison :", `${raison}`)
                .setTimestamp()
                message.channel.send(embed)
              })
              .catch(err => {
                message.reply("Je n'ai pas pu bannir ce membre");
              });
          } else {
            message.reply("Ce membre n'existe pas !");
          }
        } else {
          message.reply("**Mais voyons, tu n'as mentionné personne pour ban**");
        }
}

module.exports.help = {
    name: "ban",
    description: "XD"
}