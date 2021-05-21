const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let imageBaka = [
        "https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif",
        "https://media.tenor.com/images/4e548e93b7e5f0842578a755472796ee/tenor.gif",
        "https://media0.giphy.com/media/rY3YFw3JfUK88/giphy.gif",
        "https://thumbs.gfycat.com/CapitalDarlingBlackcrappie-size_restricted.gif",
        "https://i.pinimg.com/originals/97/04/cb/9704cba1bd3cd847d07b782d6ef7b598.gif",
        "https://thumbs.gfycat.com/DirtyFastFinnishspitz-max-1mb.gif",
        "https://i.imgur.com/sWPnHMR.gif?noredirect",
        "https://thumbs.gfycat.com/FewDarlingLadybird-size_restricted.gif",
        "https://cdn103.picsart.com/206263500001202.gif?to=min&r=640",
        "https://thumbs.gfycat.com/EarlyVelvetyKouprey-size_restricted.gif",
        "https://media.tenor.com/images/537888875d8f533aeb4c8451a6cadbb5/tenor.gif",
        "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAi0ZVCvHHGYQeIt0FpVyRWc",
        "https://i.pinimg.com/originals/37/8e/b5/378eb5d8f3e5185ee68deed8894d3f9f.gif"
    ]
    let random = imageBaka[Math.floor(Math.random() * imageBaka.length)];
    let user = message.mentions.users.first()

    if(user) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Vous traitez ${user.username} d'idiot.`)
        .setColor("RANDOM")
        .setImage(random)
        .setTimestamp()
        .setFooter(`Par ${message.author.username}`)
        message.channel.send(embed);
    }
    if (!user) {
        let buser = "Vous vous traitez d'idiot.";
        const embed = new Discord.MessageEmbed()
        .setDescription(`${buser}`)
        .setColor("RANDOM")
        .setImage(random)
        .setTimestamp()
        .setFooter(`Par ${message.author.username}`)
        message.channel.send(embed);
    }
}


module.exports.help = {
    name: "baka"
}