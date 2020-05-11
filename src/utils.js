// Фунция получения рандомног числа, от 1 до 100

const GetRandInt = (start, end) => {
  const min = start;
  const max = end;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default GetRandInt;
