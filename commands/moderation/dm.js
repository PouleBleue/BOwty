const Discord = require("discord.js");
const client = new Discord.Client()

module.exports.run = (message, args) => {
    let use = message.mentions.members.first()
    let owo = args.slice(1).join(" ")
    client.channels.get("769986093407141909").send("mdr")

}

module.exports.help = {
    name: "oof",
    description: "oof",
}