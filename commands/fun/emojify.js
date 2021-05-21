const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let user = message.mentions.users.first();
    if(user) {
        return message.channel.send("Merci de ne pas mentionner quelqu'un avec cette commande.")
    }
    if(!args.length) return message.channel.send("Merci de spécifier le texte que tu veux traduire.")
    const specialCodes = {
        "0": ":zero:",
        "1": ":one:",
        "2": ":two:",
        "3": ":three:",
        "4": ":four:",
        "5": ":five:",
        "6": ":six:",
        "7": ":seven:",
        "8": ":eight:",
        "9": ":nine:",
        "#": ":hash:",
        "*": ":asterisk:",
        "?": ":grey_question:",
        "!": ":grey_exclamation:",
        " ": "  "
    }
  const text = args.join(" ").toLowerCase().split('').map(Letter => {
      if(/[a-z]/g.test(Letter)) {
          return `:regional_indicator_${Letter}:`
      } else if (specialCodes[Letter]) {
          return `${specialCodes[Letter]}`
      }
      return Letter;
  }).join('');

  message.channel.send(text)
}


module.exports.help = {
    name: "emojify"
}