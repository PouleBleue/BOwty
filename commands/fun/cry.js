const Discord = require("discord.js");


module.exports.run = (message, args) => {
    let cry = [
        "https://cdn.weeb.sh/images/SJRW7U7DZ.gif",
        "https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif",
        "https://images-ext-1.discordapp.net/external/m9MNsA167MEGbzz5mRtwasE1D_ojn3Rixg1Nh2ZHJD4/https/cdn.weeb.sh/images/Hk6EmLmDZ.gif",
        "https://images-ext-2.discordapp.net/external/Kx9KHwa80uhaAwQy-8A1l3k6I4aT_CwW1W3sN90ysYM/https/cdn.weeb.sh/images/HkxLXIQvb.gif",
        "https://images-ext-1.discordapp.net/external/XAjxo1Pf4X_3-cNsSU6DsBXmJdbI7SyFXtpHj98hvBI/https/cdn.weeb.sh/images/Bk_fmL7wZ.gif",
        "https://images-ext-2.discordapp.net/external/dAfwm2oMClr8nnK3wrNyDzIEdBjtw6wbt7chEHtPWww/https/cdn.weeb.sh/images/H1p77LmvW.gif",
        "https://images-ext-1.discordapp.net/external/HuKltoLNakhEhaoZ7GN-mIeL5nW3PXHV_AAC0NSgIsU/https/cdn.weeb.sh/images/Hy4CS1h5G.gif",
        "https://images-ext-1.discordapp.net/external/0yweyOj7Hbv6oEqukZdNaEd4Nv0LO9AwNrI6TR8ugaA/https/cdn.weeb.sh/images/rJUbkgqyf.gif",
        "https://images-ext-2.discordapp.net/external/OHchC-n9R8ATXkUKiUHPOpFr5BLd-0rWj56KbT-goas/https/cdn.weeb.sh/images/B1N87IQDZ.gif",
        "https://images-ext-1.discordapp.net/external/wuSrSCJoZJxxbQB5I0SaSuiexjmvis6hxHfHvSypZ14/https/cdn.weeb.sh/images/Sk5a01cyf.gif",
        "https://45.media.tumblr.com/5b4e0848d8080db04dbfedf31a4869e2/tumblr_nq1t6uTqRq1qcsnnso1_540.gif",
        "https://images-ext-1.discordapp.net/external/-eaDD4sBf2pendsirjHVrPARDxhVhQjY5GoLRHbVWzY/https/cdn.weeb.sh/images/ryi8787vW.gif",
        "https://data.whicdn.com/images/320214384/original.gif",
        "https://data.whicdn.com/images/308584789/original.gif",
        "https://images-ext-1.discordapp.net/external/oF67Cckx7VfXJb2lwP60XU1VjlbsMQ9aA6C97jBqX0I/https/cdn.weeb.sh/images/Hy4QmU7PZ.gif",
        "https://images-ext-1.discordapp.net/external/adX_mZIKbVvEiIzQtKMM-3IpuC8ghKur4GECelc8I3s/https/cdn.weeb.sh/images/rkpoLqadG.gif",
        "https://images-ext-2.discordapp.net/external/nqJ7_LHsyehBLmDjorcgyfz8c9QGmEXtrFHoYzBdyQo/https/cdn.weeb.sh/images/HymMXUQPW.gif",
        "https://images-ext-1.discordapp.net/external/WrqzwIg-yQcV-c2KE3ryBhviL3j7gBwwFr0GYkqJEmA/https/cdn.weeb.sh/images/rkoNQ8mP-.gif",
        "https://media2.giphy.com/media/gMzPyvdzoDikU/giphy.gif",
        "https://images-ext-2.discordapp.net/external/b0uBCtRfh0VuwTUtZKetpk7sGNV6JAV-WkNsxIHKfBc/https/cdn.weeb.sh/images/r1O8QUmvb.gif",
        "https://images-ext-1.discordapp.net/external/Aa1drEKGpa2N2s0sSAG6dDIIBJqjz3XhsU4PcgMfrx8/https/cdn.weeb.sh/images/HyiGQUmPb.gif"
    ]

    let random = cry[Math.floor(Math.random() * cry.length)];

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`**${message.author.username}** est entrain de pleurer...`)
    .setImage(random)
    .setTimestamp()
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "cry"
}
