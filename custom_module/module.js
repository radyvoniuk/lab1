// Підключаємо необхідні файли
const planet = require('./Planet');
const spaceStation = require('./SpaceStation');
const cargo = require('./Cargo');

// Доступні операції з лікарнями
exports.findPlanet = planet.findPlanet;
exports.addPlanet = planet.addPlanet;
exports.removePlanet = planet.removePlanet;
exports.editPlanet = planet.editPlanet;
exports.getPlanetsList = planet.getPlanetsList;

// Доступні операції з лікарями
exports.findSpaceStation = spaceStation.findSpaceStation;
exports.addSpaceStation = spaceStation.addSpaceStation;
exports.removeSpaceStation = spaceStation.removeSpaceStation;
exports.editSpaceStation = spaceStation.editSpaceStation;
exports.getSpaceStationsList = spaceStation.getSpaceStationsList;

// Доступні операції з пацієнтами
exports.findCargo = cargo.findCargo;
exports.addCargo = cargo.addCargo;
exports.removeCargo = cargo.removeCargo;
exports.editCargo = cargo.editCargo;
exports.getCargosList = cargo.getCargosList;
