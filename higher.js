//高階関数
function myHigherFunction() {
    console.log('myFunction');

    return outsideFunction;
}
//普通の関数
function outsideFunction(value) {
    console.log('value :' + value);
}

let returnValue = myHigherFunction();
returnValue('引数だよ');
//myHigherFunction(outsideFunction);

