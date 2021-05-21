module.exports = (client, message) => {
    console.log('Je dois dire : Olivia est conne !');
    const number = client.users.cache.size
    const server = client.guilds.cache.size
    client.user.setActivity(`b0.1.8.0 || ${server} serveurs et à ${number} utilisateurs ||  b!help`, { type: "PLAYING" })
}