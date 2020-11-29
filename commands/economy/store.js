const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");

module.exports.run = async (message, args) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle('Boutique des Bob-omb')
    .setDescription(`-Fake Nintendo Switch - 300 pièces d'or \n-Montre - 500 pièces d'or \n-Nintendo Switch - 3000 pièces d'or \n-Nintendo Switch (PRO) - 5000 pièces d'or \n-PS5 (digital Edition) - 4000 pièces d'or \n-PS5 (Standard) - 5000 pièces d'or \n-PC GAMER - 10000 pièces d'or`)
    .setTimestamp();
    message.channel.send(embed)
}
module.exports.help = {
    name: "testshop",
    description: "oof",
}