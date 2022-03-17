const { client } = require('../index');
const { MessageEmbed } = require('discord.js');

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id != '916146935956639765') return;

    const embedAnswer = new MessageEmbed()
    .setColor('GRAY')
    .setDescription('Seu bug report foi enviado com sucesso!')

    message.channel.send(embedAnswer).then((msg) => msg.delete({ timeout: 5000 }));

    const embed = new MessageEmbed()
    .setAuthor(`FearLand`)
    .setColor('GRAY')
    .setDescription(`Enviada por: ${message.author.tag}\n\n**NOVO POSSÍVEL BUG**: \n> ${message.content}\n\n<@&908421060993622087>`)
  //908421060993622087
    const channelToSend = client.channels.cache.get('916146257771253861');
    channelToSend.send(embed);

    message.delete();
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id != '908421122096242689') return;

    const embedAnswer = new MessageEmbed()
    .setColor('GRAY')
    .setDescription('Sugestão enviada!')

    message.channel.send(embedAnswer).then((msg) => msg.delete({ timeout: 5000 }));

    const embed = new MessageEmbed()
    .setColor('GRAY')
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .setDescription(`**Nova sugestão!**: ${message.content}`)

    message.channel.send(embed).then(async m => {
        await m.react('👍');
        await m.react('👎');
    });
    
    message.delete();
});