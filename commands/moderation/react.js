const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Cliquez sur la réaction ci-dessous pour pouvoir être admis.")
    .setTimestamp()
    .setColor("RANDOM")
    const msg = await message.channel.send(embed)
    await msg.react("✅")
    message.delete()
}

module.exports.help = {
    name: "react"
}
