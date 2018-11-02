// 引入模块化的js代码
const person = require('./person');

// 引入css样式
require('./style.css');



let str = 'hello webpack';

let func = (a, b)=>{
    let str = 'hello webpack';
    return a+b;
}


console.log(`name: ${person.name}`);
console.log(`age: ${person.age}`);

document.querySelector('h1').innerHTML
= 'hello '+person.age;

