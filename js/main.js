const getRandomInt = function(min, max) {
  if (min >=0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return ('Переданный диапазон чисел введен некорректно');
};

getRandomInt(20,30);

const getRandomFloat = function(min, max,accuracy) {
  if (min >=0 && min < max) {
    const floatNumber = Math.random() *  (max - min) + min;
    return +floatNumber.toFixed(accuracy);
  }
  return ('Переданный диапазон чисел введен некорректно');
};

getRandomFloat(20.5, 35.5, 6);
