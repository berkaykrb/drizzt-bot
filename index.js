var Discord = require('discord.js');
var bot = new Discord.Client()


bot.on('ready', function() {
    console.log(bot.user.username + ' : connected.');
    bot.user.setGame('hunting with Catti Brie')
});

bot.on('message', function(message) {

    if (message.content === "$loop") { 

 // let ccmRole = message.guild.roles.get(process.env.CCMROLE_ID);
 // (message.member.roles.has(ccmRole.id) ||

 let privtenRole = message.guild.roles.get(process.env.PRIVTENROLE_ID);

    if (message.member.roles.has(privtenRole.id)) {

      message.channel.fetchMessages()
        .then(messages => messages.array().forEach(
        message => message.author.equals(bot.user) && message.delete()
        ));

          console.log(bot.user.username + ' : old messages deleted.');


      message.channel.send("<@&528205835839471616> Please write your **MiceForce nicknames** in the chat to become **confirmed** and gain access to our other channels and members.")
          .catch(console.error);

          console.log(bot.user.username + ' : new message sent.');

   var interval2 = setInterval (function () {

      message.channel.fetchMessages()
        .then(messages => messages.array().forEach(
        message => message.author.equals(bot.user) && message.delete()
        ));

           console.log(bot.user.username + ' : old messages deleted.');

        }, 1800 * 1000); 


    var interval = setInterval (function () {

            message.channel.send("<@&528205835839471616> Please write your **MiceForce nicknames** in the chat to become **confirmed** and gain access to our other channels and members.")
            .catch(console.error);

            console.log(bot.user.username + ' : new message sent.');

        }, 1800 * 1000); 
    }

    else {
      message.channel.send("You don't have enough roles to do it. Sorry :(")
    }

    }
	
  if (message.content === "!gender male") { 
	 
    let channelID = process.env.FS_BOTCHANNEL_ID.toString();

  if (message.channel.id === channelID) {

	 let maleRole = message.guild.roles.get(process.env.MALEROLE_ID);
	  let femaleRole = message.guild.roles.get(process.env.FEMALEROLE_ID);
	  const guildMember = message.member;
	  
	  if (message.member.roles.has(femaleRole.id)) 
	  {
		  guildMember.removeRole(femaleRole.id);  
          guildMember.addRole(maleRole.id);
		  message.channel.send("You have acquired the gender role **Male**.")
	  }
	  
	  else if (message.member.roles.has(maleRole.id)) 
	  {
          message.channel.send("You already have the **Male** role.")
      }
		  
      else 
	  {
          guildMember.addRole(maleRole.id);
		  message.channel.send("You have acquired the gender role **Male**.")
      }
	  
	 }
  else {
	  message.channel.send("You cannot use this command in this channel.")
       }
    
 } 

  if (message.content === "!gender female") { 
  
    let channelID = process.env.FS_BOTCHANNEL_ID.toString();

  if (message.channel.id === channelID) {
  
	  let maleRole = message.guild.roles.get(process.env.MALEROLE_ID);
	  let femaleRole = message.guild.roles.get(process.env.FEMALEROLE_ID);
	  const guildMember = message.member;
	  
	  if (message.member.roles.has(maleRole.id)) 
	  {
		  guildMember.removeRole(maleRole.id);
          guildMember.addRole(femaleRole.id);
		  message.channel.send("You have acquired the gender role **Female**.")
	  }
	  
	  else if (message.member.roles.has(femaleRole.id)) 
	  {
          message.channel.send("You already have the **Female** role.")
      }
		  
      else 
	  {
          guildMember.addRole(femaleRole.id);
		  message.channel.send("You have acquired the gender role **Female**.")
      }
  } 
  
  else {
	message.channel.send("You cannot use this command in this channel.")
       }

  }
  
  if (message.content === "!removegender") { 
  
    let channelID = process.env.FS_BOTCHANNEL_ID.toString();

  if (message.channel.id === channelID) {
  
   let maleRole = message.guild.roles.get(process.env.MALEROLE_ID);
   let femaleRole = message.guild.roles.get(process.env.FEMALEROLE_ID);
   const guildMember = message.member;
   
   if (message.member.roles.has(maleRole.id)) 
	  { 
		guildMember.removeRole(maleRole.id); 
		message.channel.send("Your role **Male** has been removed.")
	  } 
		  
   else if (message.member.roles.has(femaleRole.id)) 
	  {
		guildMember.removeRole(femaleRole.id);
		message.channel.send("Your role **Female** has been removed.")
	  } 
   else
	  {
	    message.channel.send("You have no role.")
	  } 
  } 
  
  else {
	  message.channel.send("You cannot use this command in this channel.")
       }
  
 } 
  if (message.content.toLowerCase() === '!about') {
    message.channel.send('This bot was created for fun by **BerkayK#2525**');
  }

  if (message.content.toLowerCase() === 'kylie' || message.content.toLowerCase() === 'lost' || message.content.toLowerCase() === 'lostwithdark') {
    message.channel.send('really noob');
  }
    
  if (message.content.toLowerCase() === 'pro') {
    message.channel.send('who called Berk here?');
  }
        
  if (message.content.toLowerCase() === 'noob') {
    message.channel.send('who called Kylie here?');
  }

  if (message.content.toLowerCase() === 'berk' || message.content.toLowerCase() === 'berkayk' || message.content.toLowerCase() === 'berkay') {
    message.channel.send('pro');
  }

  if (message.content.toLowerCase() === 'xqr' || message.content.toLowerCase() === '+xqr' || message.content.toLowerCase() === 'chair') {
    message.channel.send('ma boi');
  }
    
  if (message.content.toLowerCase() === 'tr' || message.content.toLowerCase() === 'turkey') {
    message.channel.send(':flag_tr:');
  }

  if (message.content.toLowerCase() === 'usa' || message.content.toLowerCase() === 'america' || message.content.toLowerCase() === 'us' || message.content.toLowerCase() === 'united states') {
    message.channel.send(':flag_um:');
  }

  if (message.content.toLowerCase() === 'de' || message.content.toLowerCase() === 'germany') {
    message.channel.send(':flag_de:');
  }
    
  if (message.content.toLowerCase() === 'en' || message.content.toLowerCase() === 'england' || message.content.toLowerCase() === 'britain') {
    message.channel.send(':flag_gb:');
  }

  if (message.content.toLowerCase() === 'drizzt' || message.content.toLowerCase() === 'drizzt do urden' || message.content.toLowerCase() === 'drizztdourden') {
    message.channel.send('**Change is not always growth, but growth is often rooted in change.**\n-*Drizzt Do Urden*');
  }
    
   if (message.content.toLowerCase() === 'catti brie' || message.content.toLowerCase() === 'cattibrie') {
    message.channel.send(':heart:');
  }

});

bot.login(process.env.BOT_TOKEN);
