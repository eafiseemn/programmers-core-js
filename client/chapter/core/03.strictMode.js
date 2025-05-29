/* -------------------------------------------------------------------------- */
/*                                 Strict Mode                                */
/* -------------------------------------------------------------------------- */

// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.

// #1 not defined variable (by var / const / let)

// no strict mode
/* 
jujeob = '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(jujeob);
*/

// strict mode
// Uncaught ReferenceError: jujeob is not defined
/*
"use strict";  
jujeob = '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(jujeob);
*/



// #2 this? --> window
console.log(this); // this => window 
//"use strict"; 모드에서는 this를 전역 객체로 찾는 게 불가능
// 모듈 프로그래밍, 클래스가 아닌 이상 언어적 차원에서 window를 보여주는 형태

let self = this;
if (self == window) {
    self = undefined;
}
console.log(self);