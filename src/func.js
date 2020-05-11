// Фунция получения рандомног числа, от 1 до 100

export const GetRandInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Получение случайного математического оператора

export const GetRandOperator = () => {
  const arrayOperator = ['+', '-', '*'];
  const randOperator = Math.floor(Math.random() * arrayOperator.length);
  return arrayOperator[randOperator];
};

// Вычисление арифметического выражения, в зависимости от пришедшего оператора

export const CalculatedMathResult = (oper1, operator, oper2) => {
  switch (operator) {
    case '+':
      return oper1 + oper2;
    case '-':
      return oper1 - oper2;
    case '*':
      return oper1 * oper2;
    default:
      return 'some problem';
  }
};

// Вычисление НОД

export const calculateGcd = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

// Получение случайного индекса, от 0 до 9

export const GetRandIndex = () => {
  const min = 0;
  const max = 9;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Формирование случайно арифметической прогрессии

export const progress = () => {
  const progStep = GetRandInt();
  let firstElement = GetRandInt();
  let i = 1;
  const resultProgress = [];
  while (i <= 10) {
    resultProgress.push(firstElement);
    firstElement += progStep;
    i += 1;
  }
  return resultProgress;
};

// Вывод прогрессии со скрытым элементом

export const hideIndexProgress = (arr) => {
  const progressArray = arr;
  const hideIndex = GetRandIndex();
  const correctAnswer = progressArray[hideIndex];
  progressArray[hideIndex] = '..';
  const resultStringProgress = progressArray.join(' ');
  return [correctAnswer, resultStringProgress];
};

// Проверка, простое ли число

export const numberIsSimple = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 3; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Проверка числа на четность

export const numberIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
