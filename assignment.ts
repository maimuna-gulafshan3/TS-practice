
class Shape{
    constructor(public radius : number, public width : number,public length : number){}
    showRadius(){}
    showArea(){}
}

class Circle extends Shape{
    showRadius(): number {
        return 3.14 * this.radius**2;
    }
}

class Rectangle extends Shape{
    showArea(): number {
        return this.width * this.length;
    }
}

let rect = new Rectangle(10,20,15);
let circ = new Circle(10,20,15);
let rectArea = rect.showArea()
let circArea = circ.showRadius()
console.log(rectArea)
console.log(circArea)


//Assignment

// function rev<T>(arr:T[]):T[]{
//      return arr.reverse();
// }

// console.log(rev<number>([1,2,3,4]));
// console.log(rev<string>(['a','apple']));



// function disp(input:string | number){
//     if(typeof input ==='string'){
//         return input.length;
//     }
//     else{
//         return input**2;
//     }
// }

// console.log(disp(12))
// console.log(disp('hello good'))



function disp(input:(string|number)[]):string|number{
        if(typeof input[0] ==='string'){
            return input.join('');
        }
        else if(typeof input[0] === 'number'){
        let sum:number =0;
       
        return input.reduce((cur,next)=>{
            return  (typeof cur === 'number' ? cur : 0) + (typeof next === 'number' ? next : 0)
         },0)
     }
     else{
         return 0
     }
 }
console.log(disp([1,2,3,4,5]))
console.log(disp(['hello','lara']))


    
// interface person {
//     name:string;
//     age:number;
// }
// interface worker {
//     job:string;
//     salary:number;
// }
//  type personAndWorker = person & worker ;

// let obj : personAndWorker ={
//     name:'maimuna',
//     age:22,
//     job:'manager',
//     salary:20000,
// }

// console.log(obj.name);
// console.log(obj.salary);
// console.log(obj.job);
// console.log(obj.age);


// type varb=string;

// function disp1(input:varb){
//  if(typeof input === 'string'){
//     return input.toUpperCase();
//  } 
//  else{
//     return input*2;
//  }

// }
// console.log(disp1('appple'));


// type varb2=string|number;

// function disp2(input:varb){
//  if(typeof input === 'string'){
//     return input.toUpperCase();
//  } 
//  else{
//     return input*2;
//  }

// }
// console.log(disp2('appple'));

type Person1 = {
    Name: string;
    Age: number;
  };
  
  type Worker1 = {
    JobTitle: string;
    Salary: number;
  };
  
  // Function that takes two objects as parameters
  function processPersonAndWorker2(person: Person1, worker: Worker1): void {
    console.log(Name: ${person.name});
    console.log(Age: ${person.age});
    console.log(JobTitle: ${worker.jobTitle});
    console.log(Salary: ${worker.salary});
  }
  
  // Example usage
  const fatima: Person1 = { name: 'Johnny', age: 33 };
  const engineer: Worker1 = { jobTitle: 'developer', salary: 50000 };
  
  processPersonAndWorker2(Maimuna, developer);