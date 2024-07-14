// console.log("hello world");
let Data;
export {};
// function double (x : string | number) {
//     if ( typeof x ===  "string") {
//         return x.repeat(2);
//     } else {
//         return x * 2    }
// }
// console.log(double("all"));
// function print( s: string , allignment: "right" | "left" | "center") {
// }
// print("hello , world" , "left");
// //print("hello , world" , "centre");
///////////object ///////////////////////////////
// let teacher = {
//     name: "zeeshan",
//     experience: "10"
// }
// console.log(teacher.name);
// console.log(teacher["experience"]);
/// type declaration//////
// let student : {
//     name: string,
//     age: number
// }
// student ={
//     name: "hira",
//     age: 10
// }
// console.log(student["name"]);
// console.log(student.age);
////////////////////////
//////////////////type aliased ///////
/// anonymous
// let teacher : {
//     name : string,
//     exp : number
// }=  {
//     name : "zeeshan",
//     exp : 10
// }
// console.log(teacher.name, teacher.exp);
///////////////////////////
// Aliased Object Type
// type student = {
//     name : string,
//     age : number
// }
// let student1 : student = {
//     name : "hira",
//     age : 10
// }
// console.log(student1.age, student1.name);
///////////////////////////////////////
//////////////////. Union Type Alias
// type ID = number | string;
// let userid : ID ;
// userid = "ali";
// userid = 234;
// //////////////////////////
//   Function Type Alias///////////
// type callback = (a :string) => void;
// const logmessage : callback = (message) => {
//     console.log(message);
// }
// logmessage("hello, typescript")
// ////////////////
////////////////////function aliased ///////
// type User = {
//     name : string,
//     email : string,
//     isActive : boolean
// }
// function createUser (user  : User): User {
//     return {name: "nai", email: "nail.com", isActive : true }
// }
// let result = createUser({name : "", email: "" ,isActive: true })
// console.log(result);
//////////////////////////////////
// type second = number;
// let timeinSecond : second = 10;
// let time : second = 20;
/////////////
////////interfaces
// interface manager {
//     name : string,
//     subordinates? : number,
// }
// let storeManager : manager = {
//     name : "bilal"
// }
// console.log(storeManager.name, storeManager.subordinates);
//////////////////////
// interface Person {
//     name : string;
//     age  : number; 
// }
// const person1 : Person = {
//     name : "Alice",
//     age  : 30,
// };
// interface employer extends Person {
//     employerId : number;
// }
// const employer1 : employer = {
//     employerId : 1234,
//     name : "bob",
//     age : 20,
// };
// console.log(person1.name);
// console.log(employer1.name, employer1.employerId, employer1.age);
/////////////////////////
// interface  teacher {
//     name : string;
//     exp : number;
//     subject : string;
// }
// const  Teacher : teacher = {
//     name : "sam",
//     exp : 10,
//     subject : "english"
// };
// interface student  extends teacher {
//     name : string;
//     age : number;
//     rollnumber :  number;
// }
// const Student : student = {
// name : "ali",
// age : 21,
// exp : 10,
// subject : "english",
// rollnumber : 1234,
// };
// console.log(Student.name, Student.rollnumber);
// console.log(Teacher.name);
// ////////////////////////////
// Interface: Can be extended using the extends keyword
// interface A {
//     propA : string;
// }
// interface  B extends A  {
//     propB : number;
// }
// const  obj : B = {propA : "hello", propB : 23};
// console.log(obj.propA, obj.propB);
//////////////////////////////
// Type Alias: Can create new types using intersection types, 
// but cannot be extended.
// type A = {
//     propA : string;
// };
// type B =  A & {
//     propB : number;
// }
// const obj : B = {propA : "hello", propB : 42};
// console.log(obj.propA, obj.propB);
//////////////////////
////Declaration Merging:
//Interface: Supports declaration merging,
//where multiple declarations with the same name are merged.
//  interface merged {
// propA : string;
//  }
// interface merged {
//     propB : number;
// }
// const obj : merged = {
// propA : "hello",
// propB : 23,
// }
// console.log(obj.propA,obj.propB);
// /////////////////////////////
//Type Alias: Does not support declaration merging
// type AliasA = {
//     propA: string;
//   };
//   // Error: Duplicate identifier 'AliasA'.
//   type AliasA = {
//     propB: number;
//   };
//   //////////////////////
// complex types
//Type Alias: Can define complex types like unions, intersections,
//and tuples more effectively.
// type uniontype = string | number;
// type intersectiontype = {a : number} & {b : string};
// type tupletype = [number, string];
// const  union : uniontype  = 44;
// const intersection : intersectiontype = {a : 23 , b : "hello"};
// const tuple : tupletype = [1, "hello"];
// ///////////////////////
///Use interface when you need to define the structure of an object 
//and want the ability to extend it in the future.
//Use type alias when you need to define complex types such as unions, intersections,
//or tuples,or when you want more flexibility in defining the type.
//By understanding these differences and best practices, you can decide 
//when to use interface and when to use type alias to best suit your TypeScript project.
//////////////////////////
// // These two interfaces are completely
// // transferrable in a structural type system:
// interface ball {
//     diameter : number;
// }
// interface sphere {
//   diameter : number;
// }
// let Ball : ball = {
//     diameter : 10
// };
// let Sphere : sphere = {
//     diameter : 20,
// }
// Sphere = Ball;
// Ball = Sphere;
// interface tube {
// diameter : number;
// length : number;
// }
// let Tube : tube = {
//     diameter : 30,
//     length : 12
// }
// Ball = Tube;
// //Tube = Ball; // error
/////////////////////////
// function greet (person : { name : string , age : number}) {
//     return "hello " + person.name
// }
// let person = { name: "nay", age: 30};
// console.log(greet(person));
/////////////////////////////
// interface person {
//     name : string;
//     age : number;
// }
// function greet (Person1 : person) {
// return "hello " + Person1.name
// }
// const ans = {name : "naye" ,age:  30};
// console.log(greet(ans));
//////////////////////
// type person = {
//     name: string;
//     age: 12;
// }
// function greet (person2 : person) {
//     return "hello " +  person2.name
// }
/////
// interface User {
//     id: number;
//     name: string;
//     email?: string; // Optional property
//     phoneNumber?: string; // Optional property
//   }
//   function createUser(user: User): void {
//     console.log(`ID: ${user.id}`);
//     console.log(`Name: ${user.name}`);
//     if (user.email) {
//       console.log(`Email: ${user.email}`);
//     }
//     if (user.phoneNumber) {
//       console.log(`Phone Number: ${user.phoneNumber}`);
//     }
//   }
//   const user1: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
//   const user2: User = { id: 2, name: 'Bob' };
//   createUser(user1);
//   createUser(user2);
////////////////////////////////////////////
///////////////// student mangement  project
// import inquirer from "inquirer";
// import chalk from "chalk";
// import colors from 'colors';
// class Student{
//     static idcounter = 10000;
//     name:string;
//     id: number;
//     courses: string[];
//     balance: number;
//     constructor(name:string){
//         this.name = name;
//         this.id = Student.idcounter++
//         this.courses = [];
//         this.balance = 1000;
//     }
//     enrollInCourse(course:string){
//         this.courses.push(chalk.yellowBright(course));
//     }
//     viewBalance(){
//         console.log("*".repeat(60));
//         console.log(`Balance for student ${chalk.red(this.name)} is : $${chalk.red(this.balance)}`);
//         console.log("*".repeat(60));
//     }
//     payTuitionFees(fee:number){
//         this.balance -=fee;
//         console.log("*".repeat(60));
//         console.log(`$${chalk.greenBright(fee)} Fees paid for student ${chalk.greenBright(this.name)}`);
//         console.log(`Remaining Balance : $${chalk.greenBright(this.balance)}`);
//         console.log("*".repeat(60));
//     }
//     showStatus(){
//         console.log("*".repeat(60));
//         console.log(`Name: ${chalk.blueBright(this.name)}`);
//         console.log(`ID: ${chalk.greenBright(this.id)}`);
//         console.log(`Courses: ${this.courses}`);
//         console.log(`Balance: ${chalk.magenta(this.balance)}`);
//         console.log("*".repeat(60));
//     }
//     }
// class Studentmanagement  {
//     students: Student[];
//     constructor(){
//         this.students = [];
//     }
//     addStudent(name:string){
//         let newStudent = new Student(name);
//         this.students.push(newStudent);
//         console.log("*".repeat(60));
//         console.log(`Student ${chalk.magenta(name)} added, student ID: ${chalk.blueBright(newStudent.id)} `);
//         console.log("*".repeat(60));
//     }
//     searchStudent(studentid:number){
//         return this.students.find(stud => stud.id === studentid);
//     }
//     enrollStudent(studentid:number,course:string){
//         let fdStudent = this.searchStudent(studentid);
//         if(fdStudent){
//             fdStudent.enrollInCourse(course);
//             console.log("*".repeat(60));
//             console.log(`${chalk.yellowBright(fdStudent.name)} is enrolled in ${chalk.yellowBright(course)} successfully`);
//             console.log("*".repeat(60));
//         }else{
//             console.log("please enter a correct student id");
//         }
//     }
//     viewStudentBalance(studentid:number){
//         let fdStudent = this.searchStudent(studentid);
//         if(fdStudent){
//             fdStudent.viewBalance();
//         }else{
//             console.log("please enter a correct student id");
//         }
//     }
//     payStudentFee(studentid:number,amount:number){
//         let fdStudent = this.searchStudent(studentid);
//         if(fdStudent){
//             fdStudent.payTuitionFees(amount);
//         }else{
//             console.log("please enter a correct student id");
//         }
//     }
//     showStudentStatus(studentid:number){
//         let fdStudent = this.searchStudent(studentid);
//         if(fdStudent){
//             fdStudent.showStatus();
//         }
//     }
// }
//  async function management(){
//     console.log("*".repeat(60));
//     console.log(colors.random(`   \n\t   Student Management System  \n\t `));
//     console.log("*".repeat(60));
//     let system = new Studentmanagement();
//     let condition = true;
//     while(condition){
//         let answer = await inquirer.prompt([
//             { 
//                 name:"Option",
//                 type:"list",
//                 message:"select one option",
//                 choices:["Add Student","Enroll In Course","View Balance","Pay Tuition Fees","Show Student Status","Exit"]
//             }
//         ]);
//         switch(answer.Option){
//             // add student.
//             case "Add Student":
//                 let addName = await inquirer.prompt([
//                     {   name:"name",
//                         type: "input",
//                         message: "Enter student name"
//                     }
//                 ]);
//                 system.addStudent(addName.name);
//                 break;
//                 // Enroll in course.
//                 case "Enroll In Course":
//                     let courseEnroll = await inquirer.prompt([
//                         {   name:"Id",
//                             type:"number",
//                             message:"Enter a student ID"
//                         },
//                         {
//                             name:"course",
//                             type:"input",
//                             message:"Enter a course name in which you want to enroll"
//                         }
//                     ]);
//                     system.enrollStudent(courseEnroll.Id, courseEnroll.course);
//                     break;
//                     //View student balance.
//                     case "View Balance":
//                         let studentBalance = await inquirer.prompt([
//                             {   name:"Id",
//                                 type:"number",
//                                 message:"Enter a student ID"
//                             }
//                         ]);
//                         system.viewStudentBalance(studentBalance.Id);
//                         break;
//                         // Pay student tuition fees.
//                         case "Pay Tuition Fees":
//                             let studentFee = await inquirer.prompt([
//                                 {
//                                     name:"Id",
//                                     type:"number",
//                                     message:"Enter a student ID"
//                                 },
//                                 {
//                                     name:"Amount",
//                                     type:"number",
//                                     message:"Enter a amount to pay tuition fees"
//                                 }
//                             ]);
//                             system.payStudentFee(studentFee.Id, studentFee.Amount);
//                             break;
//                             // Show  a Student Status
//                             case "Show Student Status":
//                                 let studentStatus = await inquirer.prompt([
//                                     {
//                                         name:"Id",
//                                         type:"number",
//                                         message:"Enter a student ID"
//                                     }
//                                 ]);
//                                 system.showStudentStatus(studentStatus.Id);
//                                 break;
//                                 //
//                                 case  "Exit":
//                                     condition = false;
//                                     console.log(colors.america("*".repeat(60)));
//                                    console.log(colors.rainbow("..............Thankyou................"));
//                                    console.log(colors.america("*".repeat(60)));
//                                    break;
//          }
//     }
//     }
//    management();
