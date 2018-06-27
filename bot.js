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
const prefix = '#'

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
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});

client.on('message', async message => {
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "tempban")) {
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**- You don't have the needed permissions!**");
       if(!User) message.channel.send("**- Mention someone!**");
       if(User.id === client.user.id) return message.channel.send("**- You cannot ban me!**");
       if(User.id === message.guild.owner.id) return message.channel.send("**- You cannot ban the owner of the server!**");
       if(!time) return message.channel.send("**- Supply a duration!**");
       if(!time.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('**- Supply a real time!**');
       if(!Reason) message.channel.send("**- Supply a reason!**");
       let banEmbed = new Discord.RichEmbed()
       .setAuthor(`You have been banned from ${message.guild.name} !`)
       .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
       .addField('- Banned By: ',message.author.tag,true)
       .addField('- Reason:',Reason,true)
       .addField('- Banned At:',date,true)
       .addField('- Duration:',time,true)
       .setFooter(message.author.tag,message.author.avatarURL);
       User.sendMessage({embed: banEmbed}).then(() => message.guild.member(User).ban({reason: Reason}))
       .then(() => message.channel.send(`**# Done! I banned: ${User}**`)).then(() => { setTimeout(() => {
           message.guild.unban(User);
       }, mmss(time));
    });
   } 
});




client.login(process.env.TOKEN);
