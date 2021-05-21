const { MessageAttachment, DiscordAPIError } = require("discord.js");
const canvacord  = require("canvacord");
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports.run = async (message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let triggered = await canvacord.Canvas.invert((user.displayAvatarURL({ format: "png", dynamic: false, size: 4096})));
    let attachment = new MessageAttachment(triggered, "invert.gif");
    return message.channel.send(attachment);
}

module.exports.help = {
    name: "inverse",
    description: "oof"
}