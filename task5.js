function daysPassedInYear() {
  const now = new Date(); // поточна дата і час
  const startOfYear = new Date(now.getFullYear(), 0, 1); // початок року
  const differenceInMs = now.getTime() - startOfYear.getTime(); // різниця у мілісекундах
  const msInDay = 1000 * 60 * 60 * 24; // кількість мілісекунд в одному дні
  const daysPassed = Math.floor(differenceInMs / msInDay); // кількість днів, які пройшли
  return daysPassed;
}

console.log(daysPassedInYear());
