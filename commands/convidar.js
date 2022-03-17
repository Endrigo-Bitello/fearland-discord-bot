const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('00AAAA')
    .setTitle("FearLand - Convite")
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .setDescription("Convite seus amigos para a comunidade FearLand!\n\n> **http://discord.fearland.com**")

    message.reply(embed);
}

module.exports.help = {
    name: 'convite',
    aliases: ['convidar', 'invite']
}