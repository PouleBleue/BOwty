const Discord = require("discord.js")

module.exports.run = (message, args) => {
    const user = message.mentions.users.first();
      if (user === message.author) return message.channel.send("Tu ne peux pas te bannir toi même ! ")
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({
                reason: 'c pa bi1!',})
              .then(() => {
                message.reply(`A A ${user.tag} Tu t'es fait karma par Kskrif espèce de sal noooooob ;) HMMMM`);
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
    name: "owoban",
    description: "k",
}