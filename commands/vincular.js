const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('GRAY')
        .setTitle("**Bem-vindo à comunidade FearLand!**")
     //   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
        .setDescription("Aqui, você interage com outros jogadores e fica por dentro de todas as novidades! Para ter acesso a todos os canais, é necessário vincular a sua conta do Discord à sua conta no FearLand.\n\nBasta acessar o servidor, executar o comando **__/vincular__** e seguir as instruções que você receberá.\n\nTeve algum problema e precisa de ajuda? Envie um e-mail para **suporte@fearland.com**")


    message.reply(embed);
}

module.exports.help = {
    name: 'tutorial',
    aliases: ['settutorial', 'bemvindo']
}