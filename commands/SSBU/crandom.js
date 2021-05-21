const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = (message, args) => {
    let c = [
        "https://static.wikia.nocookie.net/smashbros/images/a/af/Art_Mario_Ultimate.png/revision/latest?cb=20180615173226&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/1200px-Donkey_Kong_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/1200px-Link_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/1200px-Samus_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/7/75/Art_Samus_sombre_Ultimate.png/revision/latest?cb=20180808175237&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/1200px-Yoshi_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/1200px-Kirby_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/1200px-Fox_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/1200px-Pikachu_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/250px-Luigi_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/1200px-Ness_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/1200px-Captain_Falcon_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/7/78/Art_Rondoudou_Ultimate.png/revision/latest?cb=20180615173417&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/1200px-Peach_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/0/0d/Art_Daisy_Ultimate.png/revision/latest?cb=20180615173915&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/1200px-Bowser_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/1/12/Ice_Climbers_SSBU.png/1200px-Ice_Climbers_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/0/00/Sheik_SSBU.png/1200px-Sheik_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/c/c8/Zelda_SSBU.png/1200px-Zelda_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/3/3f/Dr._Mario_SSBU.png/1200px-Dr._Mario_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/250px-Falco_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/e/e9/Marth_SSBU.png/1200px-Marth_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/6/69/Art_Lucina_Ultimate.png",
        "https://www.ssbwiki.com/images/thumb/8/8a/Young_Link_SSBU.png/1200px-Young_Link_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/1200px-Ganondorf_SSBU.png",
        "https://www.smashbros.com/wiiu-3ds/sp/images/character/mewtwo/main.png",
        "https://www.ssbwiki.com/images/4/45/Roy_SSB4.png",
        "https://www.ssbwiki.com/images/thumb/5/57/Chrom_SSBU.png/1200px-Chrom_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/c/cb/Mr._Game_%26_Watch_SSBU.png/1200px-Mr._Game_%26_Watch_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/0/00/Meta_Knight_SSBU.png/1200px-Meta_Knight_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/3/38/Pit_SSBU.png/1200px-Pit_SSBU.png",
        "https://static.wikia.nocookie.net/mario/images/5/50/SSBU-PitMal%C3%A9fique.png/revision/latest?cb=20180716221049&path-prefix=fr",
        "https://static.wikia.nocookie.net/mario/images/f/f7/SSBU-SamusSansArmure.png/revision/latest?cb=20191205162844&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/0/04/Wario_SSBU.png/1200px-Wario_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/1200px-Snake_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/8/86/Ike_SSBU.png/1200px-Ike_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/e/ef/Art_solo_Dresseur_de_Pok%C3%A9mon_Ultimate.png/revision/latest?cb=20180621184333&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/9/98/Art_Diddy_Kong_Ultimate.png/revision/latest?cb=20180615173232&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/8/81/Lucas_SSBU.png/1200px-Lucas_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/b/ba/Sonic_SSBU.png/1200px-Sonic_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/1/1e/Art_Roi_DaDiDou_Ultimate.png/revision/latest?cb=20180615173538&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/1200px-Olimar_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/0/08/Lucario_SSBU.png/1200px-Lucario_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/6/60/R.O.B._SSBU.png/1200px-R.O.B._SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/9/92/Art_Link_Cartoon_Ultimate.png/revision/latest?cb=20180615173236&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/8/8a/Wolf_SSBU.png/1200px-Wolf_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/c/c8/Art_Villageois_Ultimate.png/revision/latest?cb=20180615173821&path-prefix=fr",
        "https://www.smashbros.com/assets_v2/img/fighter/mega_man/main.png",
        "https://static.wikia.nocookie.net/smashbros/images/3/31/Art_Entra%C3%AEneuse_Wii_Fit_Ultimate.png/revision/latest?cb=20190909200759&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/c/c7/Art_Harmonie_et_Luma_Ultimate.png/revision/latest?cb=20180615173230&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/d/da/Art_Little_Mac_Ultimate.png/revision/latest?cb=20180615173823&path-prefix=fr",
        "https://www.smashbros.com/assets_v2/img/fighter/greninja/main.png",
        "https://static.wikia.nocookie.net/smashbros/images/9/9a/Art_Palutena_Ultimate.png/revision/latest?cb=20181222170259&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/2/28/Art_Pac-Man_Ultimate.png/revision/latest?cb=20180615173827&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/2/2f/Art_Daraen_Ultimate.png/revision/latest?cb=20180615173549&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/b/b9/Art_Shulk_Ultimate.png/revision/latest?cb=20180923194814&path-prefix=fr",
        "https://www.smashbros.com/assets_v2/img/fighter/bowser_jr/main.png",
        "https://static.wikia.nocookie.net/smashbros/images/a/a8/Art_Duo_Duck_Hunt_Ultimate.png/revision/latest?cb=20180615173824&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/4/4b/Art_Ryu_Ultimate.png/revision/latest?cb=20190909201041&path-prefix=fr",
        "https://www.ssbwiki.com/images/thumb/f/f6/Ken_SSBU.png/1200px-Ken_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/b/b3/Cloud_SSBU.png/1200px-Cloud_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/c/c4/Corrin_SSBU.png/1200px-Corrin_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/7/7c/Bayonetta_SSBU.png/1200px-Bayonetta_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/2/2e/Inkling_SSBU.png/1200px-Inkling_SSBU.png",
        "https://static.wikia.nocookie.net/smashbros/images/a/a7/Art_Ridley_Ultimate.png/revision/latest?cb=20180615172721&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/7/72/Art_Simon_Ultimate.png/revision/latest?cb=20180808174725&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/c/c8/Art_Richter_Ultimate.png/revision/latest?cb=20180808175008&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/1/19/Art_King_K._Rool_Ultimate.png/revision/latest?cb=20180808175335&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/5/5c/Art_Marie_Ultimate.png/revision/latest?cb=20180913225212&path-prefix=fr",
        "https://static.wikia.nocookie.net/smashbros/images/8/8a/Art_F%C3%A9linferno_Ultimate.png/revision/latest?cb=20181101152104&path-prefix=fr",

    ]

    let random =  c[Math.floor(Math.random() * c.length)];
    const embed = new MessageEmbed()
    .setTitle("Tu dois sélectionner ce personnage : ")
    .setImage(random)
    .setColor("#FF0000")
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: "crandom"
}