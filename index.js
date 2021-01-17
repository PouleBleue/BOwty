const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json")
const { readdirSync, fs  } = require('fs');


client.commands = new Discord.Collection();

const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargé : ${getFileName.help.name}`);
        };
    });
};

loadCommands();

client.on("guildMemberAdd", member => {
    const welcome = member.guild.channels.cache.find(welcome => welcome.name === "〢・😎・》bienvenue")
    if(!welcome) return;
    member.send(`Salut, ${member} sois le Bienvenue dans le serveur de PouleBleue qui est mon créateur, je suis un bot en developpement`)
    welcome.send(`Bienvenue ${member} dans le Royaume des bob-omb!`)
});

client.on("guildMemberRemove", member => {
    const welcome = member.guild.channels.cache.find(welcome => welcome.name === "〢・😎・》bienvenue")
    if(!welcome) return;
    member.send("Rip, Tu as quitté le serveur, mais pourquoi ?!")
    welcome.send(`${member} a quitté le serveur, c'est beaucoup trop triste !`)
    
});
const activities_list = [
    "0.1.2.1.", 
    "lire son code",
    "b!help", 
    "Made with JavaScript"
    ]

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.emoji.name === '✅') {
        if(user.bot) return;
        const guildMember = reaction.message.guild.members.cache.get(user.id);
        const role = reaction.message.guild.roles.cache.find(r => r.name === "Membres")
        if(!role) return reaction.message.channel.send("Le rôle membre n'est pas là")
        if(!guildMember) return;
        guildMember.roles.add(role.id)
    }
});

client.on("messageReactionRemove", (reaction, user) => {
    if(reaction.emoji.name === '✅') {
        if(user.bot) return;
        const guildMember = reaction.message.guild.members.cache.get(user.id);
        const role = reaction.message.guild.roles.cache.find(r => r.name === "Membres")
        if(!role) return reaction.message.channel.send("Le rôle membre n'est pas là")
        if(!guildMember) return;
        guildMember.roles.remove(role.id)
    }
});

            

client.on('ready', () => {
    console.log('Je dois dire : Olivia est conne !');
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]);
    }, 10000); 
});

 

client.on("message", message => {
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

});


client.login(process.env.TOKEN)
