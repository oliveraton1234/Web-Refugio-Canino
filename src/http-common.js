import axios from "axios";
var fs = require('fs');
var https = require('https');

export default axios.create({
    cert: 'Oliver_Estrada.crt',
    key: 'sandovalkey.key',
    baseURL: "http://127.0.0.1:9595/administrador",
    headers: {
        "Content-type": "application/json"
    }
});
