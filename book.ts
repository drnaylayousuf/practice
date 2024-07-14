// let a = 5;

// import inquirer from "inquirer"
// import { log } from "util"


// import inquirer from "inquirer";

// export default a;



//ruff work of modules

// export default function helloworld(){
//     console.log("Hello, world!")
// }


 //********** */




// export var pi = 3.14;

// export let squareTwo = 1.41;

// export const phi =  1.61;


// export function absolute (num: number) {
//     if (num > 4 ){ 

//         return num * 2;
//        return num;
//     }
//        else{
//         return "biggest number";
//        }
// }

//////////////////////////////

// export let name : string = "nick";

// export default  function sizeofshirt(size:number) {

//     if (size === 0 ) {
//         return "fit person";

//     }
//     else {
//         return " oversized";
//     }
// }

///////////////////////////


// export  let dress = {
//     color: "black",
//     occation: "party",
//     location:"home",
// }


// export let  fruit = "mango";


//////////////////////////////////

/*import chalk from "chalk";
import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        type: "input",
         name:"name",
         message: "what is your name?"


    }
])
console.log( chalk.red("what is your name " + answer.name));*/



// let a = 3;
// let b = 5;

// let c =  ++a + b-- + --b + a++ + --a + ++b - a-- - --a;

// console.log(c);


// let result =  3+ 4 * 5;
// console.log(result);


// let layer: number = 5;

// let power : number =  layer ** 3;

// console.log(power);

////////////////////////////////////////


// import inquirer from "inquirer";

//  const input1 = await inquirer.prompt({
    
//      name: "num1",
//      type:  "number",
//     message: "kindly enter your first no:"
//  });


// const input2 = await inquirer.prompt({

//     name: "num2",
//     type: "number",
//     message: "kindly enter your second no:"
// });

// let total : number = input1.num1 + input2.num2

// console.log(total);
// /////////////////////////////////


// import inquirer from "inquirer";

// const answer = await inquirer.prompt([
// {
//     type: "input",
//     name: "name",
//     message: "enter is your name ?"
// },

// {
//     type: "number",
//     name: "age",
//     message: " enter your age ?"
// },

// {
//      type: "list",
//      name: "gender",
//      message:  "enter your gender ?",
//      choices: ["male", "female","prefer not to say"]
// }

// ]);

// console.log("what is your name " + answer.name + ", what is your age " + answer.age + ", what is your gender " + answer.gender );

////////////////////////////////////////



// let weightkg = 70;

// let heightmeter = 1.75;


// let bmi = weightkg / (heightmeter * heightmeter)

// console.log(`your bmi is ${bmi}`);

//////////////////////////////////////////

// subtract inquirer

// import inquirer from "inquirer";

// const answer1 = await inquirer.prompt({

//     type : "number",
//     name: "number1",
//     message: "enter your first number to ? "
// })



// const  answer2 = await inquirer.prompt({

//      type: "number",
//      name: "number2",
//      message: "enter your second number to ?"
// })

//  let subtractnumber: number = answer1.number1 - answer2.number2

// console.log("your subtract answer is " + subtractnumber);

//    ///////////////////////////////

// multiple bu inquirer

// import inquirer from "inquirer";

// const  answer3 = await inquirer.prompt({

//     type:"number",
//     name: "multiple1",
//     message: "enter your first number ? "

// })

// const answer4 = await inquirer.prompt({

//     type: "number",
//     name: "multiple2",
//     message: "enter your second number ?"


// })

// let multipletotal : number = answer3.multiple1 * answer4.multiple2;


// console.log("your multiple number answer is " +  multipletotal);


///////////////////////////////////////////////////
 // division inquire 

// import inquirer from "inquirer";

// const answer5 = await inquirer.prompt({

//          type: "number",
//          name: "division1",
//          message: "Enter your 1 number ? "

// });


// const answer6 = await inquirer.prompt({
  
//     type: "number",
//     name: "division2",
//     message: "Enter your 2 number ? "


// });


// let divisiontotal = answer5.division1 /  answer6.division2;

// console.log("your division number is " + divisiontotal);


/////////////////////////////////
//modulus inquirer 

// import inquirer from "inquirer";

// const answer1 = await inquirer.prompt({

//     type: "number",
//     name: "modulus1",
//     message: "Enter your 1st number ? "
// });

// const answer2 = await inquirer.prompt({
     
//     type: "number",
//     name: "modulus2",
//     message: "Enter your 2nd number ? "
// });

// let modulustotal : number = answer1.modulus1 % answer2.modulus2;


// console.log("your modulus number " +  modulustotal);

///////////////////////////////

//exponentiation inquirer


// import inquirer from "inquirer";

// const answer1 = await inquirer.prompt({

//     type: "number",
//     name: "exponent1",
//     message: "Enter your 1st number ? "
// });

// const answer2 = await inquirer.prompt({

