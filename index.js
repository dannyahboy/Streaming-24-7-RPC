const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Kuala_Lumpur', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('937307637207400509')
    .setType('STREAMING')
    .setURL('https://youtu.be/9Ws_6U-Jl2g') //Must be a youtube video link 
    .setState('Your State')
    .setName('NoobBeast')
    .setDetails(`COOL [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/avatars/897817570302894121/a_ffbed747bec8b243823c1df6556f0562.gif?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('GOATS') //Text when you hover the Large image
    .setAssetsSmallImage('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTV1ZnByZTB2NmpybXB2NjlzZHdrNmlnNXNnaWo4Y2psazE4M2czcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/llQMjpdCwjdrVGzz1d/giphy.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verified') //Text when you hover the Small image
    .addButton('MazeFut', 'https://discord.gg/PCJB6khwZZ')
    .addButton('Manchester Is BLUE', 'https://discord.gg/mancity');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `CHILLING [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
