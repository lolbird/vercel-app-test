const WebSocket = require('ws');
const socket = new WebSocket('wss://n6q2b6jhnn8gmgac.uvwx.xyz:5000/?a=2', ["arras.io#v0+ft2", "arras.io#v1+ft2"]);

socket.onmessage = function({ data }) { console.log('d') }
socket.onerror = function() { console.log('e') }
socket.onclose = function() { console.log('c') }
