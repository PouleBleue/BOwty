const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (message, args) => {
    const fox = await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image)

    const embed = new Discord.MessageEmbed()
    .setTitle("Fox random")
    .setImage(fox)
    message.channel.send(embed)
}

module.exports.help = {
    name: "fox"
}
