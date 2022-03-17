const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Tags', message.guild.iconURL({ dynamic: true, format: 'png' }))
    .setTitle("> Deseja receber a tag do seu VIP no discord? Siga os passos abaixo.")
    .setDescription("\n> ▪ Para receber VIP, VIP+, MVP ou MVP+ no discord, seu vip precisa ser eterno;\n> ▪ Caso você já possua Vip Eterno, abra um ticket <#870381202727641158> no assunto **📸 Tags** e aguarde.")

    message.reply(embed);
}

module.exports.help = {
    name: 'tag',
    aliases: ['tags']
}