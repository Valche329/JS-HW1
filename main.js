// ПЕРВОЕ ЗАДАНИЕ

// let age = +prompt('Введите свой возраст');
// if (age <= 18) {
//    alert ('Вы еще молоды, Вам нужно учиться');
// }else if (age <= 50) {
//     alert ('Вам нужно работать!');
// }else if (age <=59) {
//     alert ('Вам скоро на пенсию');
// }else if (age <=100) {
//     alert ('Вы пенсионер');
// }else if (age ==123) {
//     alert ('Вы побили мировой рекорд!');
// }else{
//     alert ('Что-то тут не так!');
// }

// ТРЕТЬЕ ЗАДАНИЕ

let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
let number3 = +prompt('Введите третье число');
if (number1 > number2 && number1 > number3) {
    alert(number1);
 }else if (number2 > number1 && number2 > number3) {
    alert(number2);
 }else if (number3 > number1 && number3 > number2) {
    alert(number3);
 }else if (number1 = number2 && number1 == number3) {
    alert('Одинаковые числа');
 }else{
   alert('ERROR')
 }