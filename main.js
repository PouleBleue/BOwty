const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json")
const { readdirSync, fs  } = require('fs');
const { Collection } = require('mongoose');

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

const loadEvents = (dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of events) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            client.on(evtName, evt.bind(null, client));
            console.log(`Evenement chargé: ${evtName}`);
        };
    });
}

loadCommands();
loadEvents();

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

client.login(token)