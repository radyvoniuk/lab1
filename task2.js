function insertString(originalString, stringToInsert, position) {
  // Отримуємо частину початкової стрічки до позиції вставки
  const stringBeforePosition = originalString.substring(0, position);

  // Отримуємо частину початкової стрічки після позиції вставки
  const stringAfterPosition = originalString.substring(position);

  // Складаємо результат разом з вставленою стрічкою
  const result = stringBeforePosition + stringToInsert + stringAfterPosition;

  // Повертаємо результат
  return result;
}

const originalString = 'Hello, world!';
const stringToInsert = 'beautiful ';
const position = 7;

const result = insertString(originalString, stringToInsert, position);

console.log(result);
