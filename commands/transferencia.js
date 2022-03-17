const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setTitle("**FearLand - Transferência de VIP**")
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .setDescription("Para transferir um VIP para outra conta, você precisa seguir o passo a passo:\n\n**1º passo**\n Abra um ticket de __compras__ em <#908421120041046096>;\n\n**2º passo**\n Envie os seguintes dados:\n- Nickname atual;\n- Nickname que deseja transferir;\n- Motivo da transferência;\n- Foto nítida e legível do comprovante da compra;\n\n**3º passo**\n Aguarde!\n\n**REQUISITOS PARA TRANSFERÊNCIA**\n- A compra deve ter no máximo **__30 dias__**\n-Somente uma transferência por produto;\n- A conta em questão não pode ter nenhuma punição pendente;\n- Não será feita a transferência de __Unban/Unmute__ a não ser que a conta comprada não possua nenhuma dessas punições;\n- Não transferimos produtos que já tenha sido aberto algum processo de estorno.")

    message.reply(embed);
}

module.exports.help = {
    name: 'transferencia',
    aliases: ['transfer', 'transferir']
}