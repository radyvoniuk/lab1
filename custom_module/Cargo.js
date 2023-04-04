// Клас - вантаж
class Cargo {
  // Конструктор класу
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;

    if (typeof name === 'undefined') {
      this.name = 'Невідомий ванатж';
    }
  }
}

// Знайти вантаж на плпанеті
function findCargo(name, weight, planet) {
  for (let id = 0; id < planet.cargos_list.length; id++) {
    const cargo = planet.cargos_list[id];

    if (name === cargo.name && weight === cargo.weight) {
      return cargo;
    }
  }

  return -1;
}

// Додавання нового вантажу
function addCargo(name, weight, planet) {
  const cargo = new Cargo(name, weight);
  planet.cargos_list.push(cargo);

  return cargo;
}

// Видалення вантажу з планети
function removeCargo(name, weight, planet) {
  const cargo = findCargo(name, weight, planet);

  if (cargo === -1) {
    return -1;
  }

  const id = planet.cargos_list.indexOf(cargo);
  planet.cargos_list.splice(id, 1);

  return 1;
}

// Редагувати вантаж на планеті
function editCargo(name, weight, planet, newName, newWeight) {
  const cargo = findCargo(name, weight, planet);

  if (cargo === -1) {
    return -1;
  }

  const id = planet.cargos_list.indexOf(cargo);

  planet.cargos_list[id].name = newName;
  planet.cargos_list[id].weight = newWeight;

  return 1;
}

// Отримати список вантажів на конкретній планеті
function getCargosList(planet) {
  console.log('\n' + `Список усіх вантажів на планеті ${planet.name}:`);

  for (let id = 0; id < planet.cargos_list.length; id++) {
    const cargo = planet.cargos_list[id];
    console.log(`\tНазва вантажу: ${cargo.name}, вага: ${cargo.weight}`);
  }

  console.log();

  return planet.cargos_list;
}

// Експортуємо функції
exports.findCargo = findCargo;
exports.addCargo = addCargo;
exports.removeCargo = removeCargo;
exports.editCargo = editCargo;
exports.getCargosList = getCargosList;
