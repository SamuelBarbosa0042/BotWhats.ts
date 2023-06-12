//import { Client, LocalAuth } from "whatsapp-web.js";
//import { sendQrCode } from "./disc";
require('./core/Events/client.ts')
import client  from '../src/core/wweb/Libwts'
require('./core/Events/messages.ts')

// client.on("qr", async (qr) => {
//   await sendQrCode(qr);
// });


  

// (async() => {

//     await client.initialize();

//     client.on("message", (message) => {
//         //console.log(message.body);
//       });
// })()
const Inicializador = 
async () => {
    await client.initialize();
 
    }
 
Inicializador()

