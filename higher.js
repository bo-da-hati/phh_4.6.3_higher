//高階関数
function myHigherFunction(func) {
    console.log('myFunction');

    func();
}
//普通の関数
function outsideFunction() {
    console.log('outsideFunction');
}


myHigherFunction(outsideFunction);