//     type: "number",
//     name: "exponent2",
//     message: " Enter your 2nd number ? "

// });


// let totalexponent : number = answer1.exponent1 ** answer2.exponent2;

// console.log("your exponentiation number is " + totalexponent);

/////////////////////////////////////////////

//bmi inqurier 

// import inquirer from "inquirer";

// let weightInkg = 65;

// let heightInMeters = 1.75;

// let bmi = weightInkg / (heightInMeters * heightInMeters)

// console.log(`your BMI IS  ${bmi}`);
 

///////////////////////////////////////////

//bmi inqurier  calculator 


// import inquirer from "inquirer";

// const answer1 = await inquirer.prompt({
    
       
//     type: "number",
//     name: "weightInkg",
//     message: "Enter your weight in kg ? "

// });

// const answer2 = await inquirer.prompt({
   
//       type: "number",
//       name: "heightInMeters",
//        message: "Enter your height in Meters ? "


// })
//  let bmi :number = answer1.weightInkg / (answer2.heightInMeters * answer2.heightInMeters);

//  console.log(`Your BMI is ${bmi}`);
 
/////////////////////////////////////////////////

//assignment operator( = )

/*let a = 10;

a += 10;

console.log(a);

let strings = "abcd";

strings += "efgh";

console.log(strings);*/

//////////////////////////////////

//comparison operators


/*let a = 5;

let b = 2;

let isEqual = (a == b);
console.log(isEqual);

let isNotEqual = ( a != b);
console.log(isNotEqual);

let isGreaterThan = (a > b);
console.log(isGreaterThan);

let isLessThan = (a < b);
console.log(isLessThan);*/

/////////////////////////////////
//logical operators


/*let a = 5;

let b = 2;


let logialAnd  = (a > 0) &&  (b > 0);
console.log(logialAnd);

let logialOr  = (a < 0) ||  (b > 0);
console.log(logialAnd);

let logialNot  = !(a > 0);
console.log(logialNot);*/

/////////////////////////////////////

//logic statements
// if and if else statements

// let count =3;

// count = count + 1;
// count;

/*count += 1;
console.log(count);*/





/*let hungry = false;
let snack = hungry ? "apple" : " water";
console.log(snack);*/




//  a = 5 ;

//  b= 2
//          7       0         1
//  c = 6 + 6 + 1 + 1 +  7 +  0 + 1


// class home work in slide 121
/*
let a:number = 5;  // a = 7
let b:number =2;   // b = 1 , b = 0 , b = 1
let c:number;
//   6 +   6  +   1 + 1   +  7 + 0  + 1 
c = ++a + a++ + --b + b-- + a + b++ + b;  // 22

console.log(c);*/


/*********************************************** */

/*let a = 2;

let b = 5;
                                    
let c= (++a) + (--b) + (--a) + (b++);

console.log(c);// output 13*/


//******************************* */

/*let a = 5;
           
let b = (a--) * (++a) + (a++) * (--a);
console.log(b);*/

//******************* */

/*let a = 10;

let b = 2;
    
        
let c = (a++) / (--b) * (--a) + (b++);

console.log(c);*/

//************** */



/*let a = 3;

let b = 6;     
    //    3  +   5 + 5    + 5 +  5  +   7 + 7 + 6      
let c =  a++ + --b + b++ + ++a  + a++ + ++a  + a + b; // 43

console.log(c);*/

///*********************************************************** */

// import inquirer from "inquirer";

// let todos = []

// let condition = true;


// while (condition)
// {
//     let todosQuestion = await inquirer.prompt([
//         {
//             name: "firstquestion",
//             type: "input",
//             message: "what u like to add in  todos ?,"
//         },

//         {
//             name: "secondquestion",
//             type: "confirm",
//             message: "would you like to add more in your todos?,",
//              default: "true"

             
//         }
     
//     ]);

// todos.push(todosQuestion.firstquestion);
// console.log(todos);
// condition = todosQuestion.secondquestion

// };


///////////////////////////////////////////////////////


///////////////////////
// import inquirer from "inquirer";

// let todos: string[] = [];

// let condition = true;

// while (condition) {
//     let todosQuestions = await inquirer.prompt([
//         {
//             name: "chooseone",
//             type: "list",
//             message: "Select one of the options:",
//             choices: ["addto", "delete", "update", "read list", "end"],
//         }
//     ]);

//     if (todosQuestions.chooseone === "addto") {
//         let addtoTodo = await inquirer.prompt([
//             {
//                 name: "adding",
//                 type: "input",
//                 message: "What do you want to add to your todo list?",
//             }
//         ]);

//         todos.push(addtoTodo.adding);
//         console.log(todos);
//     } else if (todosQuestions.chooseone === "delete") {
//         let deletingTask = await inquirer.prompt([
//             {
//                 name: "deleting",
//                 type: "input",
//                 message: "Which task do you want to delete?"
//             }
//         ]);

