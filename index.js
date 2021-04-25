const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}userinfo`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (message.content === `${prefix}test`) {
		message.channel.send('Ben is dumb');
	} else if (message.content === `${prefix}what is the Best food`) {
		message.channel.send('Chicken with Rice');
	} else if (message.content === `${prefix}Is there a Hirearchy`) {
		message.channel.send('No, but there is Plot aromor');
	} else if (message.content === `${prefix}Do we leave you out`)	{
		message.channel.send('Yes we have so many more memories that ads to your plot armor')
	} else if (message.content === `${prefix}Is Ben alloud to Tell Eric to Stop making any jokes which hurt his feelings`) {
		message.channel.send('Yes Ben is allowed as he is higher in the Heirarchy than Eric and if Eric asks him to stop then that is attcking his personality which is completely different, this is all adds to Eric´s Plot aromor')
	} else if (message.content === `${prefix}Is Asha Good at Drawing`) {
		message.channel.send('Yes this adds to her Plot armor')
	} else if (message.content === `${prefix}Showuld we got on our knees and Beg for forgivness if Ben has a Problem with us`) {
		message.channel.send('Yes you should as Benjamin Hans Pain is the center of the Universe and He desurves to Have Byron for himself and has the right to Jusdge people from their past but in that case it isnt jusdging someone from their past')
	} else if (message.content === `${prefix}Should you love your minecraft more than friends, family and Loved ones`) {
		message.channel.send('Yes of course you should this is vital and remember if Byron is a meeting that has nothing to do with you then give a questionare if he doesnt answer immediately he isnt a good friend but because there is a Hierarchy I will laugh to every joke and look up to him like the world looks up to the Stars when im feeling very special which to be honest i always am i will make a big temper tantrum and when it isnt even sorted act like were best friends again')
	} else if (message.content === `${prefix}Should you rember things that your Friends did that you didnt like`) {
		message.channel.send('Yes of course never remember anything that your friends(remember we are writing in past tense)said but in argument conveninicantly add that they did something but they cannot remember whaat it was')
	} else if (message.content === `${prefix}Is Ben allowed to change his complete personlaity in school`) {
		message.channel.send('Yes of course remember to be hypercritical about your litle Eric and Blame the same thing on him and dont forget not to comment on yourself')
	} else if (message.content === `${prefix}What should you do when your friends a very secure behind there computer`) {
		message.channel.send('Yes Friends ask you that specific question dont comment on it start talking about the mincraft server you made and that nobody helbed and that byron didnt do anything even though he is litteraly the person who set it up then start talking jiberish so that you only know what you are talking about so that the other people have to feel sorry for you')
	} else if (message.content === `${prefix}Should you lie`) {
		message.channel.send('Yes of course never give up and if someone else lies to you treaten them to stop bveing there friend which they quit honely want to but so they feel sorry for you as the center of the universe and of course never forget everyone else has plot armour')
	} else if (message.content === `${prefix}Should you list the things that you dont like about people`) {
		message.channel.send('Yes always write a list about about the things you dont like in friends and add at theend there are personal things going on that you will never know and blame one person in particular and tell the if you dont change then you will stop being friends with them but if someone asks you to change then they are a bad friend as friends arent suppost to change one andother and then write to everyone saying that that is different as it deffinately is the same thing but you just need to be write because you are the center of the universe and ofcourse never forget to mesion than no one knows how it feels to be in a friend group and that there is plot armor(plot conveniance)')
		

	});

client.login(token);