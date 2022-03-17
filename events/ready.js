const { client } = require('../index');

client.once('ready', () => {
  console.log('Iniciado com sucesso!');

  const activity = [
    { name: 'FearLand', type: 'PLAYING' }
  ];

  setInterval(() => {
    const statusChoosed = activity[Math.floor(Math.random() * activity.length)];
    client.user.setPresence({ status: 'online', activity: statusChoosed });
  }, 5000);
});

client.login(process.env.TOKEN);