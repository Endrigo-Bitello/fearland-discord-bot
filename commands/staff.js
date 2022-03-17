const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  if (args.length < 3)
    return message
      .reply(
        `Argumentos insuficientes! Formato correto: ${process.env.PREFIX}staff <add/remove> <nickname/@user> <cargo/saiu/demoted>`
      )
      .then((m) => m.delete({ timeout: 5000 }));

  const argument = args[0];
  const nick = args[1];
  const channel = client.channels.cache.get('941589682045718549');

  switch (argument.toLowerCase()) {
    case "add":
        const role = message.member.guild.roles.cache.get(args[2]) || message.mentions.roles.first();

        const embedAdd = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${nick} ingressou na equipe como ${role}.`)

        channel.send(embedAdd);
      break;
    case "remove":
        let whatHappens = args[2].toLowerCase();
        if (whatHappens == 'demoted') {
            whatHappens = 'foi retirado';
        } else if (whatHappens == 'saiu') {
            whatHappens = 'saiu';
        } else return message.reply('Informe: <saiu/demoted> dependendo da situação.').then((m) => m.delete({ timeout: 10000 }));

        const embedRemove = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${nick} ${whatHappens} da equipe.`)

        channel.send(embedRemove);
      break;
    default: return message.reply('Argumento inválido.').then((m) => m.delete({ timeout: 5000 }));
  }
};

module.exports.help = {
  name: "staff",
  aliases: ['managestaff', 'staffadd'],
};
