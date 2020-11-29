const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (message, args) => {
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => json.message);

    const embed = new Discord.MessageEmbed()
    .setTitle("Dog Random")
    .setImage(dog)
    message.channel.send(embed)
}

module.exports.help = {
    name: "dog",
    description: "oof"
}