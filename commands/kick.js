module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return;
  if (args.length == 0) return message.reply('informe o id ou marque o usuário para kickar.').then((msg) => msg.delete({ timeout: 5000 }));

  const member = message.guild.members.cache.get(args[0]) || message.members.mentions.first();
  if (!member) return message.reply('este usuário não é válido.');
  if (!member.kickable) return message.reply('não consigo kickar esta pessoa.');
  if (member.user.id === client.user.id) return message.reply('por que você quer me kickar? '-'');

  member.kick();
  message.reply(`${member} foi kickado com sucesso!`);
};

module.exports.help = {
  name: "kick",
  aliases: ['kickar'],
};
