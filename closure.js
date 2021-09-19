//closure 
//variable or function access from child function 
// not access variable or function from parent function
//যে বিহেভিয়ারের কারণে return করার পরও  চাইল্ড পেরেন্টকে  একসেস করতে পারে তা  হচ্ছে ক্লোজার

/* function  parent() {
    const x = 10;
    function child() {
        const y = 20;
        console.log(x);// x in parent function
    }
    child()
    console.log(y);//y in child function
}
parent(); */
function parent() {
    const x = 10;
    return function () {
        const y = 20;
        console.log(x);
        // x in parent function
    }

}
// parent()();
console.log(parent());