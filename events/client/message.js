const { Collection } = require("discord.js");
const prefix = "n!"

module.exports = (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) return message.channel.send("Cette commande n'existe pas");

        try {
            client.commands.get(command).run(message, args);

        } catch (error){
            console.error(error);
        }
}