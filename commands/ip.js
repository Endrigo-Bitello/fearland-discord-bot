const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setTitle("FearLand - Endereços")
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .setDescription("\nPara jogar no FearLand, basta adicionar esses endereços na sua lista de servidores:\n\n> **fearland.com.br**\n> **mc.fearland.com.br**");

    message.reply(embed);
}

module.exports.help = {
    name: 'ip',
    aliases: ['ips']
}