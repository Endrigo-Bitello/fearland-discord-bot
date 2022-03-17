const fs = require("fs");

module.exports = (client) => {
  fs.readdir("./events/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter((f) => f.split(".").pop() === "js");
    if (jsfiles.length <= 0)
      return console.log("Não há eventos para ser carregados.");
    console.log(`Carregando ${jsfiles.length} eventos...`);
    jsfiles.forEach((f, i) => {
      require(`./events/${f}`);
      console.log(`${1 + i}: ${f} carregado!`);
    });
  });
  
  fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter((f) => f.split(".").pop() === "js");
    if (jsfiles.length <= 0)
      return console.log("Não há comandos para ser carregados.");
    console.log(`Carregando ${jsfiles.length} comandos...`);
    jsfiles.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      console.log(`${1 + i}: ${f} carregado!`);
      client.commands.set(props.help.name, props);
      props.help.aliases.forEach((alias) => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });
};