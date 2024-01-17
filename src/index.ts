// console.log('hello world');
// let a:number=10;
// let age : number = 20;
// if (age<50)
// age+=10;
// console.log(age);
// let level;
// level = 1;
// level='a';
// console.log(level);
// let numbers = [1,2,3]

// let user = [number, string ] = [1, 'maim'];
// console.log(user[0])
// user.push(true);
// console.log(user);

// const small = 1;
// const medium = 2;
// const large = 3;
// console.log(small);

// const enum size {Small = 10, Medium, Large}
// console.log(size.Small);

//  const enum size {Small = 10, Medium, Large}
// let mySize : size = size.Medium;
// console.log(mySize);
// check the js file code uncommenting this

//  const enum size {Small = 10, Medium, Large}
// let mySize : size = size.Medium;
// console.log(mySize);
// the ouput will be 11 because small is declared as 10 so trailing variables will be continuing the values.

//functions

// function calci(income: number = 30) : number {
//     if((income || 55 )<50)
//     return income*2;
// else 
// return income*4;
// }
// console.log(calci(0));

// let emp{id: number, name : string} :{ id:1, name:'maim', true};
// console.log(emp);

// type product = {
//     name: string;
//     price : number;
//     exp : number;
// }

// const product1 : product ={
//     name : 'oil',
//     price : 100,
//     exp : 20,
// }


// const product2 : product ={
//     name : 'oil',
//     price : 100,
//     exp : 20,
// }

// console.log(product2.name);

// type supreme = {
//     courtName1: string;
//     case1: number;
// }
// type supreme1 = {
//     courtName3: string;
//     case3: number;
// }

// //using intersection for 2 or more annotations
// type high = supreme & supreme1 & {
//     courtName2: string;
//     case2: number;
// }

// const local: high = {
//     courtName1 : "baba",
//     case1 : 232,
//     courtName2 : 'abc',
//     case2 : 10,
    //when an object is defined by the annonations such as high in this example then 
    // then we just hve to give values given in the annotated type we cant give our own . for using our own we
    //have to try.........
// }

//Generics

// function sample< S extends string, T extends number>(para1 : S , para2 : T) : [S, T]{
// return [para1, para2];
// }

// console.log(sample('sample',121))

// type one1 ={
//     name : string;
//     id : number;
// }

// const two:Partial<one1>={};
// let news =two.name='maim';

// console.log(news)

// function fun(name:string) Partial<one1>{
// it doesnot work becaue the defined if you want to make function's parameters optional the make them using optional chaining to
//achieve the same task and that partial is made to use especcially with objects and interfaces not functions
// }

// the below given code says thst using record we can set the type of key and value the LHS and RHS should  obey the given types
// const recordExample : Record<string, number> ={
//     id : 321,
//     roll_no : 123,
// }


//omit

// it removes the keys where we are not supposed to define
// const trial: Omit<one1,name> ={
//     id: 123
// }


// function trial1():never{
//     while(true){
//         //read the msg
//     }
// }  

// trial1();
// console.log('hello')


//Classes 
// class Accounte {

    // id: number;
    // name: string;
    // balance: number;

    //parameter properties
    // constructor(public readonly id: number, public name: string,public balance: number) {
        // this.id = id;
        // this.name = name;
        // this.balance = balance;
    // }

// deposit(amount : number): void {
//     if(amount<= 0) {
//     throw new Error('Invalid amount')
// }
// else {
//     this.balance += amount;
// }
// }
// }

// let account = new Accounte(1,'maimuna',20);
// account.deposit(100);
// console.log(account)

//index signatures
// class SeatAss{
   
//     [seatNumber : string] : string;
//     constructor(){}
// }

// let seats = new SeatAss();
// seats.A1='maimuna';
// seats.A2='gulafshan';

//Static members

// class Rides{
//    static activerides: number = 0;
// constructor(){
//      Rides.activerides = Rides.activerides
// }
// start(){ Rides.activerides++};
// }

// let ride1 = new Rides();
// ride1.start();
// let ride2 = new Rides();
// ride2.start();
// let ride3 = new Rides();
// ride3.start();
// ride3.start();

// console.log(Rides.activerides);
//now the count is 3 but without static the value is differenet for each thread
//statis keeps a single instance in memory irrespective of number of objects created

//using get.
class Person{
    constructor(public firstName : string, public lastName : string){}

        get fullName(){
            return this.firstName + ' ' + this.lastName;
        }

        walk(){
            console.log("perwon is walking")
        }
    }

const person = new Person('John', 'Doe');
console.log(person.fullName);

class student extends Person{
    constructor(public studentId : number,firstName:string,lastName:string){
        super(firstName,lastName)
    }

    takeTest(){
        console.log("taking test");
    }
}

let stud = new student(1,'maim','gulafshn');
