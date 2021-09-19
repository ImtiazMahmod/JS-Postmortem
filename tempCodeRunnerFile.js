function  parent() {
    const x = 10;
    function child() {
        const y = 20;
        console.log(x);// x in parent function
    }
    chile()
    console.log(y);//y in child function
}
parent();