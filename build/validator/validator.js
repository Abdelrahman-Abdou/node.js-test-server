"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-types */
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var validator = function (req, res, next) {
    var photos = ['abl', 'lab', 'bal', 'adport', 'ford'];
    var name = req.query.name;
    var imgLocation = path_1.default.resolve('./') + "/assets/".concat(name, ".jpg");
    var photoExist = photos.includes(name);
    try {
        if (name == undefined) {
            return res.status(400).send('Please, enter query parameter (name)');
        }
        else if (!photoExist) {
            return res.status(404).send('file is not exist');
        }
        else if (fs_1.default.existsSync(imgLocation) == false) {
            return res.status(404).send('file is not exist');
        }
        else {
            console.log('Request Successful');
        }
    }
    catch (error) {
        console.log(error);
    }
    next();
};
exports.default = validator;
