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
    fn();
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** 2;
    return array;
  }
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
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result + initial;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(a) {
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  //Не могу понять как обратиться к свойству//
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (a[i] === letters[j]) {
        result += upperLetters[j];
      } else if (a[i] === upperLetters[j]) {
        result += upperLetters[j];
      }
    }
  }
  return result;
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
