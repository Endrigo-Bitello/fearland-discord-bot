const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "none" });

require("dotenv").config();
require("discord-buttons")(client);
require("./functions")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = {
  client: client
};