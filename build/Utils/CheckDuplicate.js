"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var checkDuplicate = function (name, location) {
    // let file = null;
    fs_1.default.readdir(location, function (err, files) {
        files.forEach(function (file) {
            console.log(name, location);
            console.log(file);
        });
    });
    return {};
};
exports.default = checkDuplicate;
