// console.log([]==false);
// console.log(NaN !== NaN);

//function 
sayHi(); // works — "Hi"
function sayHi(){ 
    console.log("Hi");
}

sayBye(); // TypeError: sayBye is not a function
var sayBye = function() { console.log("Bye"); };

