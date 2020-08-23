"use strict";


const user = {
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 29,
    externalData: {
        eyes: 'Blue',
        hair: 'black',
        weiht: 78,
        growth: 180
    },
    // Создание метода внутри объекта
    makeTest: function() {
        console.log('Test');
    }
};
user.makeTest();// вызов метода

// Встроенные методы. Перебор объекта путем встроенного метода
console.log(Object.keys(user).length);


//Перебор объекта путем цикла
let counter = 0;
for (let key in user) {
    if (typeof(user[key]) == 'object') {
        for (let i in user[key]) {
            console.log(`Свойтсво ${i} имеет значение ${user[key][i]}`);
        }
    } 
    else {
        console.log(`Свойтсво ${key} имеет значение ${user[key]}`);
            counter++;
        }
}
