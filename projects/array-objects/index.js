/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = fn(array[i], i, array);
    myArray.push(result);
  }
  return myArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  let result = 0;
  if (typeof initial === 'undefined') {
    result = array[0];
    for (let i = 1; i < array.length; i++) {
      result = fn(result, array[i]);
    }
    return result;
  } else if (typeof initial !== 'undefined') {
    // result = initial;
    for (let i = 0; i < array.length; i++) {
      result = fn(result, array[i], initial);
    }
    return result;
  }
  return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  const myArray = [];
  for (const key in obj) {
    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (key[i] === letters[j]) {
          result = upperLetters[j];
          myArray.push(result);
        } else if (key[i] === upperLetters[j]) {
          result = upperLetters[j];
          myArray.push(result);
        }
      }
    }
  }
  return myArray;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, createProxy };