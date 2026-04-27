function getRandomnums(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = getRandomnums;
