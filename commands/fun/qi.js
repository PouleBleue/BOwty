const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let buser = message.mentions.users.first()
    let guildMembers = await message.guild.members.fetch() 
    let user =  message.mentions.users.first() || args[1]  
    if(!user) return message.channel.send("owo")
    let qi = Math.floor(Math.random() * 250) + 1;
    message.channel.send(`**${user} a ${qi} de QI**`)
    }


module.exports.help = {
    name: "qi",
    description: "oof"
}