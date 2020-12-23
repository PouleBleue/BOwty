const Discord = require("discord.js");
const client = new Discord.Client()

module.exports.run = (message, args) => {
    let use = message.mentions.members.first()
    let owo = args.slice(1).join(" ")
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
    use.send(owo)
    message.delete();

}

module.exports.help = {
    name: "dm",
    description: "oof",
}
