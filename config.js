const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9SZlFTcUF2WG5VWmFDOWdWaE02QTdXb29OMVNOWE9uRHN6eUxHVVZWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2s4M2xhYytONlpCWExZRGJSYXpmV1c4YXpyZHpxNisvdmVhcndobjlVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQllXUnpQYkhHbE1tUXdmVE1ScXVBb2E3TDRzRGRMN1k1MThSOG9ORm1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFa096RFQ5MGVibUp0TTdoS0x0NHFxTk1PZ0ZjTzFTU3VhcVZrWm56ZFhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNeFExaFZtL3VVQWJOZFd6cTQxMG1QeGFsZjM0QURzU240UXJkeXNTME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhzV2lYYjBsL0FhUUljR1RzMEU1UGZ4MExhWHZhWVhqcExSTDRCdTdOVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUl6QWJVMW9HY3JrREJOVWJnTFVhVVk4eWJpaUhWbVZqNlltcjNkK1hWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hOci9iaU9FMFI1NG95VkpQRnZTcHNCenp5Q3RxTHNvbldYdHlPbHEwYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jSWpnWmFJVkdvVmY1aWVjdTZUVjNWa2VJeWR4YThPWnE2cXBFSHRXM08rQTNQR1NsOExJakdjc0JWb2JuSmVwTkxyejRXYXp0QmNaUU5WRmFYQUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiIvMDVQM3I3aWx1TmpGdXdhS2RxUzMzbG9YbERWUFB2c2pwcTVzaDVydFJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTM2NDQzNzUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQTY5QkE2QUIwQ0E4ODY2NUNGMTk5Nzk3NTlDRURFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjIyMTkwOTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVMQUlOQU1EIiwibWUiOnsiaWQiOiI1MDkzNjQ0Mzc1MDoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3MTc5OTA2OTc1MzU2MjoxMEBsaWQiLCJuYW1lIjoi4p6z4bS54bS/4a2E8J2Qj/CdkJHwnZCI8J2QjfCdkILwnZCE4piF8J2Qi/CdkIjwnZCLIOKYoO+4j/CdkIHwnZCO8J2QmOKAlM2ezZ/Nns2f8JajmCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlcvamNRRUVNbW9wY2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXpqVXBpZUNSOGhGUHFHbEgzNTZEWTh5dFZQeE1tdDQ0NDQ1S3RuMlZVZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL2JQbmkyenNRdXgyRmpjRXN0SVNVOFZvVXNwVnZrMVRNTTlINldLRkE0cnVPZzNjMU9iTTVHbFVEVjJTZzYvSHFmd29vdklEZWFwMVN0VkVsSkRKRGc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikk4N0o3ZUc1TnFWU1A4MlFnYzlmaWVaM0VrN0dQOFRjSGpjdlZiSmdXalNRWEJOY2xHWjA2aUNIb3c1SCtScGlpNERSSStxOC95MmYxeDdKSGtJY0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzY0NDM3NTA6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk00MUtZbmdrZklSVDZocFI5K2VnMlBNclZUOFRKcmVPT09PU3JaOWxWSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMjE5MDkzLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt2aCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "💝",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "➳ᴹᴿ᭄𝐏𝐑𝐈𝐍𝐂𝐄★𝐋𝐈𝐋 ☠️𝐁𝐎𝐘—͟͟͞͞𖣘",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50936443750",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anaya
    
"➳ᴹᴿ᭄𝐏𝐑𝐈𝐍𝐂𝐄★𝐋𝐈𝐋 ☠️𝐁𝐎𝐘—͟͟͞͞𖣘",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
