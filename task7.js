const mod = require('./custom_module');

// Додавання планет
/* eslint-disable no-unused-vars */
const p1 = mod.addPlanet('Planet_1', 'Test address 1');
const p2 = mod.addPlanet('Planet_2', 'Test address 2');
const p3 = mod.addPlanet('Planet_3', 'Test address 3');

// Список планет
mod.getPlanetsList();

// Видалення планет
console.log('Видалення планети: Planet_2');
mod.removePlanet('Planet_2', 'Test address 2');

// Список планет
mod.getPlanetsList();

// Зміна планет
console.log('Зміна планети: Planet_3');
mod.editPlanet('Planet_3', 'Test address 3', 'New planet name', 'New address');

// Список планет
mod.getPlanetsList();

// Пошук планет
const plan1 = mod.findPlanet('Planet_1', 'Test address 1');
console.log(
  `Пошук планети Planet_1: ${plan1 !== -1 ? 'знайдено' : 'не знайдено'}`
);
const plan2 = mod.findPlanet('Planet_7', 'Test address 7');
console.log(
  `Пошук планети Planet_7: ${plan2 !== -1 ? 'знайдено' : 'не знайдено'}`
);

// Додавання станцій
mod.addSpaceStation('Станція_1', 19, plan1);
mod.addSpaceStation('Станція_2', 43, plan1);
mod.addSpaceStation('Станція_3', 87, plan1);

mod.getSpaceStationsList(plan1);

// Видалення станції
console.log('Видалення станцій: Станція_2');
mod.removeSpaceStation('Станція_2', 43, plan1);

mod.getSpaceStationsList(plan1);

// Редагування станції
console.log('Редагування станцій: Станція_3');
/* mod.editSpaceStation('Станція_3', 87, plan1, 'Станція_003', 37); */

mod.getSpaceStationsList(plan1);

// Пошук станції
const doc1 = mod.findSpaceStation('Станція_1', 19, plan1);
console.log(
  `Пошук станції - Станція_1 : ${plan1 !== -1 ? 'знайдено' : 'не знайдено'}`
);
const doc2 = mod.findSpaceStation('Станція_5', 24, plan1);
console.log(
  `Пошук станції - Станція_5 : ${
    plan2 !== -1 ? 'знайдено' : 'не знайдено'
  }`
);

// Додавання вантажу
mod.addCargo('Вантаж_01', 13, plan1);
mod.addCargo('Вантаж_02', 29, plan1);
mod.addCargo('Вантаж_03', 103, plan1);

mod.getCargosList(plan1);

// Видаляння вантажу
console.log('Видалення вантажу: Вантаж_01');
mod.removeCargo('Вантаж_01', 13, plan1);

mod.getCargosList(plan1);

// Редагування вантажу
console.log('Редагування вантажу: Вантаж_03');
mod.editCargo('Вантаж_03', 103, plan1, 'Вантаж_08', 54);

mod.getCargosList(plan1);

// Пошук вантажів
const pat1 = mod.findCargo('Вантаж_02', 29, plan1);
console.log(
  `Пошук вантажу - Вантаж_02 : ${plan1 !== -1 ? 'знайдено' : 'не знайдено'}`
);
const pat2 = mod.findCargo('Вантаж_11', 32, plan1);
console.log(
  `Пошук вантажу - Вантаж_11 : ${plan2 !== -1 ? 'знайдено' : 'не знайдено'}`
);
