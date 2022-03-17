const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setTitle("FearLand - Seja membro da equipe!")
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .setDescription("Escolha abaixo um cargo para aplicar-se, acesse o link e preencha o formulário!\n\n> <@&941595420004581417>\n> Ajudar os membros da comunidade, tirar dúvidas, monitorar as atividades do servidor e dos portais de mídia oficiais.\n\n> <@&941596531734224946>\n> Construir, decorar e personalizar os mapas do servidor, proporcionando uma experiência singular aos jogadores.\n\n> <@&941722371314839582>\n> Criação de novos recursos, otimização da jogabilidade e desenvolvimento de novos minigames.\n\nAplique-se na área que você mais possui afinidade. Nossa equipe analisa minuciosamente todas as aplicações enviadas, sem excessão. Lembre-se, o tempo de resposta é de no máximo **14 dias**, se você não obtiver resposta nesse período, considere-se reprovado.")

    message.channel.send(embed);
}

module.exports.help = {
    name: 'setapp',
    aliases: ['formulario', 'setform']
}