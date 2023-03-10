/* №1 
Задача на повернення ініціалів для кожного імені з масиву, 
посортованих в алфавітному порядку:
*/

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// // тут ваш код ...
initials = userNames.sort();
console.log(initials);

initials = userNames.map((userName) => {
  const stringsInitials = userName.split(' ');
  console.log(userName); 
  console.log(stringsInitials);

  initials = stringsInitials.map(initial => initial.charAt(0));
  console.log(initials);

  const abbreviation = initials.join('. ');
  console.log(abbreviation);

  return abbreviation;
})

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// № 2 Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

// тут ваш код...
reverseMaxValue = currentMaxValue.toString();
console.log(reverseMaxValue);

reverseMaxValue = reverseMaxValue.split('');
console.log(reverseMaxValue);

reverseMaxValue.reverse();
console.log(reverseMaxValue);

reverseMaxValue = reverseMaxValue.join('');
console.log(reverseMaxValue);

reverseMaxValue = Number(reverseMaxValue);


console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


// № 3 Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// тут ваш код...
productOfArray = resultsArray;
productOfArray = productOfArray.flat(2);
console.log(productOfArray);

productOfArray = productOfArray.reduce((acc, cur) => {
    return acc + cur;
},14);


console.log(productOfArray); // 24
