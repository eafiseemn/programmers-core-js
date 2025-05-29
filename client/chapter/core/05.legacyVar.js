/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.


// var는 변수의 중복 선언을 허용합니다.

var a = 10;
var a = 20;

/* let a = 20; */ // Error: Identifier 'a' has already been declared

console.log(a);


// var는 블록 스코프를 무시합니다.

{
    var b = 30;
    /* let b = 30; */  // Error: b is not defined
}
console.log(b);


// 선언하기 전 사용할 수 있는 var

console.log(c); // c = undefined (hoisting 영향)
var c = 40;
/* let c = 40; */ // Error: Cannot access 'c' before initialization



// 함수는 자신만의 스코프(함수 실행 환경)를 따로 가집니다.
var outside = 'outer'

function sum() {
    console.log(outside);
}
sum();

/*
function sum2() {
    var inside = 'inner'
}
sum2();  // Error: inside is not defined
console.log(inside);
*/

// 아래와 같은 형태로 함수 안에 있는 변수를 사용할 수는 있지만,
// 함수가 외부 변수를 건드리는 형태는 많은 문제를 일으킬 수 있으니 최대한 지양하는 것이 좋습니다.

/*
let outsideVar;
function sum3() {
    outsideVar = 'outer'
}
sum3();
console.log(outsideVar);
*/