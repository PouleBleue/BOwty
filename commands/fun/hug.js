const Discord = require("discord.js");

module.exports.run = async (message, args) => {
    let hug = [
        "http://media.tumblr.com/tumblr_m68m3wjllW1qewqw2.gif", 
        "http://33.media.tumblr.com/e9fae5fd165029c63c6963f855238c1b/tumblr_ncq9kwWdjW1sy4pr2o1_500.gif",
        "http://38.media.tumblr.com/b22e5793e257faf94cec24ba034d46cd/tumblr_nldku9v7ar1ttpgxko1_500.gif", 
        "http://25.media.tumblr.com/tumblr_mad9v0FbLA1r6bk7qo2_500.gif", 
        "http://33.media.tumblr.com/510818c33b426e9ba73f809daec3f045/tumblr_n2bye1AaeQ1tv44eho1_500.gif", 
        "http://25.media.tumblr.com/tumblr_m0fuxezxqu1ql02n0o1_500.gif",
        "http://static.tumblr.com/rgjkzhi/Qd5m7n1nj/tumblr_m7jbdcogab1qh0jlh.gif",
        "https://media.giphy.com/media/XEmhUht7W2CNq/giphy.gif;http://mrwgifs.com/wp-content/uploads/2013/04/Ouran-High-School-Host-Club-Love-Hug-Gif.gif", 
        "https://31.media.tumblr.com/e66b45dc71f2b4e29b9834034eba47cf/tumblr_mvo14g0ZX91rypg9ro1_500.gif", 
        "http://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif", 
        "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif", 
        "http://31.media.tumblr.com/tumblr_m2rq4kT2eY1qkb6keo1_500.gif", 
        "http://25.media.tumblr.com/2a3ec53a742008eb61979af6b7148e8d/tumblr_mt1cllxlBr1s2tbc6o1_500.gif",
        "https://31.media.tumblr.com/57653f6ce67d5f96767c6642906a5c88/tumblr_n32xk1JA2G1tvuu8no1_500.gif",
        "http://i.imgur.com/1gvENc3.gif", 
        "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461068486-646f3523d0fd8f3e6d818d96012b248e.gif", 
        "https://33.media.tumblr.com/c0189fa705b0894dd12a0cb948064e14/tumblr_mn9608uJLM1sqb4xeo1_500.gif", 
        "http://37.media.tumblr.com/66c19998360481a17ca928283006297c/tumblr_n4i4jvTWLe1sg0ygjo1_500.gif", 
        "http://25.media.tumblr.com/668e4508190fb9f62ea9b5eb1d112531/tumblr_mw41ntelfK1s6ghcbo1_500.gif",
        "https://images-ext-1.discordapp.net/external/2hgnKZQiZpy4oDNeBgUjEaAsk9OnPHepQyKTZmXM0w8/https/cdn.weeb.sh/images/Sk2gmRZZG.gif",
        "https://images-ext-1.discordapp.net/external/vKIB-wgagGAa2GXhilkmEZT0HTTfedW1ZzKc5cWBBqQ/https/cdn.weeb.sh/images/BJF5_uXvZ.gif",
        "https://images-ext-1.discordapp.net/external/ald1WHnALpYd-BV4lAZ1WYJ5bV938TPuERkyqse2Fig/https/cdn.weeb.sh/images/SJfEks3Rb.gif",
        "https://images-ext-2.discordapp.net/external/0Qqr3MhBsC1p5peV7LwrRY0QpuQtssC88kEpUTlgtsE/https/cdn.weeb.sh/images/r1bAksn0W.gif",
        "https://images-ext-2.discordapp.net/external/E_evPC3tRlb58FW4rhDn2vFduMN-8UB_8Z86FwCSJQs/https/cdn.weeb.sh/images/HytoudXwW.gif",
        "https://images-ext-1.discordapp.net/external/04SRmOKGYDqkYRdLcWtt5b6CLCiL0ml8nulzoIGkTjU/https/cdn.weeb.sh/images/Hy0KO_7DZ.gif",
        "https://images-ext-1.discordapp.net/external/5oXkEEAHxAPmHQxNkjQMxdyE4vbHaedZnMrhoQ-RVsQ/https/cdn.weeb.sh/images/SJWR__7P-.gif",
        "https://images-ext-2.discordapp.net/external/0Qqr3MhBsC1p5peV7LwrRY0QpuQtssC88kEpUTlgtsE/https/cdn.weeb.sh/images/r1bAksn0W.gif",
        "https://images-ext-1.discordapp.net/external/ZKj1gPEihmcREvx9zYPoVjBCAKr4iSJ6CbSXC60VnlM/https/cdn.weeb.sh/images/Hyec_OmDW.gif",
        "https://images-ext-2.discordapp.net/external/3wXDLr7wXxXe0SXGMsZAAKR68yQDiuFn9y5d4ww1UlI/https/cdn.weeb.sh/images/BJ0UovdUM.gif",
        "https://images-ext-2.discordapp.net/external/2zK64mob5caNW6kuKBNxWYTgUXYDT19uXhwXnh1ikeA/https/cdn.weeb.sh/images/rkx1dJ25z.gif",
        "https://images-ext-1.discordapp.net/external/PDpYIi07VOBExcTswU0ETtxLSF_QVQ6YaHr_4Dvm1Nc/https/cdn.weeb.sh/images/BkHA_O7v-.gif",
        "https://images-ext-2.discordapp.net/external/Ub9wxmE5jf8GGCbC44jYMWlN_AmfxTfQwEeSV2A869M/https/cdn.weeb.sh/images/Sy65_OQvZ.gif",
        "https://images-ext-2.discordapp.net/external/oYGtczvZrCsA1ng-mDtc0KMMmD8djQJVBtyfAEkW2l0/https/cdn.weeb.sh/images/SJByY_QwW.gif",
        "https://media4.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
        "https://acegif.com/wp-content/uploads/anime-hug.gif",
        "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
        "https://media.tenor.com/images/aab83bd3725feeaccb9929f8ca964db9/tenor.gif",
        "https://thumbs.gfycat.com/DangerousSmallIsabellineshrike-small.gif"
    ]

        let random = hug[Math.floor(Math.random() * hug.length)];

        let user = message.mentions.users.first() 
        if(!user){
            let embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** a fait un câlin à **${message.client.user.username}**.`)
            .setColor("RANDOM")
            .setImage(random)
            .setFooter(`${message.author.username} | b!help`)
            message.channel.send(embed)
        } 
        let embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** a fait un câlin à **${user.username}**.`)
        .setColor("RANDOM")
        .setImage(random)
        .setFooter(`${message.author.username} | b!help`)
        message.channel.send(embed)
    }


module.exports.help = {
    name:"hug",
    description: "MDR",
}
