const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (message, args) => {
    const bird = await fetch("https://some-random-api.ml/facts/bird")
    .then(res => res.json())
    .then(json => json.fact);

    let embed = new Discord.MessageEmbed()
    .setTitle("Bird random")
    .setImage(bird)
    message.channel.send(embed)
}

module.exports.help = {
    name: "bird"
}