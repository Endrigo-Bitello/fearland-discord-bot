const { Message, MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if (!args[0]) return message.reply("digite a quantidade de mensagens que deseja limpar.");
  if (typeof args[0] == 'number') return message.reply('A quantidade precisa ser um número.');
  if (args[0] > 100) return message.reply("Limite de mensagens: **100**.");

  const totalMessage = Number(args[0]);
  const messages = await message.channel.messages.fetch({
    limit: totalMessage,
  });

  const embed = new MessageEmbed()
  .setColor('GREEN')
  .setDescription(`**${message.author.username}** limpou as mensagens desse canal.`)
  message.channel.bulkDelete(messages, true).then((_result) => {
    message.reply(embed)
      .then((msg) => msg.delete({ timeout: 5000 }));
  });
};

module.exports.help = {
  name: "limpar",
  aliases: ["clear", "cc"],
};