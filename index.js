
// //Beginner Challenges

// // //Q1

// // function addition(num1, num2){

// // return (num1 + num2)
// // }
   

// // console.log (addition(3, 2))

// // //Q2

// // function hoursIntoSeconds(hour){
// //     return hour * 60 * 60

// // }

// // console.log(hoursIntoSeconds(2))

// // //Q3

// // function calcPerimeter(length, width){
// //     return (length + width) * 2;


// // }

// // console.log (calcPerimeter(6, 7));

// // //Q4

// // function calcArea(base, height){
// //     return (1/2 *base * height);
// // }

// // console.log(calcArea(3,2));

// // //Q5

// // function appendFrontend(word){
// //     return word + "Frontend";

// // }

// // console.log(appendFrontend('Apple'));

// // //Q6 

// // function sumGreaterThan100(number1, number2){
// //     return number1 + number2 >= 100
      
// // }



// // console.log(sumGreaterThan100(100, 5))

// // //Q7

// // function lessThanOrEqualToZero (number){
// //     return number <= 0;

// // }

// // console.log(lessThanOrEqualToZero(-0))

// // //Q8

// // function oppositeBoolean(bool){
// //    return !bool

    
// // }

// // console.log(oppositeBoolean(true))

// // // Q9

// // function isNotZero (number0){
// // return number0 !== 0
// // }

// // console.log(isNotZero(0))

// // //Q10

// // function calcRemainder(numero1, numero2){
// //     return numero1 % numero2;

// // }

// // console.log(calcRemainder(7,8))

// // //Q11 

// // function isOdd(one){
// //     return one % 2 !== 0
// // }
// // console.log(isOdd(3))

// // //Q12

// // function booleanInteger(numero){
// //     if (numero % 2 ===0){
// //         return 1;
// //     }

// //     return -1;

// // }
// // console.log(booleanInteger(2));

// // //Q13 

// // function isLoggedInAndSubscribed (user, status){

// //     if (user==="LOGGED_IN" && status === "SUBSCRIBED"){
// //         return true;
// //     }

// //     return false;

// // }

// // console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))

// /* MEDIUM CHALLENGES */

// // //Q1
// // function filterOutFalsy (num1, num2){
// //     if (!num1){
// //         return num1 

// //     }

// //     else {
// //         return num2
// //     }

// // }

// // console.log(filterOutFalsy(0, 500))

// //To shorten code do:

// //return !num1 ? num1 : num2;

// //Q2

// // function arrLength(arr){
// //     return arr.length;

// // }
// // console.log(arrLength([]))

// // //Q3

// // let array = ['dog', 'cat', 'ball']
    


// // console.log(array[array.length-1]);

// //or

// // function arrLength(arr) {
// //     return arr[arr.length-1];

// // }

// // console.log(arrLength([0, 1, 2, 3]));

// //Q4

// // function arrSum(summ){
// //     let sum = 0;
// //     for (let i = 0; i < summ.length; ++i){
// //         // This is how you loop through every element in an array

// //         sum = sum + summ [i];

// //         // array[i] to loop through every number
// //     }
// //     return sum;
// // }

// // console.log(arrSum([2,2,2]));

// // //Q5.

// // function progressiveSum(num) {
// //     let sum = 0;
// //     for (let i = 1; i <= num; ++i) {
// //         sum = sum + +i;
// //     }

// //     return sum

// // }
// // console.log(progressiveSum(3))

// // //Q6

// // function calcTime (seconds){

// //     let timerMinutes = Math.floor(seconds / 60);
// //     let timerSeconds = seconds % 60;

// //     if (timerMinutes.toString().length === 1) {
// //         timerMinutes = '0' + timerMinutes
// //     }
    
// //     return timerMinutes + ':' + timerSeconds;


// // }
// // console.log(calcTime(50)); 

// // //Q7

// // function getMax (arr){

// // let max = arr [0];
// //     for (let i = 1; i < arr.length; ++i){
// //         if (arr[i] > max) {
// //             max = arr[i];
// //         }
    
// //     }

// //     return max;

    

// // }
// // console.log(getMax([-50, -100 -300]))

