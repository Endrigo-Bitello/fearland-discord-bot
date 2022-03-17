const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("Conheça nossos produtos.")
    .setDescription("Obtenha pacotes Cash, Caixas Misteriosas, Ranks, Cosméticos & MUITO MAIS acessando a [Loja do FearLand](https://fearland.com.br/loja).")

    message.reply(embed);
}

module.exports.help = {
    name: 'loja',
    aliases: ['shop']
}