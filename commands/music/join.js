const Discord = require("discord.js");
const client = new Discord.Client()

module.exports.run = (message, args) => {
    const VoiceChannel = message.member.voice.channel;

    if(!VoiceChannel) {
        const player = client.music.players.spawn({
            guild: message.guild,
            VoiceChannel: VoiceChannel,
            textChannel: message.channel,
        });

        if(!client.musicPlayer.get(message.guild.id)) return client.musicPlayer.set(message.guild.id, player);
    } else {
        message.channel.send("Merci de rejoindre un salon vocal")
    }
}

module.exports.help = {
    name: "join",
    description: "AH"
}