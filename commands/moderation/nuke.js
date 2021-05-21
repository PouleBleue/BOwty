const Discord = require("discord.js");
const client = new Discord.Client()

module.exports.run = async (message, args) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
    let raison = args.join(" ") || "Pas de raison."
    if(!message.channel.deletable) {
        return message.reply("Ce salon n'a pas pu être se faire nuke !")
    }
    let newchannel = await message.channel.clone()
    await message.channel.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("Salon Nuked")
    .setDescription(raison)
    .setColor("RANDOM")
    .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
    await newchannel.send(embed)
}


module.exports.help = {
    name: "nuke"
}