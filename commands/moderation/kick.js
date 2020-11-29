const Discord = require("discord.js");

module.exports.run = (message, args) => {
    const user = message.mentions.users.first();
        if (user === message.author) return message.channel.send("Tu ne peux pas te kick toi même ! ")
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
        const raison = args.join(" ").slice(22)
        if(!raison) return message.channel.send("Merci de mettre une raison")
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.kick(raison)
              .then(() => {
                const embed  = new Discord.MessageEmbed()
                .setTitle("Kick")
                .setColor("#FF0000")
                .addField("Utilisateur kick :", `${user.tag}`)
                .addField("Kick par :", `${message.author.tag}`)
                .setTimestamp()
                message.channel.send(embed)
              })
              .catch(err => {
                message.reply("Je n'ai pas pu kick ce membre :/");
                console.error(err);
              });
          } else {
            message.reply("Cette utilisateur ne se trouve pas dans ce serveur !");
          }
        } else {
          message.reply("**Mais voyons, tu n'as mentionné personne pour kick**");
        }
}

module.exports.help = {
    name: "kick",
    description: "xD",
}