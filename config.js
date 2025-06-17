const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c9f1fbd5b78d902762e5f.jpg" || "https://telegra.ph/file/c9f1fbd5b78d902762e5f.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/c9f1fbd5b78d902762e5f.jpg" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_42_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGFrUFpCc2dxVHJNdWxPTEYyaUFLWm9iNjFwOG9ydkpoRE5HL1RlZXo0VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWloYUdlNkFSNnlNVU8tY0FMaERXd1wiLFxuICBcInBob25lSWRcIjogXCJmYzk1ZTM2Yy1lMDY3LTQyMjktYjU5Zi1kYTkzYjMyNWViZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgNDAsXG4gICAgICAyNDYsXG4gICAgICAxODksXG4gICAgICAyNTQsXG4gICAgICAxMTIsXG4gICAgICAxMjIsXG4gICAgICAxNCxcbiAgICAgIDUzLFxuICAgICAgMTU4LFxuICAgICAgMTcwLFxuICAgICAgMTU3LFxuICAgICAgMjU0LFxuICAgICAgMTkwLFxuICAgICAgMjE2LFxuICAgICAgMjIwLFxuICAgICAgMTkxLFxuICAgICAgOTQsXG4gICAgICAxNDksXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDIyNSxcbiAgICAgIDkyLFxuICAgICAgMTc5LFxuICAgICAgOTEsXG4gICAgICAxMTAsXG4gICAgICAyNyxcbiAgICAgIDE4NyxcbiAgICAgIDE3MCxcbiAgICAgIDIwLFxuICAgICAgMzUsXG4gICAgICAxNDIsXG4gICAgICAyMjQsXG4gICAgICAyMTgsXG4gICAgICAzOCxcbiAgICAgIDg0LFxuICAgICAgNDcsXG4gICAgICAxOTksXG4gICAgICAxOTMsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKRG1vNTBCRU5MaHhjSUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZIc3FVL0NreDhMZUZob2dxaGlTSFZZUUg4VHRpdmlOMWlwMDJicitLQWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1hzL1BNR3FESDJ0c1lrTDZZaXJadU8vY1M0OTI3MWhYVCtBRkdibmt2L0NvcmY3TStudHZyeE1yRmVMeWpFQ3BySW1nUklFZ3Z4NWxDL1BLUmxWRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMzdhRno0V2JyZ3B2aU1QTWJSR1ZDNHpGRjl1SzRtTWRvZFhnbmFlemoxMVppcEpZZWdQMHpnV1M1QVArYlVGaXY2ZzF3clBCZmMraU9xTGNEUWFUaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjY4NTY3OTU6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLaXJrdGhlbWF2ZXJpY2sg4qaX8J2Vr+KmmFwiLFxuICAgIFwibGlkXCI6IFwiMjAxMzExNjYwNDg1MDQ6MjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjY4NTY3OTU6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwMTY3NzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEhEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQSEMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtQ1NVK1cvYXNPemtZMzMxalFOZmQ0NUlBWlVpZVZTNkpsNk96WlZjM2JNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyOTgzOTM3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwMDk2ODYxNjc3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEhELmpzb24iOiAie1wia2V5RGF0YVwiOlwiaHJzVFNCYW52T0NCOEtYN2MzUGRkQS9nK0tmZWJVdzhCc295SUk3alVNcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjk4MzkzNzYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDE2NzI2OTYxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "Powered by ©🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭",
  packname: process.env.PACK_NAME || "𝙸 αɱ ค̡ƈє™⟬𝟭⟭",
  botname : process.env.BOT_NAME  || "𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑",
  ownername:process.env.OWNER_NAME|| "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭",


  errorChat : process.env.ERROR_CHAT || "false",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
