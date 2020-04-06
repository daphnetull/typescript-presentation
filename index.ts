import { Pet } from './models/pet.model';
import { Days } from './enums/days.enum';
import data from './data/pets-import.json';

let _pets: Pet[] = data;

let outputString = (): string => {
    let message: string = "";
    let currentDay = Days[new Date().getDay()];

    _pets.forEach(pet => {
        let rescueMessage: string = "";
        rescueMessage = pet.rescue === true ? "I'm a rescue!" : "";

        message += 
        `
            Hi, I'm ${pet.name}. I live with ${allPetNames().filter(i => i !== pet.name)}
            My favorite food is ${pet.food.brand}, but I'm okay with ${pet.food.alternatives[0]}
            Today is ${currentDay}. My favorite!
            ${rescueMessage}
        `;
    });

    return message;
}

let allPetNames = (): string[] => {
    let allPetNames: string[] = [];

    _pets.forEach(pet => {
        allPetNames.push(pet.name);
    });

    return allPetNames;
}

console.log(outputString());