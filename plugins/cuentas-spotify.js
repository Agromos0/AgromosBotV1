let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 💚⚡💚 •═════╮ 

*Escuchar spotify premiun gratis premiun durante 30 dias|Te pedimos que no cambies nada:*

 🔰nombre  de la apk SPOTIFY descargala en la play store 🔰

*🙀💚correo:wagepa4304@flowminer.com*
Contraseña:BotAgromos
 
*Data*
Fecha de cuenta agregada:25/03/22
Vencimiento:25/04/22

Pronto  nuevas cuentas aparecerán aquí😼💚
╰═════• 💚⚡💚 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💚agromosSP', 'status@broadcast')
}
handler.command = /^(cuentaspotify|CUENTASPOTIFY|ESPOTIFY|espotify|escucharspotify)$/i

module.exports = handler
