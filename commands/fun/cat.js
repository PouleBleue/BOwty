const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (message, args) => {
    const cat = await fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(json => json.file);
    message.channel.send(cat)
    }
    
    
module.exports.help = {
    name: "cat", 
    description: "k",
}