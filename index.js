

///////////////////////////////



// function greet(ab, Callback) {

//     console.log("hello");
//     Callback();
// }

// greet("world", () => {
//     console.log("new world");
// })

// function greet(cb){
//     console.log("i am first");
    
//         cb();
    
    
// }

// greet(() => {
//     console.log("hello");
// })

////////////////////////

// // function 

// function greet(name){

//     console.log("hi" +  " " + name );
// }

// greet("peter");

//////////////////////

//////////////CALL BACK////////

// function greet(name, Callback) {

//     console.log("hi" + " " + name);
//     Callback();
// }


// function callme() {

//     console.log("i am call back function");
// }

// greet("peter", callme);

//////////////////////////////


// function greet() {
//     console.log("hello world");
// }


// function sayname( name) {
//     console.log("hi" + " " +  name);
// }

// // calling the function

// setTimeout(greet, 3000);
// sayname("john");

///////////////////////////


// // Callback Function Example

// function greet(name, myfunction) {

//     console.log("hello world");

//     // callback function
//     // executed only after the greet() is executed

//     myfunction(name);
// }

// // callback function
// function sayname(name) {
//     console.log("hello" + " "+ name );
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, "jhon" , sayname)

//////////////////////////////

// function orderpizza(type, name) {
//     console.log("pizza ordered");
//     console.log("pizza is for preparation");
//     setTimeout(function () {
//         let msg = `your ${type} ${name} Pizza is ready! The total bill is $13`;
//         console.log(`On the Pizzahub server ${msg}`);

//     },3000)
// }

// orderpizza("paproni","pizza");

///////////////////////////////////


// function orderpizza (type, name) {

//     console.log("pizza ordered......");
//     console.log("pizza is preaparation");
//     setTimeout(function ()  {
//         let msg = `your ${type} ${name} pizza is ready! The total bill is $13`;
//        console.log(`on the pizza server ${msg}`);
    
//     } , 3000);
    
// }

// orderpizza("jalapeno", "pappreca");

//////////////////////////

// function orderpizza (type,name,callback) {
//     console.log("pizza ordered...");
//     console.log("pizza is for preparation");

//     setTimeout(function() {
//         let msg = `your ${type} ${name} pizza is ready! The total bill is $13`;
//         callback(msg)
//     }, 3000)
// }
// orderpizza("tikka","malai boti")

//////////////////////////////////

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);


///////////////////////////////


// let age = 19;

// if (age >= 18) {

//     if (age >= 60) {
//         console.log("senior");
//     }
//     else{
//         console.log("middle");
//     }
// }
// else{
//     console.log("child");
// }


/////////////////////////////


// for (let i = 0; i < 5; i ++) {
//  let str = "";
//     for (let j = 0; j < 5 ; j++){
//       str = str + j
//     }
//     console.log(i, str);
// }

//////////////////////////////

// function getData (dataId, getNextdata) {
//     setTimeout (() => {
//         console.log("getdata", dataId);
//         // getNextdata();
//         if (getNextdata) {
//             getNextdata();
//         }
//     }, 2000);
//     }


//     // getData(6);
//     // getData(7);
//     // getData(8); //print arguments with all in ones


// //  call back hell

//     getData(1,() => {
//         console.log("getting data 2......");
// getData(2, () => {
//     console.log("getting data 3......");
//     getData(3 , () => {
//         console.log("getting data 4......");
//         getData(4,() => {
//             console.log("getting data 5......");
//             getData(5)
//         });
//     });
// });
//     });

/////////////////////////////////

////////////////////////PROMISES           

// let promise = new Promise((resolve, reject) => {
//     console.log("i am  a promise");
//     reject(123);
// });


//  function getData(dataId, getNextdata) {

//     return new promise((resolve, reject) => {
      
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess")
//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 5000)
//     });
// }

/////////////////////////////////

 /////////////////////////callback sir  //////////////////

// const func1 = (callback) => {
//     console.log("function one");
//     callback()
// }

// const func2 = () => {
//     console.log("function two");
// }

// func1(func2)


















































































































































































































































f






















































































