// hoisting

 console.log(a);//a = undefined
var a =10;//create a = undefined

///creatinal phase---take declaration
// a=undefined
///execution--assign to variable
//a=10
b();
function b(){
    console.log('hi');
}

//creational phase
//b = ref

// executional phase
// b()

// in arrow function
// first as variable
// then as function 


