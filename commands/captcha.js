const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    const embed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setTitle("É um prazer tê-lo conosco!")
    //.setImage(`https://www.behance.net/gallery/125602373/FearLand`)
    //.setAuthor('VERIFICAÇÃO', message.guild.iconURL({ dynamic: true, format: 'png' }))
    .setDescription("> Seja bem-vindo ao Discord oficial do FearLand, você está na verificação obrigatória.\n> Para desbloquear os canais, aperte o **botão abaixo**.\n")
    .setAuthor("FearLand - Verificação");
    
    const captchaButton = new MessageButton()
    .setStyle("gray")
    .setEmoji('🔐')
    .setLabel("")
    .setID("captchaButton")

    message.channel.send(embed, captchaButton);
}

module.exports.help = {
    name: 'captcha',
    aliases: ['setauth']
}