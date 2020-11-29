const Discord = require("discord.js");

module.exports.run = (message, args) => {
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
        "http://25.media.tumblr.com/668e4508190fb9f62ea9b5eb1d112531/tumblr_mw41ntelfK1s6ghcbo1_500.gif"
    ]

        let random = hug[Math.floor(Math.random() * hug.length)];

        let user = message.mentions.users.first()
        if(!user){
            message.reply(`Tu as mentionné personne !`)
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} a fais un câlin à ${user.username}`)
        .setColor("RANDOM")
        .setImage(random)
        .setFooter(`${message.author.username} | b!help`)
        message.channel.send(embed)
}

module.exports.help = {
    name:"hug",
    description: "MDR",
}