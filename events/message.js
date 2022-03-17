const { client } = require("../index");
const config = require('../config.json');

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === "DM") return;
  const prefix = process.env.PREFIX;

  config.FILTER_LIST.some(word => {
    const effectiveWord = word.toLowerCase();
    const effectiveMessage = message.content.toLowerCase();

    if (effectiveMessage.includes(effectiveWord)) {
      return message.delete();
    }
  });
  
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
    return message.channel.send(`Meu prefixo é \`\`${prefix}\`\`.`).then(m => m.delete({ timeout: 5000 }));
  }

  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  let command;
  if (!message.content.startsWith(prefix)) return;

  try {
    if (client.commands.has(cmd)) {
      command = client.commands.get(cmd);
    } else {
      command = client.commands.get(client.aliases.get(cmd));
    }

    message.delete();
    return command.run(client, message, args);
  } catch (err) {
    message.delete();
    message.channel.send(`${message.author}, este comando não existe!`).then(mm => mm.delete({ timeout: 5000 }));
  }
});