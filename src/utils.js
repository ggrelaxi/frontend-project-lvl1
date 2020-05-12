// Фунция получения рандомног числа, от 1 до 100
const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default getRandInt;
