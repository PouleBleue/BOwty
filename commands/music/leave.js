const Discord = require("discord.js")

module.exports.run = (message, args) => {
  if (message.member.voice.channel !== undefined) {
    message.member.voice.channel.leave();
    message.reply("Je me suis déconnecté");
  } else {
    message.reply("VOUS NE PASSEREZ PAS §§§§§§§§§§");
  }
}

module.exports.help = {
    name: "leave"
}
