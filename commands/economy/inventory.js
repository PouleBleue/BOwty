const db = require("quick.db");
const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let items = await db.fetch(message.author.id)
    if(items === null) items = "Rien"

    const Embed = new Discord.MessageEmbed()
    .addField("Inventaire", items)

    message.channel.send(Embed)
}

module.exports.help = {
    name: "inventory",
    description: "lol",

}