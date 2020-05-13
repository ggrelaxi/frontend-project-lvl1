// Фунция получения рандомног числа, от 1 до 100
// eslint-disable-next-line import/prefer-default-export
export const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
