const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎Sophia😎═════╗*\n           \n*⚜═Sophia═⚜*\n\n*owner Hisham - http://Wa.me/+919400374036*\n* *\n🔰instagram:- https://youtube.com/c/ICHUTECH*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Hisham-Muhammed*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner Hisham-Muhammed═💥*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔════ EVA ═════╗*\n           \n*⚜═Eva═⚜*\n\n*Owner Albin_av - http://Wa.me/+918075601763*\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: phaticusthiccy*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner Albin AV═💥*\n\n*💘 https://github.com/albin_av/Sophia*\n* "

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

