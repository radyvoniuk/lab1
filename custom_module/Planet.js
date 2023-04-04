// Клас - планета
class Planet {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.space_stations_list = [];
    this.cargos_list = [];

    if (typeof name === 'undefined') {
      this.name = 'Невідома планета';
    }
    if (typeof address === 'undefined') {
      this.address = 'Невідомий адрес';
    }
  }
}

const globalPlanetsList = new Array();

// Знайти планету в колекції
function findPlanet(name, address) {
  for (const planet of globalPlanetsList) {
    if (name === planet.name && address === planet.address) {
      return planet;
    }
  }

  return -1;
}

// Додавання нової планети
function addPlanet(name, address) {
  const planet = new Planet(name, address);
  globalPlanetsList.push(planet);

  return planet;
}

// Видалити планету з колекції
function removePlanet(name, address) {
  for (let id = 0; id < globalPlanetsList.length; id++) {
    const planet = globalPlanetsList[id];

    if (planet.name === name && planet.address === address) {
globalPlanetsList.splice(id, 1);
      return 1;
    }
  }

  return -1;
}

// Редагувати планету в колекції
function editPlanet(name, address, newName, newAddress) {
  for (let id = 0; id < globalPlanetsList.length; id++) {
    const planet = globalPlanetsList[id];

    if (planet.name === name && planet.address === address) {
        globalPlanetsList[id].name = newName;
        globalPlanetsList[id].address = newAddress;
      return 1;
    }
  }

  return -1;
}

// Отримати список планет
function getPlanetsList() {
  console.log('\n' + 'Список усіх планет:');

  for (let id = 0; id < globalPlanetsList.length; id++) {
    const plan = globalPlanetsList[id];
    console.log(`Назва планети: ${plan.name}, адреса планети: ${plan.address}`);
  }

  console.log();

  return globalPlanetsList;
}

// Експортуємо функції
exports.findPlanet = findPlanet;
exports.addPlanet = addPlanet;
exports.removePlanet = removePlanet;
exports.editPlanet = editPlanet;
exports.getPlanetsList = getPlanetsList;
