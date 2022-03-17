module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  if (!args[0]) return message.reply("digite o link da imagem.");

  try {
    client.user.setAvatar(args[0]);
  } catch (err) {
    message.reply(
      "Algo de errado não está certo. Não foi possível trocar a imagem. Tente mudar o link ou tentar novamente depois."
    );
  }
};

module.exports.help = {
  name: "setimage",
  aliases: [],
};
