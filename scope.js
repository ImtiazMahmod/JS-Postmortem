// scope is an area from where access to variable or function

// global scope
//যেখানে ভেরিয়েবল ডিক্লেয়ার/ফাংশন করলে সব জায়গা হতে একসেস করা যায়
const x = 10;
console.log(x);

function hello() {
    //local scope
    ///যেখানে ভেরিয়েবল ডিক্লেয়ার/ফাংশন করলে তার বাহির হতে হতে একসেস করা যায় না
    const y = 50;
    console.log(x);
    function c() {
        console.log('local');
    }
}

hello(x);
c();
console.log(y);