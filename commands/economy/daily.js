const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (message, args) => {
    let user = message.author;
    let timeout = 86400000;
    let amount = Math.floor(Math.random() * 3000) + 1;

    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        return message.channel.send(`Tu as déjà reçu ton argent quotidien, reviens dans ${time.hours}h, ${time.minutes}m, et ${time.seconds}s`)
    } else {
        db.add(`money_${message.guild.id}_${user.id}`, amount);
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

        message.channel.send(`:moneybag: Vous avez reçu ${amount} pièces d'or`)
    }
}

module.exports.help = {
    name: "daily",
    description: "mdr",
}
