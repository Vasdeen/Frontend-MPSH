function addSum (a, b) {
    return a + b;
}

function returnBiggest (a, b, c) {
return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

function findLongestString(stringArray) {
    stringLongest = stringArray[0];
    for (string of stringArray) {
        if (stringLongest.length <= string.length) stringLongest = string; 
    }
    return stringLongest;
}

function arrayElementsSum (numArray) {
    elementsSum = 0;
    for (element of numArray) elementsSum +=element;
    return elementsSum;
}

function filterArrayBiggerThanTen (numArray2) {
    let numArrayFiltered = [];
    for (element of numArray2) if (element >= 10) numArrayFiltered.push(element);
    return numArrayFiltered;
}

function filterArrayYoungerThanFifty (objectsArray) {
    let objectsArrayFiltered = [];
    for (element of objectsArray) {if (element.age < 50) objectsArrayFiltered.push(element);}
    console.log(objectsArray.length);
    return objectsArrayFiltered;
}

function filterArrayYoungerThanFifty (objectsArray) {
    let objectsArrayFiltered = [];
    for (element of objectsArray) {if (element.age < 50) objectsArrayFiltered.push(element);}
    console.log(objectsArray.length);
    return objectsArrayFiltered;
}

function cloneObject (objectA) {
    objectB = {};
    for (let element in objectA) {
        objectB[element] = objectA[element];
    }
    return objectB;
}

function checkPalindrome (word) {
    isPalindrome = true;
    word = word.toLowerCase();
    console.log("Слово на проверке на палиндром - " + word)
    checkLength = Math.floor(word.length/2)
    for (i = 0; i < checkLength; i++) {
        if ( word[i] != (word[word.length-i-1])) isPalindrome = false;
    }
    return isPalindrome;
}

console.log("Сумма двух чисел");
console.log (addSum(2, 5));

console.log("Наибольшее из трёх чисел");
console.log(returnBiggest(2, 1, 6));

console.log("Самая длинная строка");
stringArray = ['Дело1', 'Функция', 'Палиндром','Остановка', 'Глаз'];
console.log(findLongestString(stringArray));

console.log("Сумма элементов массива");
var numArray = []; for (i = 0; i<100; i++) numArray.push(i);
console.log(numArray)
console.log(arrayElementsSum(numArray));

console.log("Массив без чисел меньше десяти");
var numArray2 = []; for (i = 0; i<10; i++) numArray2.push(Math.floor(Math.random() * 20));
console.log(numArray2);
console.log(filterArrayBiggerThanTen(numArray2));

console.log("Массив без людей старше 50");
var objectsArray =[{ name: "Bob", age: 50}, { name: "Jane", age: 64}, { name: "Jack", age: 25}]
console.log(objectsArray);
console.log(filterArrayYoungerThanFifty(objectsArray));

console.log("Клонировать объект")
objectA = { name: "Bob", age: 50, children: [ { name: "Marie", age: 16}, { name: "Jame", age: 12} ] }
objectB = cloneObject(objectA);
console.log(objectA === objectB)
console.log(objectB)
objectB.name = "Mary";
console.log(objectB);
console.log(objectA);

console.log("Является ли слово палиндромом?")
console.log(checkPalindrome("Дед"))
console.log(checkPalindrome("Наворован"))
console.log(checkPalindrome("Мадам"))
console.log(checkPalindrome("Артур"))
