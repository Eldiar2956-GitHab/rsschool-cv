let name='Eldiar';
let age=17;
let isStudent=true;
//Exzample№2
let num=123
console.log(typeof num)
let strNum=String(num)
console.log(typeof strNum)
num=Boolean(num)
console.log(typeof num)
num=null
console.log(typeof null)
num=undefined
console.log(typeof num)
//Exzample№3
let sum="42"
let sumNum=Number(sum)
num=123
let strnum=String(num)
console.log(Boolean(0))
console.log(Boolean('Hello'))
//Exzample№4
let a=10,b=3
sum=a+b
del=a/b
umg=a*b
vernan=a**b
ost=a%b
prov=a>=b
//Exzample№5
const ageElement=18;
if(ageElement<18){
    console.log('imperfect summer entry is prohibited')
}else{
    console.log('access denied')
}
//Exzample№6
const login="admin";
const password=1234

const baseLog=prompt('Enter your login');
const basePas=+prompt('Enter your password')

if(login===baseLog && password===basePas){
    console.log('Entry allowed')
}else if(login!==baseLog && password===basePas){
    console.log('login problem')
}else if(password!==baseLog && login===baseLog){
    console.log('password problem')
}else if(password!==basePas && login!==baseLog){
    console.log('You entered both values ​​incorrectly.')
}else{
    console.log('network error')
}
//Exzample№7
// №1
for(let i=1; i<=10; i++){
    console.log(i)
}
//№2
for(let i=2; i<=20; i+=2){
    console.log(i)
}
//Exzample№8
function SumElement(a,b){
    return a+b
}
console.log(SumElement(6,3))

//Exzample№9
//Commit
const table=+prompt('Enter a number for the table')
//I ask the user to enter a number in order to output the multiplication table.
for(let i=1; i<=10; i++){
    //Here I set the default declaration for
    console.log(`${i}*${table}=${i*table}`)
    //Here I use vernier quotes to display this beautifully in a table.
}

