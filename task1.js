function generateAndDisplayRandomHexNumber() {
  // Генеруємо випадкове число в діапазоні від 0 до 16777215 (0xFFFFFF в десятковій системі)
  const randomDecimalNumber = Math.floor(Math.random() * 16777216);

  // Перетворюємо випадкове десяткове число у шістнадцяткову форму
  const randomHexNumber = randomDecimalNumber.toString(16);

  // Виводимо випадкове шістнадцяткове число в консоль
  console.log(randomHexNumber);
}
console.log(generateAndDisplayRandomHexNumber());
