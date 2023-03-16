"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var express_1 = require("express");
(0, dotenv_1.config)();
var app = (0, express_1["default"])();
app.get('/', function (req, res, next) {
    res.send('Express server with TypeScript');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT));
});
