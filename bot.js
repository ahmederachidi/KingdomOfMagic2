// ########################################################################
// #          _ _ _____    _  __     _          _                         #
// #         (_|_)_   _|__| |/ /__ _| |__  _ __| |__   __ _               #
// #         | | | | ||_  / ' // _` | '_ \| '__| '_ \ / _` |              #
// #         | | | | | / /| . \ (_| | | | | |  | |_) | (_| |              #
// #         |_|_| |_|/___|_|\_\__,_|_| |_|_|  |_.__/ \__,_|              #
// #                                                                      #
// #                                                                      #
// #                                                                      #
// #                                                                      #
// #                                                                      #
// #                                                                      #
// ########################################################################

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '^^'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message',function(message) {
    
    if(message.content.startsWith("<@461630831136604170>")) {
        message.channel.send('Hey Im **Kingdom Of Magic Bot**  A Nice Bot Developed By:`@*Kahrba. ، ✩#1863 `')

    }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'ᘩThe KING ♚');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
if(message.content.startsWith(prefix + '#move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`:white_check_mark: **تم سحب جميع الأعضاء إليك**`)


 }
   });

client.on('message', message => {
    if (!message.guild) return; 
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 4,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**هذا الرابط لاربع اشخاص و لمدة 24 ساعة **`)
    }
});

const YTDL = require('ytdl-core')
const streamOptions = { seek : 0, volume : 1}
client.on('voiceStateUpdate', (oldMember, newMember) => {
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel


        if(oldUserChannel === undefined &&  newUserChannel !== undefined && newMember.id === '286088294234718209') {

            console.log("user joined");
            newMember.voiceChannel.join()
                .then(connection => {
                    const stream = YTDL('https://www.youtube.com/watch?v=ufojD9ek7-Y', {filter : 'audioonly'});
                    const dispatcher = connection.playStream(stream, streamOptions)
            })
            .catch(console.error);
    }   else if(newUserChannel === undefined && oldMember.id === '286088294234718209'){
        
        console.log("user left");
        oldMember.voiceChannel.leave();
    }
})

const Slam = [
  'هلا بيك',
  'منور يا ولد',
  'بنورك نفرح',
  'يا هلا ',
]
client.on('message', msg => {
if  (msg.content === 'هلا') {
    const slamat = new Discord.RichEmbed()
    .setDescription(`${Slam[Math.floor(Math.random() * Slam.length)]}`)
    .setThumbnail(msg.author.avatarURL)
    msg.channel.send(slamat);
  }
});

client.on('message', eyad => {
  if (eyad.content.startsWith('vb')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن شخص `');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})// نهايه كود الباند الفويس

client.on('message', eyad => {
  if (eyad.content.startsWith('uvb')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`منشن شخص `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 الان يمكنك الدخول الي الرومات الصوتيه :)
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
الان يمكنك الدخول الي الرومات الصوتيه
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
}) // نهايه كود فك الباند الفويس

client.on('message', message => {
  if(message.content === prefix + 'myid') {
    
    message.channel.send('**The 🆔 is : `' + message.author.id + '`**.')
  }
})

client.on('message', message => {


if (message.content === prefix + "mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "unmutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}
  

});


client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "#type"){
message.channel.startTyping();
}
});




client.login(process.env.TOKEN);
