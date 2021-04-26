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
		message.channel.send('Yes we have so many more memories that ads to your plot armor');
	} else if (message.content === `${prefix}Is Ben alloud to Tell Eric to Stop making any jokes which hurt his feelings`) {
		message.channel.send('Yes Ben is allowed as he is higher in the Heirarchy than Eric and if Eric asks him to stop then that is attcking his personality which is completely different, this is all adds to Eric´s Plot aromor');
	} else if (message.content === `${prefix}Is Asha Good at Drawing`) {
		message.channel.send('Yes this adds to her Plot armor') ;
	} else if (message.content === `${prefix}Showuld we got on our knees and Beg for forgivness if Ben has a Problem with us`) {
		message.channel.send('Yes you should as Benjamin Hans Pain is the center of the Universe and He desurves to Have Byron for himself and has the right to Jusdge people from their past but in that case it isnt jusdging someone from their past') ;
	} else if (message.content === `${prefix}Should you love your minecraft more than friends, family and Loved ones`) {
		message.channel.send('Yes of course you should this is vital and remember if Byron is a meeting that has nothing to do with you then give a questionare if he doesnt answer immediately he isnt a good friend but because there is a Hierarchy I will laugh to every joke and look up to him like the world looks up to the Stars when im feeling very special which to be honest i always am i will make a big temper tantrum and when it isnt even sorted act like were best friends again') ;
	} else if (message.content === `${prefix}Should you rember things that your Friends did that you didnt like`) {
		message.channel.send('Yes of course never remember anything that your friends(remember we are writing in past tense)said but in argument conveninicantly add that they did something but they cannot remember whaat it was');
	} else if (message.content === `${prefix}Is Ben allowed to change his complete personlaity in school`) {
		message.channel.send('Yes of course remember to be hypercritical about your litle Eric and Blame the same thing on him and dont forget not to comment on yourself') ;
	} else if (message.content === `${prefix}What should you do when your friends a very secure behind there computer`) {
		message.channel.send('Yes Friends ask you that specific question dont comment on it start talking about the mincraft server you made and that nobody helbed and that byron didnt do anything even though he is litteraly the person who set it up then start talking jiberish so that you only know what you are talking about so that the other people have to feel sorry for you') ;
	} else if (message.content === `${prefix}Should you lie`) {
		message.channel.send('Yes of course never give up and if someone else lies to you treaten them to stop bveing there friend which they quit honely want to but so they feel sorry for you as the center of the universe and of course never forget everyone else has plot armour') ;
	} else if (message.content === `${prefix}Should you list the things that you dont like about people`) {
		message.channel.send('Yes always write a list about about the things you dont like in friends and add at theend there are personal things going on that you will never know and blame one person in particular and tell the if you dont change then you will stop being friends with them but if someone asks you to change then they are a bad friend as friends arent suppost to change one andother and then write to everyone saying that that is different as it deffinately is the same thing but you just need to be write because you are the center of the universe and ofcourse never forget to mesion than no one knows how it feels to be in a friend group and that there is plot armor(plot conveniance)') ;
	} else if (message.content === `${prefix}Is it fine to say that you will stop when the word stop is said`) {
		message.channel.send('yes that is completely appropriate to inffer that you will stop when said stop but if the word stop comes up then wait for a bit continue with the jokes and when spoken to about it then you will you will say i never meant we would stop if you said stop') ;
	} else if (message.content === `${prefix}should you be a complete dick to one of your friends to get higher into the Hierarchy`) {
		message.channel.send('Yes of course especially with people called Eric they really deserves to be dicks to and be sure to be really hypocritical')	;
	} else if (message.content === `${prefix}How do i lead an argument in the way of the Ben`) {
		message.channel.send('This is a very good question this is a very important addition to the Benjamin vocabulary as this is vital in arguments and really just to be a very big idiot to be honest but like of course in an argument you have questions asked towards you so you have to really deny everything and make up things so they feel sorry for you that is very important and if you do not respect that it is a federal offence then you need to never answer the question asked towards you then always say that someone else did the same thing and if they do not accept it and really never forget that you cannot answer the question or else you are a comple idiot and nobody really cares about you if you are not a Ben who doesnt denie anything but aswell get very protective at the begging and dont join vc and lie yourass off but when you are well into getting the other people pissed then you have to become friends again after they still hate you and they want you to rip out your vocal cords because you voice sounds like a chipmunk with helium when they decide to make a vc without you then you leave the server, the other people leave the whatsapp chats bloch you unfriend you everywhere and you start to write in class chat like a absolut idiot and then you start to text girls like an absolut idiot and pedophile this is the guide of howto argue like Ben') ;

	});

client.login(token);