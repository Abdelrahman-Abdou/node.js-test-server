"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = 3000;
app.use(routes_1.default);
//define a route handler for the default home page
app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;