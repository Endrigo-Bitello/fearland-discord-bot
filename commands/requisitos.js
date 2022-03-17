const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("REQUISITOS PARA TAGS NO FEARLAND")//**Requisitos para tags no FearLand*
    .setDescription("\n> **1º.** Veja se você atende aos requisitos <#871596309889581107>\n\n> **2º.** Caso confirmado, vá em <#870381202727641158> e abra um ticket no assunto **📸 Tags**\n\n> **3º.** Informe seu apelido in-game e a URL do seu canal para nossos gerentes.")

    message.reply(embed);
}

module.exports.help = {
    name: 'requisitos',
    aliases: ['youtuber']
}