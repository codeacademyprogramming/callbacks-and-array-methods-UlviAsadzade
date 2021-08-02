"use strict"

////////////////////////////////////////////////////////////////////////////////////////////////////

// Task-reverse

// function customReverse(arr) {
//     let newarr=[];
//     for (let i = arr.length; i > 0; i--) {
//         newarr.push(arr[i-1]);
//     }
//     return newarr;
// }

// let x = customReverse([1,2,3,4,5,6]);
// console.log(x);




////////////////////////////////////////////////////////////////////////////////////////////////

// Task-filter

// function customFilter(arr, cb) {
//     let newarray=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(cb(arr[i],i,arr)){
//             newarray.push(arr[i]);
//         }
//     }
//     return newarray;
// }

// function myFunction(value,index,array) {
//     return value%2==0;
// }

// let x = customFilter([1,2,3,4,5,6,7,8], myFunction);
// console.log(x);


//////////////////////////////////////////////////////////////////////////////////////////////////////


// Task-forEach



// function customForeach(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i],i,arr);
//     }
// }

// function myFunction(value,index,array) {
//     if(value%2==1){
//         console.log(value)
//     }
// }

// customForeach([1,2,3,4,5,6,7,8,9], myFunction);


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Task-some 


// function customSome(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if(cb(arr[i],i,arr)){
//             return true;
//             break;
//         }
//     }
//     return false;
// }

// function myFunction(value,index,array) {
//     return value%2==1;
// }

// let x = customSome([2,4,6,7], myFunction);
// console.log(x);


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Task-every 


// function customEvery(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if(!cb(arr[i],i,arr)){
//             return false;
//             break;
//         }
//     }
//     return true;
// }

// function myFunction(value,index,array) {
//     return value>5;
// }

// let x = customEvery([2,3,4,6,8], myFunction);
// console.log(x);


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Task - map


// function customMap(arr, cb) {
//     let newarr=[];
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(cb(arr[i],i,arr));
//     }
//     return newarr;
// }

// function myFunction(value,index,array) {
//     return value*5;
// }

// let x = customMap([1,2,3,4,5], myFunction);
// console.log(x);