//         const valueToDelete = deletingTask.deleting;
//         const indexToDelete = todos.indexOf(valueToDelete);

//         if (indexToDelete >= 0) {
//             todos.splice(indexToDelete, 1);
//             console.log(`Task deleted successfully.`);
//         } else {
//             console.log(`Task not found in the list.`);
//         }

//         console.log(todos);
//     } else if (todosQuestions.chooseone === "update") {
//         let updatingTask = await inquirer.prompt([
//             {
//                 name: "oldTask",
//                 type: "input",
//                 message: "Which task do you want to update?"
//             },
//             {
//                 name: "newTask",
//                 type: "input",
//                 message: "Enter the updated task:"
//             }
//         ]);

//         const indexToUpdate = todos.indexOf(updatingTask.oldTask);
//         if (indexToUpdate >= 0) {
//             todos[indexToUpdate] = updatingTask.newTask;
//             console.log(`Task updated successfully.`);
//         } else {
//             console.log(`Task not found in the list.`);
//         }

//         console.log(todos);
//     } else if (todosQuestions.chooseone === "read list") {
//         console.log("Todo List:");
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i + 1}. ${todos[i]}`);
//         }
//     }


//     else (todosQuestions.chooseone === "end")
//  {
//     console.log(`final list  ${todos} `);
    
// }


// };



//////////////////////////////
///////////////////rock paper scissor game

// let player1: string = "rock"

// let  player2: string = "scissors"

// if(player1 === player2) {

//   console.log(`its a tie!`);
  
// }
// else if ((player1=== "rock" && player2 === "scissors") || 
// (player1 === "scissors" && player2 === "paper") ||
// (player1 === "paper" && player2 === "rock"))  {

//   console.log(`player 1 wins! `);
  
// }
// else{

//   console.log(`player 2 wins!`);
  
// }







/////////////// //////  object

// let people = {
//     name: "nayla",
// }

// console.log(people.name);

                //////////////////////


// let people : {name: string} = {
//     name: "nayla",
// }
// console.log(people.name);

              ///////////////////////


  /*let people: { name: string; age: number; address: string;} = {

    name: "nayla",
    age:  22,
    address:  "abc 123 naw"
  };            


console.log(people.address);

//modifying the object properties

people.age =18;
console.log(people.age);*/



          ////////////////////////

  //         type main = (my: number, your: number) => number;

  //  const  multiple : main = (my ,your) => my *  your;

  //  console.log(multiple(6 ,6));
   

              /////////////////////////////

// function half() {
//   let cooked = 1 + 5;
//   console.log(cooked);
  
// }

// half();

// function half() : number {
//   let cook = 5 * 2;
  
//   return cook;
  
// }
// let mycook : number = half()

// console.log(mycook);
/////////////////////////////
// function half(salt:number , butter: number, egg: number ) : number {

//   return egg + butter + salt;
// }

// let my : number = half(5, 5, 5)

// console.log(my);
/////////////////////

// function  add(a: number, b: number): number {

//   return a + b;
// } 
// let result = add(5 ,2)

// console.log(result);
////////////////////////


// function calculate(width: number, height: number): number {

//   return  width * height;
// }

// let result: number = calculate(5, 5)

// console.log(result);
/////////////////////

// function halfegg( egg: number = 1, butter: number = 1.5, salt: number = 2 ) : number {

//   return  egg + butter + salt;
// }

// let result: number = halfegg()

// console.log(result);

//////////////////////
///default parameter

// function halfegg(egg: number=1, butter: number = 1.5, salt: number = 2) : number {

//   return egg + butter + salt;
// }
// let result: number = halfegg(1, 1.5, 3)

// console.log(result);
//////////////////////////


// function halfegg(egg: number = 2, butter: number = 2, salt: number ) : number {

//   return egg + butter + salt;
// }

// let result: number = halfegg(2,2,4)

// console.log(result);
/////////////////////
 ///////////////rest parameter


// function halfegg(egg: number = 1, ...ingredient: number[]) {

//   console.log(egg,);
  
//   console.log(ingredient);
  
// }

// halfegg(1, 1.5, 2,5)

//////////////////
////////////////////// spread  operator


// function halfegg(egg: number = 1, ...ingredient: number[])  {

//   console.log(egg);

//   console.log(...ingredient);
  
// }

// halfegg(1, 1.5,2,5)

///////////////////
///call function twice
///  ///arrow function

//  let halfegg = ()  => 1+ 2+2;

//  let result: number = halfegg()

//  console.log(result);

/////////////////

// let  halffryegg = (egg: number, butter: number, salt: number): number  => (

//   egg + salt + butter
// )

// let result : number = halffryegg(2, 3, 2)

// console.log(result);

//////////////////////////////

         ///// function arrow with return

// let  halffryegg = ()  => {

//   return  2 + 2 + 5;
// }

// let result : number = halffryegg()

// console.log(result);
////////////////////////


// let halffryegg = (egg: number, butter: number) => {

//   return  egg + butter;
// }

// let result = halffryegg(3,3)

// console.log(result);

//////////////////////

// let halffryegg = () => {

//   let cooked = 2 + 2 + 4;

//   return cooked;
  
// }

// let result = halffryegg()

// console.log(result);
////////////////////////

// let halffryegg = (egg: number, butter: number, salt: number): number =>   {

// let cooked = egg + butter + salt;

// return cooked

// };

// let result : number = halffryegg(2,4,5)
// console.log(result);
/////////////////////////
    

   //////////////// variable scope

   ///////////////////global and local variable/////////////////

// let globalvar = "acccessible everywhere";

// function showexample()  {
   
//   let localvar = "accessible only inside this function";
//   console.log(globalvar);   // works
  
// }

// // console.log(localvar); // error localvar is not defined

//////////////////////////////

  ////////////////////////////anonymous///////////////////
            ////////////////function///////////////////

// let halffryegg = function () {
//   let cooked = 2 + 2 + 2;
//   console.log(cooked);
  
// }
// halffryegg()

///////////////////


///////immediately  invoked function  expression (iife)

// (function () {
//   console.log("runs immediately");
  
// }) ();

//////////////////////
               
//////////////////RECURSIVE FUNCTIONS
// function countdown(number: number) : void
//  {
//  if(number <= 0) {
//   console.log("done");
//   return;
  
//  }

//  console.log(number);
//   countdown(number - 1);
//  }
//  countdown(5)
////////////////////////

// function outerfunction() {

//   const innerfunction = function() {

//     console.log("hello from inside!");
    
//   }
//   innerfunction();
// }

// outerfunction();
//////////////////////

// function playpiano() {

//   const pianokeys = ["C", "D", "E","F","G", "A", "B"];

//   const playinside =  function() {

//     for (let i =0; i < pianokeys.length; i++)

//     console.log(pianokeys[i] +  " " + "play it");
    
//   }
//   playinside();
// }
// playpiano();
///////////////////////////

///////////////// FUNCTION CALLBACKS///////////////////

// function processUserInput(callback: any) {

//   let name = " nayla ";

//   callback(name);
// }

// processUserInput(function(name: string) {
//   console.log("hello" + name);
  
// });
////////////////////////
                                   ///******************************** watch this again */
// function play (piano: any) {

//  let pianokeys = ["A", "C","D","E", "F", "G","H"];

//  piano(pianokeys);

// }
// play(function(pianokeys: string) {

//   console.log("just play " + pianokeys);
  
// });





///////////////////// MULTIDIMENSIONAL ARRAY

// let matrix : number[][] = [

//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// console.log(matrix[2][2]);
///////////////////////


///////////////////WORKING WITH OBJECT  AND ARRAY


// type book = {

//   title: string;
//   author: string;
//   isbn: string;

// };

// let libaray: book[] = [

//   {title: "The Hobbit", author: "J.R.R.Tolkien", isbn: "123456789"},

//   {title: "1984", author: "George Orwell", isbn: "987654321"}
// ];


// //adding  a new book to the array

// libaray.push({

//   title: "The Catcher in the Rye",
//   author: "J D Salinger",
//   isbn: "1112131415"
// });

// // finding a book by author

// let foundbook = libaray.find(book => book.title === "The Hobbit");

// console.log(foundbook);
/////////////////////////////////

//****** *EXAMPLE2******/

// type book = {

//   title: string;
//   author: string;
//   isbn:  string;
// };
// let libaray: book[]  = [

// {title: "book1",author: "mean1", isbn: "123"},

// {title: "book2",author: "mean2", isbn: "456"}

// ];

// //adding array by push method

// libaray.push({
//   title: "book3",
//   author: "mean3",
//   isbn: "789"
// });

// let foundbook = libaray.find(book => book.author === "mean3"
// );

// console.log(foundbook);

///////////////////////////////
               ///////// practices of  currency converter


// import inquirer from "inquirer"
// import chalk from "chalk";

// console.log(chalk.redBright(`\n\t\"WELCOME IN CURRENCY CONVERTER\"\t\n`))

