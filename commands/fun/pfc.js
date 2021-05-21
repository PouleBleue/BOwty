const Discord = require("discord.js");

module.exports.run = (message, args) => {
    const acceptedReplies = ['Pierre', 'Feuille', 'Ciseaux', 'pierre', 'feuille', 'ciseaux'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`Comment jouer: \`b!pfc <Pierre|Feuille|Ciseaux>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Les seules réponses acceptés sont : \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("Quel dommage, on a fais le même choix.");
        
        switch (choice) {
            case "pierre": {
                if (result === 'Feuille' && 'feuille') return message.reply(`J'ai gagné ! j'ai choisi ${result}`);
                else return message.reply(`Tu as gagné ! J'ai choisis ${result}`);
            }
            case "feuille": {
                if (result === 'Ciseaux' && 'ciseaux') return message.reply(`J'ai gagné ! j'ai choisi ${result}`);
                else return message.reply(`Tu as gagné ! J'ai choisi ${result}`);       
            }
            case "ciseaux": {
                if (result === 'Pierre' && 'pierre') return message.reply(`J'ai gagné ! J'ai choisi ${result}`);
                else return message.reply(`Tu as gagné ! J'ai choisi ${result}`);
            }
            case 'Pierre': {
                if (result === 'Feuille') return message.reply(`J'ai gagné ! j'ai choisi ${result}`);
                else return message.reply(`Tu as gagné ! J'ai choisis ${result}`);
            }
            case 'Feuille': {
                if (result === 'Ciseaux') return message.reply(`J'ai gagné ! j'ai choisi ${result}`);
                else return message.reply(`Tu as gagné ! J'ai choisi ${result}`);        
            }
            case 'Ciseaux': {
                if (result === 'Pierre') return message.reply(`J'ai gagné ! J'ai choisi ${result}`);
                else return message.reply(`Tu as gagné ! J'ai choisi ${result}`);
            }
            default: {
                return message.channel.send(`Les seules réponse accepté sont : \`${acceptedReplies.join(', ')}\``);
            }
        }
    
    }

module.exports.help = {
    name: "pfc",
    description: "k",
};