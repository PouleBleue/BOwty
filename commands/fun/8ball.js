
const Discord = require("discord.js");

module.exports.run = (message, args) => {
        let jérémy = args.slice(1).join(" ");
        let XD = args.join(" ")

        if(!jérémy) return message.reply("Précise ta question !") 
        else {
            let K = [":8ball: Oui", ":8ball: Non", ":8ball: Peut-être", ":8ball: Je ne pense pas", ":8ball: nan",":8ball: Sûrement", ":8ball: Selon mes sources je crois que non", ":8ball: Absolument", "Je ne sais pas", "Aucune idée", "Oui", "Non", ":8ball: J'ai pas envie de répondre à cela"]
            let MDR = K[Math.floor(Math.random() * K.length)];

            let embed = new Discord.MessageEmbed()
            .setTitle(":8ball: 8ball")
            .setColor("RANDOM")
            .addField("Question:", XD)
            .addField("Réponse:", MDR)
            message.channel.send(embed)
                
                        if(message.author == "Jérémy est un gamin ?") return message.channel.send("Oui")

        }

    }
module.exports.help = {
    name: "8ball", 
    description: "ok",
}