// const currency: any = { 

//   "United States Dollar" : 1,     // Base Currency is USD
//     "Euro" : 0.93,
//     "Chinese Yuan" : 7.24,
//     "Pound sterling" : 0.79,
//     "Australian Dollar" : 1.51,
//     "Canadian Dollar" : 1.37,
//     "Thai Baht" : 36.80,
//     "Turkish lira" : 32.35,
//     "Saudi Riyal" : 3.75,
//     "Qatari Riyal" : 3.64,
//     "Pakistani Rupees" : 277.42,
//     "Indian Rupees" :  83.38,
// }


// let converter  = await inquirer.prompt([

//   {

//     name: "currencychangefrom",
//     message: chalk.greenBright("By Which Currency You Want to Change From ?"),
//     type: "list",
//     choices: ["United States Dollar","Euro","Chinese Yuan", "Pound sterling","Australian Dollar","Canadian Dollar","Thai Baht","Turkish lira","Saudi Riyal","Qatari Riyal","Pakistani Rupees","Indian Rupees"]

//   },


//   {

//     name: "currencychangeto",
//     message: chalk.yellowBright("By Which Currency Would you Like to Change InTo ?"),
//     type: "list",
//     choices: ["United States Dollar","Euro","Chinese Yuan", "Pound sterling","Australian Dollar","Canadian Dollar","Thai Baht","Turkish lira","Saudi Riyal","Qatari Riyal","Pakistani Rupees","Indian Rupees"]
//   },


