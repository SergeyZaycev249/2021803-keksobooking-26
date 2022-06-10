//Функция получения рандомного целого числа из диапазона
function getRandomNumber(min, max) {
  if (max <= min || min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
    return 'Нижняя граница должна быть меньше верхней границы, границы должны быть целыми числами и не должны быть отрицательными числами';
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);

}

//Функция получения рандомного числа из диапазона, с указанием числа знаков после запятой
function getRandomFractionalNumber(min, max, count) {
  if (max <= min || min < 0 || max < 0 || count < 0 || !Number.isInteger(count)) {
    return 'Нижняя граница должна быть меньше верхней, границы не должны быть отрицательными числами, количество знаков после запятой должно быть не отрицательным целым числом';
  }
  return (Number(((Math.random() * (max - min)) + min).toFixed(count)));

}
getRandomNumber(26, 26);
getRandomFractionalNumber(1, 8, 4);
