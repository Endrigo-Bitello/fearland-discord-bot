module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    const channel = message.channel;
  
    channel.updateOverwrite(message.channel.guild.roles.everyone, {
      SEND_MESSAGES: true
  });

  message.channel.send('O envio de mensagens nessa canal foi habilitado novamente!').then(msg => msg.delete({timeout: 3000}));
    
  }
  
  module.exports.help = {
    name: "unlock",
    aliases: [],
  }