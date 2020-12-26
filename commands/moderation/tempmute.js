const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (message, args) => {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas trouvé d'utilisateur !");
    let user = message.mentions.users.first();
    if (user === message.author) return message.channel.send("Tu ne peux pas te mute toi même ! ")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Il te manque des permissions");
    let muterole = message.guild.roles.cache.find(role => role.name === "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.roles.create({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Il faut  que tu dis le temps dans laquel l'utilisateur sera mute!");
  
    await(tomute.roles.add(muterole.id));
    message.reply(`<@${tomute.id}> a été mute pendant ${ms(ms(mutetime))}`);
    user.send(`Tu as été mute pendant ${ms(ms(mutetime))}`)
  
    setTimeout(function(){
      tomute.roles.remove(muterole.id);
      message.channel.send(`<@${tomute.id}> a été démute!`);
    }, ms(mutetime));
  }
module.exports.help = {
    name: "tmute",
    description: "owo"
}
