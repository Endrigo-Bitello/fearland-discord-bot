const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    //.setAuthor('Tickets', message.guild.iconURL({ dynamic: true, format: 'png' }))
    .setDescription("**Siga os passos para abrir um ticket\n**Abra um __ticket__ e converse diretamente com um de nossos ajudantes.\n\n 🛒 **Problemas com compras**\n Comprou um produto em nossa loja e não recebeu? Nós iremos resolver!\n\n ❓ **Dúvidas**\n Nossa equipe possui uma resposta para as suas dúvidas. Abra um ticket e tire suas dúvidas agora!\n\n 🔐 **Revisão**\n Foi punido incorretamente? Abra um revisão de punição para resolvermos o seu problema.\n\n 👮 **Denúncias**\n Está sendo ameaçado, chantageado, ofendido ou encontrou algum infrator em nossos servidores? Faça uma denúncia aqui.")
    const cartButton = new MessageButton()
    .setStyle("gray")
    .setLabel("Compras")
    .setID("cartButton")

    const doubtButton = new MessageButton()
    .setStyle("gray")
    .setLabel("Dúvidas")
    .setID("doubtButton")

    const appealButton = new MessageButton()
    .setStyle("gray")
    .setLabel("Revisão")
    .setID("appealButton")

    const complaintButton = new MessageButton()
    .setStyle("gray")
    .setLabel("Denúncias")
    .setID("complaintButton")

    //const tagButton = new MessageButton()
    //.setStyle("red")
    //.setLabel("📸 Tags")
    //.setID("tagButton") 

    message.channel.send(embed, {
        buttons: [cartButton, appealButton, doubtButton, complaintButton]
    });
}

module.exports.help = {
    name: 'ticket',
    aliases: ['setticket']
}