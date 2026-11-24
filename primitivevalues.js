let a = 10;
let b = a;
b = 20;
console.log("a=",a);
console.log("b=",b);

//prediction: a=10,b=20

let name1 = "Alice";
let name2 = name1;
name2 = "Bob";
console.log("name1 is",name1);
console.log("name2 is",name2);

//prediction: name1= Alice, name2=Bob

//changing b did not affect a because they are primitive values 
//and primitive values are stored in a stack having their own memory
//therefore changing the value of one variable won't affect the other
//similar to name1 and name2



