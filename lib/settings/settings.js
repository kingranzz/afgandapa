const fs = require('fs')

global.storename = "-Developer"
global.botname = "-Developer"
global.ownername = "-Developer"
global.owner = "6282393734303"

global.packname = "Sigmund"
global.author = "Walisongo"
global.web = "https://whatsapp.com/channel/"
global.wm = "-Developer" //Gusah Diganti
global.chjid = "1203633175894471177"

global.sessionName = "session"
global.prefix = "."
global.botNumber = "62881011846585" 

global.sch = "https://whatsapp.com/channel/"
global.sgc = "https://whatsapp.com/channel/"
global.stg = "https://whatsapp.com/channel/"
global.syt = "https://whatsapp.com/channel//"
global.sig = "https://whatsapp.com/channel/"
global.thumb = "https://telegra.ph/file/02b7668fa828d96ccf69e.jpg"

global.qris = "https://telegra.ph/file/02b7668fa828d96ccf69e.jpg"
global.dana = "082125968810"
global.gopay = "082125968810"
global.ovo = "-"
global.pulsa = "-"
global.rek = "-"

// Apikey nya
global.gtds = "GataDios" //Isi Apikey Kalian
global.xyro = "5dRkJDWvIG" //Isi Apikey Kalian
global.nlkey = "AdpStore" //Isi Apikey Kalian
global.skizapi = "SanTampan" //Isi Apikey Kalian
global.neoxrapi = "sanolan" //Isi Apikey Kalian

// Buat cpanel
global.domain = ""
global.apikey = ""
global.capikey = ""
global.eggs = "15"
global.locc = "1"
global.apido = ""

global.autotyping = false
global.autoread = false
global.autobio = false
global.anticall = false
global.antispam = false
global.antibot = false
global.welcome = false // welcome+left

global.gamewaktu = 60
global.limit = 15

global.bejir = (a, b) => {
let bjir = 
{key: {remoteJid: 'status@broadcast', 
participant: '0@s.whatsapp.net'}, 
message: {orderMessage: {itemCount: 1000, 
status: 1, surface: 1, 
message: a, orderTitle: '', thumbnail: b, 
sellerJid: '0@s.whatsapp.net'}}};
return bjir
}

// NOTE
// true aktif & false nonaktif

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
