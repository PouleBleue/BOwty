const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (message, args) => {
    const wasted = [
        "https://images-ext-1.discordapp.net/external/WYQmIFpoxHZqvX_U-HiOMFDyXuOZvigYVNBsEKBxqlA/https/cdn.weeb.sh/images/r11as1tvZ.gif",
        "https://images-ext-2.discordapp.net/external/TYCwtAwf9ghnkWLhjLBx78DMzGfQYXEoRA6wj1U--Ok/https/cdn.weeb.sh/images/BJO2j1Fv-.gif",
        "https://images-ext-1.discordapp.net/external/5gWWY_xqzhR914VnkAnRl8FCEcE29F65C-R15ffTjqM/https/cdn.weeb.sh/images/B1VnoJFDZ.gif",
        "https://images-ext-2.discordapp.net/external/e8238C-iXxfFlnuzY5unlLwkTTODuS2hfQjic39k6yo/https/cdn.weeb.sh/images/B1qosktwb.gif",
        "https://images-ext-1.discordapp.net/external/WYQmIFpoxHZqvX_U-HiOMFDyXuOZvigYVNBsEKBxqlA/https/cdn.weeb.sh/images/r11as1tvZ.gif",
        "https://images-ext-2.discordapp.net/external/TYCwtAwf9ghnkWLhjLBx78DMzGfQYXEoRA6wj1U--Ok/https/cdn.weeb.sh/images/BJO2j1Fv-.gif",
        "https://i.imgur.com/ouX2mV6.gif?noredirect",
        "https://i.imgur.com/VCrDz6C.gif"
    ]

    let user = message.mentions.users.first()
    let random = wasted[Math.floor(Math.random() * wasted.length)];

    if(!user) {
        const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.client.user.username}** is wasted.`)
    .setImage(random)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed)
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${user.username}** is wasted.`)
    .setImage(random)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: "wasted"
}