/* -------------------------------------------------------------------------- */
/*                                  Operators                                 */
/* -------------------------------------------------------------------------- */

// const firstValue = prompt('첫 번째 값');
// const secondValue = prompt('두 번째 값');
// console.log(firstValue + secondValue); // 'firstValue' + 'secondValue' (문자 연결)
// console.log(+firstValue + +secondValue); // 숫자 변환
// console.log(Number(firstValue) + Number(secondValue));
// console.log((firstValue * 1) + (secondValue * 1));
// console.log((firstValue / 1) + (secondValue / 1));

// // prompt로 받은 값이 무조건 숫자로만 사용된다면
// const firstValueNumber = prompt('첫 번째 숫자값') * 1;
// const secondValueNumber = prompt('두 번째 숫자값') / 1;
// const thirdValueNumber = +prompt('세 번째 숫자값');

// console.log(firstValueNumber + secondValueNumber + thirdValueNumber);

// const testValue = prompt('아무 값이나');
// console.log(testValue);
// ESC, 취소 : Null, 그냥 확인 : '', ...


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = 10;
let b = 30;

// 단항 연산자
let unary = +a;
console.log(unary);

// 이항 연산자
let binary = +a + +b;
console.log(binary);

// 삼항 연산자
let ternary = a > 5 ? true : false;
console.log(ternary);
ternary = a+b < 5 ? "Yes, it's true." : "No, it's false.";
console.log(ternary);

/*
let message = '';

if ( heartbeat < 80 ) {
    message = '최악이야'
} else {
    message = '최고야'
}
=> 
*/  
let heartbeat = 90;
console.log(`안녕, 너를 만나서 ${heartbeat > 80 ? '최고야.' : '최악이야.'}`);
heartbeat = 60;
console.log(`안녕, 너를 만나서 ${heartbeat > 80 ? '최고야.' : '최악이야.'}`);


// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 2 - 1;

// 산술 연산자: 곱셈
let multiplication = 2 * 3;

// 산술 연산자: 나눗셈
let division = 2 / 5;

// 산술 연산자: 나머지
let remainder = 5;
console.log( remainder % 2 === 0 ? '짝수' : '홀수');

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let firstArray = [1,2,3];
let secondArray = [4,5,6];
let onlyWorkDefaultValues = firstArray + secondArray; // 1,2,34,5,6 형태로 문자 처리(toString)하여 병합
console.clear();
console.log(onlyWorkDefaultValues);

// 그럼 배열 두 개를 배열로 합치려면?
// 1. concat() -- 오래된 방식
onlyWorkDefaultValues = firstArray.concat(secondArray);
console.log(onlyWorkDefaultValues);
// 2. 전개 구문 spread syntax (전개 연산자 spread operator)
onlyWorkDefaultValues = [...firstArray, ...secondArray]; // ...array = e1, e2, e3 형태로 펼침
console.log(onlyWorkDefaultValues);

// cf) rest parameter : 함수의 매개변수에 사용하는 ...
/*
function sum(...rest) {

}
*/

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// 연산자 우선 순위에 따라 연산 과정을 유추해보세요.
let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
// total = ( 2 ) * ( 5 ) + 5 ** 3 = 2 * 5 + 125 = 10 + 125 = 135

// 위 코드를 읽기 쉽도록 변경합니다.
count = 10;
total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;