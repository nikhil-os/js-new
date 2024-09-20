// input
// output
//  console.log("hello")
//  alert("hello")

// input 

// var n = promt("enter number")
// var m = promt("enter number")
// console.log(n+m);
// console.log(typeof n)

// type conversion 
// explicit type conversion -> developer do this for us 
// var n = Number(prompt("enter number"));
// var m = +prompt("enter number");
// console.log(n+m);
// console.log(typeof n);

// implicit type conversion -> computer do this for us 
// 12 + "hello" = "12hello "

// var res = confirm("are you valid customer");
// console.log(res);

//  var age = 34; //globel variable
//  {
//     let username = "john" //local variable
//     username = "ritesh"

//     const PI = 3.14; //local variable
//     PI="indore";
//     console.log(username);
//     console.log(city);
//  }


//  JIT- what is jit ??? javascript- just impact compiler specially designed for jav;


// operators

// 1. assignment operators =  
// 2. arithmetic operators  +,-, *, /, %, **  
// unirary operators -> ++oncrement ,  --decrement  
// binary operators => +, -, *, /, %, ** 
// shorthand operators -> +=, -=, *=, /=, %= 

//  let n = 1;
//  let m = 2;
//  let sum = n + m;
//  console.log(`the sum of ${n} and ${m} is ${sum}`);

//  modulodivison 

//  let n = 5;
//  let m = 10;
//  let modulodivison = m % n;
//  console.log(modulodivison);


// let n = 3; 
// let m = 2;
// let  exp = m ** m ** m;
// console.log(exp);
 
// shorthand operators 
// let n = 3; 
// console.log(n);

// n += 5;

// console.log(n); 



//comparision operator  == != < > <= >= === !==
//comparision operators always provide the boolean result(true/false)

// let a=10;
// let b="10";
// let res = a===b;
// console.log(res);



// when we compare strings with comaprision operators, only the first non equal character is compare a/c to its ASCII value
// let a= "hii"
// let b="hello"
// let res= a>b;
// console.log(res);

//logical opeator && || ! result(a/c to the data which is logically comapred)


//&&  sare sahi hone chahiye..... ek bhi false hote hi sara false ho jayega
// || ek bhi true hoga to condition true ho jayega..... ek bhi glt hua to koi dikkt nhi h....bs ek shi ho jaye


//comparison between boolean values
//true && true && true= true
//true && false && true= false
//false || ture || false= true
// false|| false || false= false

//falsy values = 0, '', null, undefined, NaN, False

//-1 && -0.5 && true && null && 2= null
//undefined || NaN || -0.8|| 12= -0.8




//control flow
//1. conditional statmets if else switch
//2. iterative statments



//simple if
//if(condition==true){
    //true statments
// }



//simpleif-else
//if(condition==true){
    //true condition
// }else{
//     //do something else

// }

//ladder/multiple if-else
//if(condition==true){
    //lets do iit
// }
//  elseif(condition==true){
//     lets do nit
//  } elseif(condition==true){
    //10bhese
// } else{
//     //do else
// }

// let n=10;
//ladder if-else
// if(n>0){
//     console.log("positive")

// }else if(n<0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }







//simple if-else
// if(n>0){
//     console.log("positive number")
// }else{
//     console.log("negative number")
// }

//itterative statments/loops
// 1. entry control loops (while)
// 2. exit control loops (do-while)


//1. loop variable
//2.condition exp
//3. body of loop
//4. updation exp


//syntax
//var name
//while (condition)


//Do while loop

// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<=10);
// console.log("end of loop");



//for loop
// for(let i=1; i<=100; i=i+5){
//     console.log(i);
// }



// for(let i=1; i<=10; i++){
//     if(i % 2 != 0){
//         continue;
//     }
//     console.log(i);
// }


//break statment
// for(let i=1; i<=10; i++){
//     if(i % 2 != 0){
//         console.log("loop breaked")
//         break;
//     }
//     console.log(i);
// }
