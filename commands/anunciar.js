const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return;

  message.author.send('> **Criação de Anúncio solicitada.**').then(m => {
    message.author.send('> Digite o título do anúncio.');

    const channel = m.channel;
    const filter = msg => msg.author.id === message.author.id;

    const titleCollector = new Discord.MessageCollector(channel, filter, { time: 30000 });
    titleCollector.on('collect', titleCollected => {
      const title = titleCollected.content;
      titleCollector.stop();

      message.author.send('> Digite a mensagem que deseja enviar.');

      const contentCollector = new Discord.MessageCollector(channel, filter, { time: 30000 });
      contentCollector.on('collect', contentCollected => {
        const content = contentCollected.content;
        contentCollector.stop();

        message.author.send('> O anúncio terá uma imagem? Caso sim, **digite a URL**. Caso não, digite **não**.');
        const imageCollector = new Discord.MessageCollector(channel, filter, { time: 30000 });
        imageCollector.on('collect', imageCollected => {
          const image = imageCollected.content;
          imageCollector.stop();

          let hasImage = null;
          if (!(image.startsWith('não') || image.startsWith("Não"))) {
            hasImage = image;
          }

          message.author.send('> Você confirma o envio do anúncio? Digite **sim**.');

          const confirmationCollector = new Discord.MessageCollector(channel, filter, { time: 30000 });
          confirmationCollector.on('collect', confirmationCollected => {
            const confirmation = confirmationCollected.content.toLowerCase();

            if (confirmation.startsWith('sim')) {
              confirmationCollector.stop();

              message.author.send('> Digite o **ID** do canal em que o anúncio deve aparecer.');

              const channelIdCollector = new Discord.MessageCollector(channel, filter, { time: 30000 });
              channelIdCollector.on('collect', channelIdCollected => {
                const channelId = channelIdCollected.content;
                const channelToSend = client.channels.cache.get(channelId);
                channelIdCollector.stop();

                message.author.send('> Anúncio enviado com sucesso!');

                const embed = new Discord.MessageEmbed()
                .setColor("2F3136")
                .setAuthor(title, message.guild.iconURL({ dynamic: true, format: 'png' }))
                .setDescription(content)
                .setImage(hasImage)
                .setFooter(`Enviado por ${message.author.tag}`, message.author.avatarURL({ dynamic: true, format: 'png' }))

                channelToSend.send(embed);
              });

              channelIdCollector.on('end', (collected, reason) => {
                if (reason == 'time') return message.author.send('Você excedeu o limite de tempo.');
              });
            } else if (confirmation.startsWith('n')) {
              confirmationCollector.stop();
              return message.author.send('> Envio cancelado.');
            } else return message.author.send('> Você deve digitar **sim** ou **não**.');
          });

          confirmationCollector.on('end', (collected, reason) => {
            if (reason == 'time') return message.author.send('Você excedeu o limite de tempo.');
          });
        });

        imageCollector.on('end', (collected, reason) => {
          if (reason == 'time') return message.author.send('Você excedeu o limite de tempo.');
        });
      });

      contentCollector.on('end', (collected, reason) => {
        if (reason == 'time') return message.author.send('Você excedeu o limite de tempo.');
      });
    });

    titleCollector.on('end', (collected, reason) => {
      if (reason == 'time') return message.author.send('Você excedeu o limite de tempo.');
    });
  }).catch(e => {
    if (e) return message.reply('> Habilite suas mensagens privadas para receber a mensagem do bot.');
  });
}

module.exports.help = {
  name: 'anunciar',
  aliases: ['say', 'anuncio']
}