const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return;
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message
      .reply("eu não tenho permissão de banir.")
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
      .reply("você não pode me banir, filho da puta!")
      .then((m) => m.delete({ timeout: 5000 }));
  if (member.id === message.author.id)
    return message
      .reply("você não pode se banir, animal burro.")
      .then((m) => m.delete({ timeout: 5000 }));
  if (!member.bannable)
    return message
      .reply("este membro não pode ser banido.")
      .then((m) => m.delete({ timeout: 5000 }));

  if (!args[1])
    return message
      .reply(
        "digite a quantidade de dias que você quer que este usuário seja banido. (Caso seja permanente, digite Permanente no lugar dos dias"
      )
      .then((m) => m.delete({ timeout: 5000 }));
  let dias = Number(args[1]);

  if (!args[2])
    return message
      .reply("digite o motivo")
      .then((m) => m.delete({ timeout: 5000 }));
  const motivo = args.slice(2).join(" ");

  if (isNaN(dias)) {
    member.ban({ reason: motivo });
    dias = "Permanente";
  } else {
    if (dias > 7)
      return message
        .reply(
          "a quantidade de tempo deve ser menor ou igual a 7 e maior que 0"
        )
        .then((m) => m.delete({ timeout: 5000 }));

    member.ban({ days: dias, reason: motivo });
  }

  const channel = client.channels.cache.get("861964631223566346");

  const embed = new Discord.MessageEmbed()
    .setColor("2F3136")
    .setTitle("Nova punição!")
    .setThumbnail(member.user.avatarURL({ dynamic: true, format: "png" }))
    .addField("Membro banido:", member)
    .addField("Banido por:", message.author)
    .addField("Motivo:", motivo)
    .addField(
      "Tempo:",
      dias == "Permanente" ? "Permanentemente" : `${dias} dia(s)`
    )
    .setTimestamp();

  channel.send(embed);
};

module.exports.help = {
  name: "ban",
  aliases: ['banir'],
};
