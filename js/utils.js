const getRandomInt = function (min, max) {
  if (min >= 0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  throw new Error('Переданный диапазон чисел введен некорректно');
};

const getRandomFloat = function (min, max, accuracy) {
  if (min >= 0 && min < max) {
    const floatNumber = Math.random() * (max - min) + min;
    return Number(floatNumber.toFixed(accuracy));
  }
  throw new Error('Переданный диапазон чисел введен некорректно');
};

const getShuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

export { getRandomInt, getRandomFloat, getShuffleArray };