// //Q8

//     // function reverseString (string){

//     //     let reverse = '';

//     //     for (let i = string.length-1; i >= 0; i--){
//     //         reverse += string[i];
//     //     }

//     //     return reverse;


//     // }
//     // console.log(reverseString("David"))

// //Method above uses decrementing loop

//     // function reverseString (string){
//     //     let reverse = "";

//     //     for (let i = 0; i < string.length ; ++i) {
//     //         //This is how you loop through every character in a string
//     //         reverse = string[i] + reverse;
//     //     }

//     //     return reverse;

//     // }

//     // console.log(reverseString('David'))

// //Method above uses incrementing loop

// //Q8 - Array reverse property

//     // function reverseString(string){
//     //     return string.split('').reverse().join('')

//     // }
//     // console.log(reverseString('David'))

// //Q9- Turn every element in an array into 0 

// //Q9 - Method 1- For loop

//     // function convertToZeros(string){

//     //     let convert = [];

//     //     for (let i = 0; i < string.length; ++i) {
//     //         convert[i] = 0
//     //     }

//     //     return convert;
    
//     // }
//     // console.log (convertToZeros([5, 100, 0]))

// // Method Above uses for loop method

// //Q9 - Method 2- Array fill

// // function convertToZeros(string){
// //     return string

// // }
// // console.log(convertToZeros(1, 2, 3))

// // let array = [1, 2, 3];
// // array.fill(0)

// // console.log(array)

// // Javascript - Beginner questions revision

// // //q1

// // function addition(numb1, numb2) {
// //     return numb1 + numb2 

// // }
// // console.log(addition(3, 2));

// // //q2

// // function hoursIntoSeconds(hours){

// //     return hours * 60 * 60;
// // }
// // console.log(hoursIntoSeconds(2))

// // //q3

// // function calcPerimeter (length, width){
// //  let perimeter = 2;
// //  let perimetercalc = perimeter * (length + width);
// //  return perimetercalc

// // }
// // console.log(calcPerimeter(6, 7));

// // //q4

// // function calcTriangleArea (base, height){
// //     let area = 0.5;
// //     let trianglearea = area * base * height;
// //     return trianglearea;

// // }
// // console.log(calcTriangleArea(3, 2))

// // //q5 extend a string

// // function appendFrontend(word){

// // let str = "frontend";
// // let append = word + str;
// // return append;

// // }
// // console.log(appendFrontend("apple"));

// // //q6

// // function sumGreaterThan100 (number1, number2){

// //     if (number1 + number2 > 100){
// //         return true
// //     }

// //     else {
// //         return false;
// //     }


// // }
// // console.log(sumGreaterThan100(110, 10))

// // //q7

// // function lessThanOrEqualToZero(number){
// //     if ( number <= 0){
// //         return true;
// //     }

// //     else {
// //         return false;
// //     }

// // }
// // console.log(lessThanOrEqualToZero(3))

// // //q8

// // function oppositeBoolean(bool){
// //     return !bool;

// //     // ! in front of a boolean value will return the opposite
// // }
// // console.log(oppositeBoolean(false))

// // //q9

// // function isNotZero(element){
// //     if (element !== 0) {
// //         return true

// //     } 
// // // !== opposite of === and != is opposite of ==
// //     else {
// //         return false;
// //     }

// // }
// // console.log(isNotZero(null))

// // //q10 

// // function calcRemainder ( numb1, numb2){
// //     let remainder = numb1 % numb2;
// //     return remainder

// // }
// // console.log (calcRemainder(4, 2));

// // //q11

// // function isOdd (numbers){
// //    return numbers % 2 !== 0
// // }
// // console.log(isOdd(3))

// // //q12

// // function booleanInteger(integer){

// // if (integer % 2 === 0){
// //     return 1;
// // }

// // else return -1;

// // }
// // console.log(booleanInteger(3));

// // //q13

// // function isLoggedInAndSubscribed(log, sub){

// //    if (log === "LOGGED_IN" && sub === "SUBSCRIBED"){
// //     return true;

// //    }

// //    else {
// //     return false;
// //    }