//   {
//     name: "amount",
//     message: chalk.blueBright("Enter The Amount You Want To Convert ?"),
//     type:  "number"
//   }
// ]);

// let changefrom = currency[converter.currencychangefrom];

// let changeto = currency[converter.currencychangeto];

// let amountlist = converter.amount;

// let baseCurrency =   amountlist / changefrom;

// let currencyConverter =  baseCurrency * changeto;


// console.log(`${chalk.magenta(converter.currencychangefrom)} = ${chalk.yellow(amountlist)}
//   ${chalk.red("Convert To")} 
// ${chalk.magenta(converter.currencychangeto)} = ${chalk.yellow(currencyConverter.toFixed(2))}.`);


///////////////////////////////

// //  //   //  //  // word counter project

 
// import inquirer from "inquirer";

// const answer: {

 
//   sentence:  string
// } =   await inquirer.prompt([

//   {
//     name: "sentence",
//     type: "input",
//     message: "enter the sentence for count the words"
//   }
// ])

// const words = answer.sentence.trim().split(" ")

// console.log(words);

// console.log(`your sentence word count ${words.length}`);



////////////////////// type  aliases ////////////////

// type User = {

//   name: string;
//   age: number;
//   haspet: boolean
// };

// // now you can use the user type alias to define objects


// let user1 : User = {

//   name: "allem alam",

//   age: 24,

//   haspet: true

// };

// console.log(user1.name);

////////////////////////// complex type ///////////

// // another example with a complex type for a function

// type operation = (x: number , y: number) =>  number;

// const add : operation = (x,y) => x + y;
// const subtract : operation = (x,y) => x -y;

// console.log(add(5,3));  //8

// console.log(subtract(5,3));  //8

///////////////////////////


//////////////type literal


// let drinksize: "small" | "medium" | "large";

// drinksize = "medium";

// drinksize = "small";

// drinksize = "mega";
// //error: type 
// //'"mega"' is not assignable to type '"small" | "medium" | "large"'.

/////////////////////////

///////////////////type unions

// let mixedbag: string | number;

// mixedbag = "sunscreen";  // ok

// mixedbag = 30; // maybe representing the spf of the screen

// mixedbag = true;
// // error: tye 'boolean is not assignable to typee 'string | number'.

//////////////////////////

/////////////// types intersection //////////////////



// type beachGear = {

//   sunscreen: boolean;
//   towel:  boolean;
// }

// type mountainGear = {
//   water: boolean;
//   map: boolean;
// }

// type adventureGear = beachGear & mountainGear;

// let myGear :  adventureGear = {

//   sunscreen: true,
//   towel: true,
//   water: true,
//   map: true,
// };

// console.log(myGear.sunscreen, myGear.map);
////////////////////////////////

/////////////////////// HOMEWORK ASSIGNMENT OF FUNCTION//////////

////////////////////BASIC FUNCTION CREATION///////////

//Q1

/*function calculateProduct(sum1: number,sum2: number) {
   return sum1 * sum2 ;
}

let result = calculateProduct(5, 10);

console.log(result);*/
////////////////////////

/////////////USING DEFAULT PARAMETERS

//Q2 

/*function greet(name: string, greeting:string = "Hello") {

  return `${greeting} ${name}!`;
}
//  let result = greet("ameen");
// console.log(result);

console.log(greet("AMEEN"));

console.log(greet("Zia","Hi"));  */

/////////////////////////////////


//////////////////////// ARROW FUNCTION CONVERSION

  //Q3

/*let add = (a: number, b: number) => {

  return  a + b;
}


let result = add(10,5);

console.log(result);*/

/////////////////////////////

/////////////////IMPLEMENTING  A REST PARAMETER //////////////

//Q4

/*function sumAll(...item: number[]) {

  let add = 0;
  for (let i = 0; i < item.length; i++) {
     add += item[i]
  }
   return  add;

}
 console.log(sumAll(1 ,2 ,3));
 
 console.log(sumAll(10 ,20 ,30, 40, 50));  */
 /////////////////////////

////////////// function Returning Another Function

 ///Q5

 /*function multiple(factory: number) {
  return function (number1: number) {
    return factory * number1;
  }
 }

 const triple = multiple(3);

 console.log(triple(5));  */
 
