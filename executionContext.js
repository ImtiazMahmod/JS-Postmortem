///execution Context

// context means container 
const name = 'Mr';///global context

function context(){
    const x=10;///local context
    console.log(x);
}
console.log(x);
context();
//context works in two stage
//creation phase--- read
//executional phase --assign 
   /*  global
name = undefined//Mr;
context = ref; */

    /* local
x= undefined//10; */