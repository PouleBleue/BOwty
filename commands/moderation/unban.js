const { Discord, Message, MessageEmbed } = require("discord.js");

module.exports.run = async (message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return;

    const id = args[0];
    if(!id) return message.reply("Merci d'envoyer l'id de l'utilisateur.")

    const bannedMembers = await message.guild.fetchBans();
    if(!bannedMembers.find((user) => user.user.id === id)) return message.reply("Cet utilisateur n'est pas banni !");

    message.guild.members.unban(id);
    message.reply("L'utilisateur a été unban !")
    }


module.exports.help = {
    name: "unban"
}