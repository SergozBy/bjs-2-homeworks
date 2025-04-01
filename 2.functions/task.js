function getArrayParams(...arr) {
  // Объявление переменных
  let min = Infinity;
  let max = - Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Поиск максимального значения
    if (arr[i] > max) {
      max = arr[i];
    }

    // Поиск минимального значения
    if (arr[i] < min) {
      min = arr[i];
    }

    // Нахождение суммы
    sum += arr[i];
  }

  // Нахождение среднего значения
  const avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log(arr, 'i', i, arr[i]);
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElemnt = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElemnt += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;
  return +(sumEvenElemnt / countEvenElement).toFixed(2);

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    console.log('result:', result);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

}