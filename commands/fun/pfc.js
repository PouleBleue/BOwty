const Discord = require("discord.js");

module.exports.run = (message, args) => {
    let reponse = args.slice(0).join(" ");
    if (!reponse) return message.channel.send("Tu dois choisir Pierre, Feuille, Ciseaux")

    let taReponse = ["Pierre", "Feuille", "Ciseaux"]

    let resultat = taReponse[Math.floor(Math.random() * taReponse.length)];

    if (!taReponse.includes(reponse)) {
        return message.channel.send(`Les seules reponses qui sont accepté sont Pierre, Feuille, Ciseaux`)
    };
    let embed = new Discord.MessageEmbed()
        .setTitle("Pierre, Feuille, Ciseaux")
        .addField("Ton choix :", reponse)
        .addField("Mon choix :", resultat)
    message.channel.send(embed)

};

module.exports.help = {
    name: "pfc",
    description: "k",
};