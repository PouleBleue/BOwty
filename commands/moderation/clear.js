const Discord = require("discord.js");

module.exports.run = (message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Il te manque des permissions!');
    
        let deleteAmount;
    
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Tu dois choisir un chiffre/nombre et que le nombre/chiffre choisis soit supérieur à 0 si tu veux que la commande fonctionne !') }
    
        if (parseInt(args[0]) > 100) {
            return message.reply('Tu ne peux supprimé que 100 messages à la fois !')
        } else {
            deleteAmount = parseInt(args[0]);
        }
    
        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Tu as supprimé ${deleteAmount} Messages.**`)
}

module.exports.help = {
    name: "clear",
    description: "k",
}