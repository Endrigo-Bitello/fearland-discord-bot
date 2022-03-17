const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("Como fazer uma appeal?")
    .setDescription("Se você considera que foi punido de forma incorreta, vá até **https://fearland.com.br/forum/appeals**, leia o passo a passo e abra uma nova revisão.")

    message.channel.send(embed);
}

module.exports.help = {
    name: 'appeal',
    aliases: ['revisao']
}