///////////////////////////////////////





////////////////UNIONS TYPES ////////////

// let mixedBag:  string | number;

// mixedBag = "sunscreen"; //ok

// mixedBag = 30; // ok maybe representing the spf of the sunscreen

// mixedBag = true; // not assign because  not added this union in the variable thats why.

///////////////////////////////


// let myname: string| null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

// myname = undefined; //Error
// myname = 12; //Error
/////////////////////

// let myage : string | number;

// myage = 16;
// console.log(myage);

// // console.log(myage.tolowercase());  // error 

// myage = "Dont Know";//narrowing
// console.log(myage);

// console.log(myage.toString()); // common to both types 
//                              //can be called even without narrowing

// console.log(myage.toLowerCase());//Can be called on string 
//                                  //because of narrowing

////////////////////////////

// let newAge = Math.random() > 0.6 ? "khan" : 60;

// // newAge.tolowercase(); //Error: Transpiler cannot narrow

// if (newAge === "khan") {

//       // Type of newAge: string
    
//       newAge.toLowerCase(); // can be called
// };

// if (typeof newAge === "string" )  {

//   newAge.toUpperCase(); //can be called 

// }


// typeof newAge === "string"

// ? newAge.toUpperCase() //okay:  string
// : newAge.toFixed();  // okay number 

////////////////////////

// let zia : "zia";

// zia = "zia";
// zia = "khan"; // //error

////////////////

// let yourName = Math.random() > 0.6 ? "hira khan": undefined;

// if (yourName) {

//   yourName.toUpperCase(); // ok: string

// }
// yourName.toUpperCase(); //error : object is possibly "undefined".
// yourName?.toUpperCase(); //ok

////////////////////////////////

// // You can also define a type alias


// type rawData = boolean | number | null |undefined;

// let data : rawData;

// // You can even combine them

// type Id = number | string;

// type idMaybe = Id | undefined | null;

/////////////////////////////////



/////////////////////////////////// typr literal

/*let trafficlight : "Red"|"Green"|"Yellow" = "Green";
console.log(trafficlight);*/

////////////////////////////////////////Type Unions

/*let mixedBag : string|number = "sunscreen";

console.log(mixedBag);
mixedBag = 30;
console.log(mixedBag);
//mixedBag = true; // error*/

///////////////////////////////// Type Intersection = & ./

/*type teacher = {
    name: string,
    salary: number

};

type student = {
    name: string,
    rollnumber: number
};

let Both: teacher & student = {
    name: "saba",
    rollnumber: 12334,
    salary: 100000

};

console.log(Both.salary);*/

////////////////////////////////////FOR IN //////








// let  age  : number | "died" | "unknown";

// age = 25; // ok
// age = "died"; //ok
// age = "unknown";//ok
// //age = "living"; //error



///////////////////////ARRAY CLASSWORK  ASSSIGNMENT///////

// let fruits = ["orange","apple","grapes","peeches","mango","banana"];
//  //   delete last 3 element

// fruits.splice(3,3)
// console.log(fruits);

// //   remove 3 index  element from center

// fruits.splice(3,1)
// console.log(fruits);


// // //   delete 1 element from 2 index and add a new element


// fruits.splice(2,1,"pappaya")
// console.log(fruits);



// // // add two element in begining and 1 elemnt in center

// fruits.unshift("melon","strawberry")
// fruits.splice(3,0 ,"blueberry")
// console.log(fruits[3]);
// ////////////////////////


////////LOOPS NESTED LOOP////////////////

// for (let i = 0; i < 5; i++) {

//   console.log("hello world");
//   for (let i = 0; i < 4; i++){
//     console.log("Nice work");
    
//   }
  

// }
//////////////////


//////////////////////WHILE LOOP//////////////////

// let bustime: number = 5;


// while(bustime >= 10) {
//   console.log("hello");
//   bustime--
// };


//////////////////


// let  mymy = () =>{
// console.log("hello");

// }
// mymy();

//////////////////////////

// const person = {
//   firstname: "john",
//   lastname: "doe",
//   id: 1234,
//   fullname: function (){
//     console.log(this.firstname + " "  + this.lastname );
    
//   }
// };

// person.fullname()

////////////////////////


// let  busarrive = 5;


// do {

//   console.log("bus arrive ");
//   busarrive--;
// }

// while (busarrive >= 0);

///////////////////////

// let busarrives = 5;

// function checkbusarrive() {

//   busarrives--;
//   if(busarrives != 0) {
//     return "checking for bus..."
//   }else {return false}
// }

// do {
//   let  response = checkbusarrive()
//   console.log(response);
  
// }while (busarrives > 0);

///////////////////////////

/////////////////////EXPLICT CASTING///////////////////

// let  firstName : unknown = "ali";

// console.log( (firstName as  string) .toUpperCase());

