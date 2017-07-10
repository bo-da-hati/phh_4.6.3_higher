//高階関数
function myHigherFunction() {
    console.log('myFunction');

    return outsideFunction;
}
//普通の関数
function outsideFunction() {
    console.log('outsideFunction');
}

let returnValue = myHigherFunction();
returnValue();
//myHigherFunction(outsideFunction);

