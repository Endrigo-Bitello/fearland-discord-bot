module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  const channel = message.channel;

  channel.updateOverwrite(message.channel.guild.roles.everyone, {
    SEND_MESSAGES: false
});

  message.channel.send('O envio de mensagens nesse canal foi desativado!');
}

module.exports.help = {
  name: "lock",
  aliases: [],
}