/////////////////////


// let  num1 : unknown = "ali";

// console.log( (<string>num1).toUpperCase());

////////////////////


// let num1 : number = 44;

// console.log((num1 as string).length);

//////////////////////


// let num1 : unknown = 44;

// console.log((<string>num1).length);  ///undefined

//////////////////////

// let name : string = "hello";

// console.log(((name as unknown) as number).length);
// x is not actually a number so this will return undefined

//////////////


// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)


//////////////////////  REST PARAMETER////////////////


// QExample 2: The rest parameter is of type string in this example. It takes in parameters of string type.
// There are two parameters in the below program. The rest parameter should always come at the last. We use
// the join() method to join the strings by a string ‘ , ‘. A simple string is returned in this example. 


// function getAverage(...args: number []) {

//   var avg = args.reduce(function(a, b){
//     return a + b;
//   } , 0) /args.length;

//   return avg;
// }

// console.log(getAverage(10 , 20, 30, 40, 50));

// console.log(getAverage(1.5, 3.5, 5.5, 7.5, 9.5));

// console.log(getAverage(2, 4, 6));

//////////////////////////


// //Q Example 1: Average of numbers using rest parameter. The below code is an example for the rest parameter where
// //  we pass in any number of arguments we want and the average of the numbers is displayed as output.


// function job(job_title: string, ...people: string []) {

//   return people.join(" , ")  + " " + "are " + job_title;
// }

// console.log(job("PROGRAMMER", "Ali", "Aryan","Anabia","Akash"));

// console.log(job("CODER", "Ayes", "omi","Sami"));

// ///////////////////////////////




// //Q Example 3: What happens if we define the rest parameter at the start? It takes only one parameter
// //  instead of taking an indefinite number of arguments. The typescript compiler will raise errors
// //  and the function will be of no use.



// function job(...people: string [], job_title : string ) {

//   return  people.join(" , ") + " " + " are " + job_title
// }

// console.log(job("sara","peter", "programmer"));
// console.log(job("sara","peter","coders")); //  ERROR  SHOWS

// ///////////////////////////////////


////////////////VOID////////////


// function  sayHi() : void {
// console.log("hello");

// }

// let speech : void = sayHi();
// console.log(speech); // output: undefined

/////////////////////


// let nothing : void = undefined;

// let num: void = 1;  ///output ERROR

// console.log(nothing);
// console.log(num); 

// /////////////////


// function sayHi(): void {
//   let age  = 18;
// }

// let result = sayHi()

// console.log(result);  // undefined

//////////////////



///////////FUNCTION OVERLOADS  ///////////////////


// function  add(arg1: number, arg2:number) : number;

// function  add(arg1: string, arg2: string) : string;

// function  add(arg1: boolean, arg2:boolean) : boolean;


// function add(arg1: any, arg2: any ) : any {
  
//   return arg1 + arg2;

// }
// console.log(add(3, 3));

// console.log(add("hello", "world"));

// console.log(add(true, false));

///////////////////////////////


// function sum(num1: string, num2: string): void;

// function sum(num1: string, num2: string): void;

// function sum(num1: any, num2: any) : any {

//   console.log(num1 + num2);
  
// }

// sum("2","4") // output 24
// sum("hi"," bye") // output
// sum(2,4) // output error

// /////////////////////////


//////////////////////////

// function logIn(email: string) : void;

// function logIn(email:string, pass: string): void;


// function logIn(email:any, pass?: any): any {

//   console.log(email + pass);
  
// }

// logIn("123@gmail.com  " , "1245");


// logIn("123@gmail.com  ");

// // ////////////////////////



////////////////////////////


// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3);

// console.log(d1);
// console.log(d2);


// //////////////////////

////////////////////////

// function sum(a:string) : string;

// function sum(a : number)



//////////////////////////////////////////

 //////////////// OOP /////////
 //////////////CLASS
// class Point {
//   x : number = 10;
//   y : number = 20;
// }
//1. here new ka keyword is making empty object
//2. this = () empty object
//3.  ya  class function automatically return kar rahaa hai object . because of  new
//  const pt = new Point()






















/////practice quiz////////////


// import inquirer from 'inquirer';

// interface Question {
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   correctAns: string;
// }

// const questions: Question[] = [
//   {
//     question: "HTML stands for",
//     option1: "Hyper Text markup language",
//     option2: "Hyper Link markup language",
//     option3: "Hyper Text makeup language",
//     correctAns: "Hyper Text markup language"
//   },
//   {
//     question: "CSS stands for",
//     option1: "Cascading Style sheet",
//     option2: "Cascading Styling sheet",
//     option3: "Cascading super sheet",
//     correctAns: "Cascading Style sheet"
//   }, 
//   {
//     question: "In how many ways can CSS be written in?",
//     option1: "1",
//     option2: "2",
//     option3: "3",
//     correctAns: "3"
//   }, 
//   {
//     question: "Which tag gives your the largest heading in HTML?",
//     option1: "<h6>",
//     option2: "<h2>",
//     option3: "<h1>",
//     correctAns: "<h1>"
//   }, 
//   {
//     question: "How many data types in JS?",
//     option1: "6",
//     option2: "7",
//     option3: "8",
//     correctAns: "8"
//   },
//   {
//     question: "How many days in February?",
//     option1: "30",
//     option2: "28",
//     option3: "29",
//     correctAns: "28"
//   }
// ];

