let x = 5;
let y = 45;

document.getElementById('add').innerHTML="The sum of x + y is: " + (x+y);
document.getElementById('sub').innerHTML="The sub of x - y is: " + (x-y);
document.getElementById('mul').innerHTML="The mul of x * y is: " + (x*y);
document.getElementById('div').innerHTML="The div of x / y is: " + (x/y);

let f = 'Mafid ';
let l = 'Bin Mizan';

document.getElementById('con').innerHTML="The concatenation of string is: " + (f+l);
let z = x > y;
document.getElementById('ope').innerHTML="The number of x is greater than y? " + z;

const student = {
    name : 'Mafid',
    age : 23,
    gender : 'male'
};
document.getElementById('obj').innerHTML=student.name + " is " + student.age + " years old.";

function sum(x,y){
    return x + y;
}
let res = sum(4,7);
document.getElementById('fun').innerHTML="The function returns addition of two values: " + res;
