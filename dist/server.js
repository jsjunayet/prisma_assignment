"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = 5000;
// console.log(app);
app_1.default.listen(port, () => {
    console.log(`Server is Running on http://localhost:${5000}`);
});