// let index = 0;


// function askQuestion(index: number) {
//   if (index >= questions.length) {
//     console.log("Quiz finished!");
//     return;
//   }

//   const question = questions[index];
//   inquirer.prompt([
//     {
//       type: 'list',
//       name: 'answer',
//       message: question.question,
//       choices: [
//         question.option1,
//         question.option2,
//         question.option3
//       ]
//     }
//   ]).then((answers) => {
//     if (answers.answer === question.correctAns) {
//       console.log("Correct!");
      
//     } else {
//       console.log("Wrong!");
//     }
//     askQuestion(index + 1);
//   });
// }

// askQuestion(index);


////////////////////////////////////////////
//     / quiz two project
// ///////////////////////////////////////////

// import inquirer from 'inquirer';

// interface Question {
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   correctAns: string;
// }

// const questions: Question[] = [
//   {
//     question: "HTML stands for",
//     option1: "Hyper Text markup language",
//     option2: "Hyper Link markup language",
//     option3: "Hyper Text makeup language",
//     correctAns: "Hyper Text markup language"
//   },
//   {
//     question: "CSS stands for",
//     option1: "Cascading Style sheet",
//     option2: "Cascading Styling sheet",
//     option3: "Cascading super sheet",
//     correctAns: "Cascading Style sheet"
//   }, 
//   {
//     question: "In how many ways can CSS be written in?",
//     option1: "1",
//     option2: "2",
//     option3: "3",
//     correctAns: "3"
//   }, 
//   {
//     question: "Which tag gives your the largest heading in HTML?",
//     option1: "<h6>",
//     option2: "<h2>",
//     option3: "<h1>",
//     correctAns: "<h1>"
//   }, 
//   {
//     question: "How many data types in JS?",
//     option1: "6",
//     option2: "7",
//     option3: "8",
//     correctAns: "8"
//   },
//   {
//     question: "How many days in February?",
//     option1: "30",
//     option2: "28",
//     option3: "29",
//     correctAns: "28"
//   }
// ];

// let correctAnswers = 0;

// async function askQuestion(index: number) {
//   if (index >= questions.length) {
//     console.log(`Quiz finished! You got ${correctAnswers} out of ${questions.length} correct.`);
//     return;
//   }

//   const question = questions[index];
//   const answers = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'answer',
//       message: question.question,
//       choices: [
//         question.option1,
//         question.option2,
//         question.option3
//       ]
//     }
//   ]);

//   if (answers.answer === question.correctAns) {
//     console.log("Correct!");
//     correctAnswers++;
//   } else {
//     console.log("Wrong!");
//   }

//   askQuestion(index + 1);
// }

//  askQuestion(0);


// ///////////////////////////////////////////////////////////


//////////// countdown timer
///////////////////////////////////////////////////////

// import inquirer from 'inquirer';

// var count = 0;
// var interval: any;  // Use 'any' type or remove the type annotation

// function timer() {
//     count++;
//     console.log(count);
// }

// // Function to start the timer
// function startTimer(duration: number) {
//     interval = setInterval(timer, 1000);

//     setTimeout(function () {
//         clearInterval(interval);
//         console.log("Timer stopped.");
//     }, duration);
// }

// // Prompt user to start the timer and for the duration
// inquirer.prompt([
//     {
//         type: 'confirm',
//         name: 'start',
//         message: 'Do you want to start the timer?',
//         default: false
//     }
// ]).then(answers => {
//     if (answers.start) {
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'duration',
//                 message: 'Enter the duration in seconds for how long the timer should run:',
//                 validate: function(value) {
//                     var valid = !isNaN(parseFloat(value)) && value > 0;
//                     return valid || 'Please enter a positive number';
//                 },
//                 filter: Number
//             }
//         ]).then(durationAnswer => {
//             const duration = durationAnswer.duration * 1000; // Convert to milliseconds
//             startTimer(duration);
//         });
//     } else {
//         console.log('Timer not started.');
//     }
// });


////////////////////////////////




/////////////////////////////////////////////////


// function reverseAndPrint(str: string): void {
//   let reversedStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//   }
//   console.log(reversedStr);
// }

// reverseAndPrint("hello");

// function reverseprint (str1: string){

//   for (let i = 0; i > str1.length; i--){
    
//   }
// }


//********************************* */




















































































































































































































































































































































































































































































































































 
























































































































 
























































































































































































































































