const { client } = require('../index');
const Discord = require('discord.js');

client.on('guildMemberAdd', (member) => {
    const welcomeRole = member.guild.roles.cache.get('941602809776853022');
    member.roles.add(welcomeRole);

    const channel = member.guild.channels.cache.get('953139963829047356');
    const embed = new Discord.MessageEmbed()
        .setTitle(`:clipboard: NOVO REGISTRO`)
        .addField('MAIS INFORMAÇÕES SOBRE O REGISTRO \n\n ', `Tag do usuário: **${member.user.tag}**; \n Username utilizado na hora do registro: **${member.user.username}**; \n\n **Horário**:`)
        .setTimestamp()
        .setDescription(`**Um novo registro foi detectado em nosso sistema**: \n\n O usuário **<@${member.user.id}>** entrou em nosso servidor Discord. O cargo <@&879191820775596104> foi atribuído automaticamente com sucesso! Aguardando a verficação para que o cargo <@&861819024718430209> seja atribuído à sua conta!`)
        .setThumbnail(member.user.avatarURL({ dynamic: true, format: 'png' }))

    channel.send(embed);
});