const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return;
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message
      .reply("eu não tenho permissão de mutar.")
      .then((m) => m.delete({ timeout: 5000 }));

  if (!args[0])
    return message
      .reply("informe o usuario marcando ele.")
      .then((m) => m.delete({ timeout: 5000 }));
  const member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);

  if (!member)
    return message
      .reply("este membro é inválido")
      .then((m) => m.delete({ timeout: 5000 }));
  if (member.id === client.user.id)
    return message
      .reply("você não pode me mutar!")
      .then((m) => m.delete({ timeout: 5000 }));
  if (member.id === message.author.id)
    return message
      .reply("você não pode se mutar.")
      .then((m) => m.delete({ timeout: 5000 }));
  if (!member.bannable)
    return message
      .reply("este membro não pode ser mutado.")
      .then((m) => m.delete({ timeout: 5000 }));

  if (!args[1])
    return message
      .reply(
        "digite o motivo do mute."
      )
      .then((m) => m.delete({ timeout: 5000 }));
  const reason = args.slice(1).join(' ');
  const role = message.member.guild.roles.cache.get('870695097342251049');
  await member.roles.remove(member.roles.cache);
  await member.roles.add(role, 'mute');

  const channel = client.channels.cache.get("861964642465218621");

  const embed = new Discord.MessageEmbed()
    .setColor("2F3136")
    .setTitle("Nova punição!")
    .setThumbnail(member.user.avatarURL({ dynamic: true, format: "png" }))
    .addField("Membro mutado:", member)
    .addField("Mutado por:", message.author)
    .addField("Motivo:", reason)
    .setTimestamp();

  channel.send(embed);
};

module.exports.help = {
  name: "mute",
  aliases: ['mutar'],
};