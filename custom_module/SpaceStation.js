// Клас - станція
class SpaceStation {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;

    if (typeof name === 'undefined') {
      this.name = 'Невідома станція';
    }
  }
}

// Знайти станцію на планеті
function findSpaceStation(name, capacity, planet) {
  for (let id = 0; id < planet.space_stations_list.length; id++) {
    const spaceStation = planet.space_stations_list[id];

    if (name === spaceStation.name && capacity === spaceStation.capacity) {
      return spaceStation;
    }
  }

  return -1;
}

// Додавання нової станції
function addSpaceStation(name, capacity, planet) {
  const spaceStation = new SpaceStation(name, capacity);
  planet.space_stations_list = [];
  planet.space_stations_list.push(spaceStation);

  return spaceStation;
}

// Видалення станції з планети
function removeSpaceStation(name, capacity, planet) {
  const spaceStation = findSpaceStation(name, capacity, planet);

  if (spaceStation === -1) {
    return -1;
  }

  const id = planet.space_stations_list.indexOf(spaceStation);
  planet.space_stations_list.splice(id, 1);

  return 1;
}

// Редагувати станцію на планеті
function editSpaceStation(name, capacity, planet, newName, newCapacity) {
  const spaceStation = findSpaceStation(name, capacity, planet);

  if (spaceStation === -1) {
    return -1;
  }

  const id = planet.space_stations_list.indexOf(planet);
  planet.space_stations_list[id].name = newName;
  planet.space_stations_list[id].capacity = newCapacity;

  return 1;
}

// Отримати список станцій на конкретній планеті
function getSpaceStationsList(planet) {
  console.log('\n' + `Список усіх станцій на планеті ${planet.name}:`);

  for (let id = 0; id < planet.space_stations_list.length; id++) {
    const spaceStation = planet.space_stations_list[id];
    console.log(
      `\tНазва станції: ${spaceStation.name}, місткість: ${spaceStation.capacity}`
    );
  }

  console.log();

  return planet.space_stations_list;
}

// Експортуємо функції
exports.findSpaceStation = findSpaceStation;
exports.addSpaceStation = addSpaceStation;
exports.removeSpaceStation = removeSpaceStation;
exports.editSpaceStation = editSpaceStation;
exports.getSpaceStationsList = getSpaceStationsList;
