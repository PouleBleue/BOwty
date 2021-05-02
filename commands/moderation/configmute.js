const { Discord, Message, MessageEmbed } = require("discord.js");

module.exports.run = async (message, args) => {
    let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
    if(!muterole){
        try {
          message.channel.send("Le rôle Mute est introuvable, la tentative de création d'un rôle mute est en cours.")
          let muterole = await message.guild.roles.create({
            data: {
              name: "Muted",
              permissions: []
            }
  
          });
          message.guild.channels.cache.filter(c => c.type === "text").forEach(async (channel) => {
            await channel.createOverwrite(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTION: false
            })
          });
          message.channel.send("Le role mute a été crée avec succés.")
        } catch (error) {
          console.log(error)
        }
    }
    if(muterole) return message.channel.send("Le rôle mute a déjà été crée.")
}

module.exports.help = {
    name: "configmute"
}
