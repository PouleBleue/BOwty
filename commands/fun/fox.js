const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (message, args) => {
    const fox = await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image)
    message.channel.send(fox)
}

module.exports.help = {
    name: "fox"
}