"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var days_enum_1 = require("./enums/days.enum");
var pets_import_json_1 = __importDefault(require("./data/pets-import.json"));
var _pets = pets_import_json_1.default;
var outputString = function () {
    var message = "";
    var currentDay = days_enum_1.Days[new Date().getDay()];
    _pets.forEach(function (pet) {
        message +=
            "\n            Hi, I'm " + pet.name + ". I live with " + allPetNames().filter(function (i) { return i !== pet.name; }) + "\n            My favorite food is " + pet.food.brand + ", but I'm okay with " + pet.food.alternatives[0] + "\n            Also, today is " + currentDay + ". My favorite!\n        ";
    });
    return message;
};
var allPetNames = function () {
    var allPetNames = [];
    _pets.forEach(function (pet) {
        allPetNames.push(pet.name);
    });
    return allPetNames;
};
console.log(outputString());
//# sourceMappingURL=index.js.map