// // }
// // console.log(isLoggedInAndSubscribed('LOGGED_OUT', "SUBSCRIBED"))

// Javascript medium challenges

// //q1

// function filterOutFalsy(value1, value2){
//     return (!value1) ? value1 : value2;
// }

// console.log (filterOutFalsy([true, 'dog']))

// //q2 

// function arrLength(arr){
//     return arr.length;

// }
// console.log(arrLength([1, 2, 3, 4]));

// //q3

// function lastElem(array){
//     return array[array.length - 1]

// }
// console.log(lastElem([3, 2, 0 ,6, 2]));

// // q4

// function arrSum(arrey){
//     let sum = 0
//     for (let i = 0; i < arrey.length; ++i){
        
//         sum = sum + arrey[i];
//     }

//     return sum;

// }
// console.log(arrSum([2, 2, 2]))

// //q5

// function progressiveSum(number){
//     let sum = 0;
//     for (let i = 1; i <= number; ++i){
//         sum = sum + i;
        
//     }

//     return sum;

// }
// console.log(progressiveSum(3));

// //q6

// function calcTime (seconds){

//     let timerMinutes =  Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes

//     }

//     return timerMinutes + ':' + timerSeconds;

// }
// console.log (calcTime(70));

// //q7

// function getMax (arri){
//     let max = arri[0];
//     for (let i = 1; i = arri.length; ++i){
//         if (arri [i] > max){
//             max = arri[i];

//         }

//         return max;

        
//     }


// }
// console.log(getMax([-100, -200, -300]))

// //q8

// //Incrementing for loop

// function reverseString(word){
//     let reversedString = '';
//     for (let i = 0; i < word.length; ++i){

    

// }
// console.log(filterOutFalsy(['banana', 'apple', 'orange', NaN, 0]))

// //q11

// function convertToBoolean (arri){
//     return arri.map(elem => !!elem)
// }
// console.log(convertToBoolean([500, 0, "david", '', NaN]))

// JAVASCRIPT BEGINNER QUESTIONS REVISION //

//q1

// function addition(num1, num2){
//     return num1 + num2;

// }
// console.log(addition(7, 2))

// //q2

// function convertHoursIntoSeconds (hours){
//     return hours * 60 * 60;


// }
// console.log(convertHoursIntoSeconds(2))

// //q3 

// function calcPerimeter(length, width){
//     return 2 * (length * width);

// }
// console.log(calcPerimeter(7, 2))

// //q4

// function calcArea(base, height){
//     return (0.5 * base * height);

// }
// console.log(calcArea(7, 2));

// //q5

// function extendString (word){
//     return "frontend" + word;
// }
// console.log(extendString("apple"))

// //q6

// function sumGreaterThan100(numb1, numb2){
//     if (numb1 + numb2 > 100){
//         return true;

//     }

//     else {
//         return false;
//     }

// }
// console.log(sumGreaterThan100(50, 51));

// //q7

// function lessThanOrEqualToZero(number1){
//     if (number1 <= 0){
//         return true;
//     }

//     else {
//         return false;
//     }

// }
// console.log(lessThanOrEqualToZero(2))

// //q8

// function returnOppositeBoolean (bool){
//     return !bool;

// }
// console.log(returnOppositeBoolean(false))

// //q9

// function returnTrue (value){
//     if (value != 0){
//         return true
//     }

//     else {
//         return false;
//     }

// }
// console.log(returnTrue(3));

// //q10

// function calcRemainder(value1, value2){
//     return value1 % value2;
// }
// console.log(calcRemainder(7, 2));

// //q11

// function returnOdd (numero1){
//     if (numero1 % 2 !== 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(returnOdd(1))

// //q12 

// function isEven(num){
//     if (num % 2 === 0){
//         return 1;

//     }

//     else{
//         return -1;
//     }
    
// }
// console.log(isEven(1))

// //q13

// function checkUser (logged, subscribe){

//     if (logged === "LOGGED_IN" && subscribe === "SUBSCRIBED"){
//         return true;
//     }

//     else{
//         return false;
//     }
// }
// console.log(checkUser("LOGGED_OUT", "SUBSCRIBED"))

