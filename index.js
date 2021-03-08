const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "/"

bot.on('message', message => {
	
	const args = message.content.slice(prefix.length).trim().split(' ');
	
	if(message.content === prefix + "ping"){
	   message.channel.send("Pong")
	}
	
	if(message.content === prefix + "help"){
	  var helpembed = new Discord.MessageEmbed()
	  .setTitle("Help")
	  .setDescription("Aide pour les commandes du bot")
	  .addField("/ping", "Ping le bot")
	  message.channel.send(helpembed)
	}
	
	if(message.content.startsWith(prefix + "candid")){
	message.channel.send("Ok")
	console.log("Nouvelle Candidature")
	}
	
	if(message.channel.type == "dm"){
	   message.channel.send("Ok")
	}
	
	if(message.content.startsWith(prefix + "mp")){
	let target = message.mentions.users.first() || message.author;
    let mpUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let mpMessage = args.join(" ").slice(22);
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Tu n'as pas la permission d'exécuter cette commande!");
    let botmessage = args.join(" ");
    message.delete().catch();
    mpUser.send(`${mpUser} ${mpMessage}`)
    message.author.send(`${message.author} Tu as envoyé un message privé a ${mpUser}`)

    console.log(`Commande ${message.author.lastMessage} executé sur le serveur ${message.guild.name} dans le salon ${message.channel.name} par le membre ${message.author.username} le ${message.createdAt}`)
    }
	
})

bot.login(process.env.TOKEN)
