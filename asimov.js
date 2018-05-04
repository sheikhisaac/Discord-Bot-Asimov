// Import the discord.js module
const Discord = require('discord.js')

// Create an instance of Discord that we will use to control the bot
var asimov = new Discord.Client();
const token = 'NDQxOTkyODE2ODA2MTk5Mjk4.Dc4Vew.FT6EM_8YGrt3Psph3QSrjr__HBo'

// Discord bot initial message
asimov.on('ready', () => {
    console.log('Asimov online.')
});

asimov.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;

    // Check if the message starts with the `!` trigger
    if (message.content.indexOf('!') === 0) {
        // Get the user's message excluding the `!`
        var text = message.content.substring(1);

        switch(text){
            case 't1':
                message.reply('RUN IT DOWN BOYS');
                break;
                
            case 'qt':
                message.reply('doot diddly donger cuckarino');
                break;
    
            case 'nb3':
                message.reply('You kappachino');
                break;
        }
    }
});

asimov.login(token);