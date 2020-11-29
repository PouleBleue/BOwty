const Discord = require("discord.js");

module.exports.run = (message, args) => {
    message.channel.send("Ce bot a été créé par PouleBleue, le serveur est gèré par JérémKO et certaines idées vienne de lui")
}

module.exports.help = {
    name: "credit",
    description: "owo",
}