// //q14

// function checkUserOne (log, sub){

//     if (log === "LOGGED_IN" || sub === "SUBSCRIBED"){
//         return true;
//     }

//     else{
//         return false;
//     }
// }


// console.log(checkUserOne("LOGGED_IN", "SUBSCRIBED"));

//Javascript meidum challenges

//q1

// function filterOutFalsy(value1, value2){
//     if (!value1){
//         return value1
//     }

//     else {
//         return value2;
//     }

// }
// console.log(filterOutFalsy(0, 500));

// //q2

// function arrLength(array){
//     return array.length;

// }
// console.log(arrLength([1, 2, 3]))

// //q3

// function firstElem(elem){
//     return elem[elem.length - 1]

// }
// console.log(firstElem([3, 2, 0, 6, 2]))

// //q4

// function arrSum(array1){
    
//     let sum = 0;

//     for (let i = 0; i < array1.length; ++i){


//     sum =  sum + array1[i]
//     }

//     return sum;
    
  

// }
// console.log(arrSum([2,2,2]))

// //q5

// function progressiveSum(arr){
//     let sum = 0;
//     for (let i = 0; i <= arr; ++i){

//         sum = sum + i;
//     }
    

//     return sum
// }
// console.log(progressiveSum([3]))

// //q6

// function calcTime (seconds){

//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60; 

//     if (timerMinutes.toString().length === 1);{
//       timerMinutes = '0' + timerMinutes
//     }

   
//     return timerMinutes + ':' + timerSeconds;

    
// }


// console.log(calcTime(70));

// //q7

// function getMax(arr1){

//     let max = arr1[0];

//     for (let i = 1; i < arr1.length; ++i){
        
    

//     if (arr1[i] > max) {
//         max = arr1[i];
//     }

//     return max;

// }
// }

// console.log(getMax([200, 100, 0]))

// //q8


// function reverseString(string){

//     let reversedString = '';

//     for (let i = string.length - 1; i >= 0; --i){

//      reversedString += string[i];
//     }

//     return reversedString

// }
// console.log(reverseString('abc'));

// //q9

// // function convertToZeros(arr2){
// //     let emptyarray = [];

// //     for (let i = 0; i < arr2.length; ++i){

// //     emptyarray[i] = 0;

    

// // }

// // return emptyarray
// // }
// // console.log(convertToZeros([5, 10, 100]))

// //q9 array fill method

// function convertToZeros(arr2){

//     arr2.fill(0)

//     return arr2

// }
// console.log(convertToZeros([1, 2, 3]));

// //q10

// function removeApples(arr3){

//     return arr3.filter(elem => elem !== 'Apple')

// }
// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

// //q10 

// function removeApple(arr4){

//     let noApples = []

//     for (let i = 0; i < arr4.length; ++i){
//         if (arr4[i] !== 'Apple') {
//             noApples.push(arr4[i]);
//         }

        
    
//     }
//     return noApples;

// }
// console.log(removeApple(['Banana', 'Apple', 'Orange', 'Apple']))

// //q11

// function filterOutFalsi(arrey2) {
//     return arrey2.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsi(['', NaN, 500, null, false, 0]))

// //q11 
// function filterOutFalsies(arrey2){
//     let trueArray = [];
//     for (let i = 0; i < arrey2.length; ++i){
//          if (!!arrey2[i] === true){
//             trueArray.push(arrey2[i]);

//          }

//     }

//     return trueArray


// }
// console.log (filterOutFalsies(['', NaN, 500, null, false, 0]))

// //q12

// function convertToBoolean(arr5){

//     return arr5.map(elem => !!elem)

// }
// console.log(convertToBoolean([500, 0, "David", "", []]))

/*

JAVASCRIPT ADVANCED CHALLENGES

*/

//q1. show rating

// function showRating(rating){
//     let ratings = "";

//     for (let i = 0; i < 4; ++i){
//         ratings = ratings + ""
       
//         if ( i !== rating - 1 ){

//         ratings = ratings + "*"
//         }
//     }

//     return ratings;

// }
// console.log(showRating(4));