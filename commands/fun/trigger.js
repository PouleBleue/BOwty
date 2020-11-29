const { MessageAttachment, DiscordAPIError } = require("discord.js");
const canvacord  = require("canvacord");
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports.run = async (message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    let triggered = await canvacord.Canvas.trigger(user.DisplayAvatarURL({ format: "png", dynamic: false }))
    let attachement = new MessageAttachment(triggered, "triggered.gif");
    return message.channel.send(attachement)
}

module.exports.help = {
    name: "trigger",
    description: "oof"
}