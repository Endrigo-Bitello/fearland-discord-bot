const fs = require("fs");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    const jsfiles = files.filter((f) => f.split(".").pop() === "js");
    if (jsfiles.length <= 0)
      return message.reply("não tem comandos disponíveis.");

    const filesList = jsfiles.toString().split(".js").join("");
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('📜   **FEARLAND - COMANDOS DO BOT**')
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .setDescription('Comandos disponíveis no momento:\n\n> ・ Ajuda\n> ・ Requisitos\n> ・ Boost\n> ・ Loja\n> ・ Tag\n> ・ Aplicar\n・ Convite\n')
    message.channel.send(embed);
  });
};

module.exports.help = {
  name: "ajuda",
  aliases: ['help'],
};