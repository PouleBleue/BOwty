const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    const user = message.mentions.users.first();
    let guild = message.guild;
    const raison = args.join(" ").slice(22)
    
   


      if (user === message.author) return message.channel.send("Tu ne peux pas te bannir toi même ! ")
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
        if (user) {
          const member = message.guild.member(user);
         
         
          if(!raison) return message.channel.send("Merci de mettre une raison")
          if (member) {
            member.ban({
                reason: raison,})
              .then(() => {
                const embed  = new Discord.MessageEmbed()
                .setTitle("Ban")
                .setColor("RANDOM")
                .addField("Utilisateur banni :", `${user.tag}`)
                .addField("Banni par :", `${message.author.tag}`)
                .addField("Raison :", `${raison}`)
                .setTimestamp()
                message.channel.send(embed)
                user.send(`Tu as été bannis du serveur : ${guild.name} par ${message.author} pour la raison ${raison}`)
              })
              .catch(err => {
                message.reply("Je n'ai pas pu bannir ce membre");
              });
          } else {
            message.reply("Ce membre n'existe pas !");
          }
        } else {
          message.reply("**Mais voyons, tu as mentionné personne pour ban**");
        }
}

module.exports.help = {
    name: "ban",
    description: "XD"
}
