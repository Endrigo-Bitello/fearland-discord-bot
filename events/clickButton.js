const { client } = require("../index");
const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons');

client.on("clickButton", async (button) => {
  button.reply.defer(true);

  const message = button.message;
  const user = button.clicker;
  const member = user.member;

  if (button.id == "cartButton" || button.id == "doubtButton" || button.id == "appealButton" || button.id == "complaintButton" || button.id == "tagButton") {
    let nomedoticket;
    let emoji;
    if (button.id == 'cartButton') emoji = '🛒';
    if (button.id == 'cartButton') nomedoticket = 'compras';

    if (button.id == 'doubtButton') emoji = '❓';
    if (button.id == 'doubtButton') nomedoticket = 'dúvidas';

    if (button.id == 'appealButton') emoji = '🔒';
    if (button.id == 'appealButton') nomedoticket = 'appeal';

    if (button.id == 'complaintButton') emoji = '👮';
    if (button.id == 'complaintButton') nomedoticket = 'denúncia';

    if (button.id == 'tagButton') emoji = '📸';
    if (button.id == 'tagButton') nomedoticket = 'tags';

  const ticketName = `${emoji}・${nomedoticket}-${user.member.user.username.toLowerCase()}`;

    const hasChannel = message.guild.channels.cache.find(
      (channel) => channel.name.toLowerCase().includes(user.member.user.username.toLowerCase())
    );
    if (hasChannel)
      return message.channel
        .send(`${user.member}, você já possui um ticket aberto em: ${hasChannel}.`)
        .then((msg) => msg.delete({ timeout: 5000 }));

    const supportRole = message.guild.roles.cache.get("941596307192160276");
    const category = message.guild.channels.cache.get("941591369586192424");
    const channel = message.guild.channels.create(ticketName, { type: "text" });
    channel.then(async (channelCreated) => {
      channelCreated.setParent(category.id);

      await channelCreated.overwritePermissions([
        {
          id: message.guild.roles.everyone,
          deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
        },
        {
          id: user.id,
          allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
        },
        {
          id: (button.id != 'appealButton' ? supportRole : user.id),
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        },
      ]);

      const embed = new MessageEmbed()
        .setColor("GRAY")
        .setAuthor("Bem-vindo ao suporte FearLand!", message.guild.iconURL({ dynamic: true, format: 'png' }))
        .setDescription("> Essa sala é totalmente particular entre você e a nossa equipe. Aguarde, já iremos atendê-lo.\n\n> **ATENÇÃO** Seu comportamento será analisado durante o andamento do ticket, nunca descumpra as regras.\n\n")
        .setFooter("Clique na reação abaixo para finalizar o ticket!");

      const closeTicketButton = new MessageButton()
        .setStyle("red")
        .setEmoji('🗑️')
        .setLabel("Encerrar ticket")
        .setID("closeTicketButton")
      channelCreated.send('<@&941596307192160276>');
      channelCreated.send(embed, closeTicketButton);
    });
  } else if (button.id == "captchaButton") {
    const roleToRemove = member.guild.roles.cache.get('908421082762076160');
    const roleToAdd = member.guild.roles.cache.get('908421082762076160');

    member.roles.remove(roleToRemove);
    member.roles.add(roleToAdd);

  } else if (button.id == 'closeTicketButton') {
    if (!member.roles.cache.find(role => role.id == '941596307192160276')) return;

    message.channel.send('O ticket foi finalizado com sucesso!')
    setTimeout(() => message.channel.delete(), 5000);
  }
});