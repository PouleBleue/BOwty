const Discord = require("discord.js")

module.exports.run = (message, args) => {
    var jérémKO = args.join(" ")
    var test = ["Y'a pas de commande TEST, oui c'est beaucoup trop triste, mais bon fallait pas être aussi bête pour croire que y'aurait une commande test mdr", "Désolé pour toi mais y'a pas de commande de test"]
    
    var mdr = test[Math.floor(Math.random() * test.length)];

    var embed = new Discord.MessageEmbed()
    .setTitle("TEST - La logique est morte oooooooooooooooooof")
    .setDescription(mdr)
    .setColor("RANDOM")
   message.channel.send(embed)
}

module.exports.help = {
    name: "test",
    description: "c'est une commande de test ok ?!"
}
