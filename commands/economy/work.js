const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (message, args) => {
    let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Tu peux reprendre le travail seulement dans ${time.minutes}m et ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 150) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, Ton travail t'as fait remporter ${amount} pièces d'or`)
}
}

module.exports.help = {
    name: "work",
    description: "Travail",
}
