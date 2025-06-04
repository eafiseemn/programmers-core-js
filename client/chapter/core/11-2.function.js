/* eslint-disable no-unreachable */
/* -------------------------------------------------------------------------- */
/*                           Functions → Expression                           */
/* -------------------------------------------------------------------------- */


// 함수 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
    // 집합 데이터 : 함수 안에서만 접근 가능한 인수들의 집합 객체 (arguments; 유사 배열)
    console.log(arguments);
    // 매개변수가 아무리 많아져도 쉽게 선언할 수 있음

    let total = 0;

    // (1) for 문 사용하기 (잘 사용하지 않음)
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;

    // (2) for...of 문 사용하기
    for (const value of arguments) {
        total += value;
    }
    return total;

    // (3) 배열의 매서드 사용하기
        // forEach, reduce, map, filter, ...
    // (3-0) arguments 는 유사 배열이므로 배열로 먼저 만들어야 함
        // array instance method
            // const arr = Array.prototype.slice.call(arguments);
            // Array의 prototype을 빌려서(call) 잘라내기(slice)
        // array static method
            // const arr = Array.from(arguments); 
    const arr = [...arguments]; // spread syntax (operator) : 전개 연산자
    console.log(arr);

    // (3-1) forEach
    arr.forEach( function(value, index) { 
        console.log( `${index} : ${value}`);
        total += value; 
    } );
    return total;
        // forEach는 값을 반환하지 않고 로직 순환만 하기 때문에,
        // 별도의 total 값에 더하는 방식 사용 필요

        /* 아래 내용과 동일:
        function a(value, index) { 
            console.log( `${index} : ${value}`);
            total += value; 
            }
        arr.forEach(a);
        */

    // (3-2) reduce
    total = arr.reduce( function(prev, current, index) {
        // console.log(prev);
        // console.log(current);
        // console.log(index);
        let acc = prev; // acc = accumulated value (누적값)
        return acc + current;  // 알아서 차례차례 들어감
    }, 0)  
        // 초기값이 없으면 prev = 배열의 첫번째 값, current = 배열의 두번째 값부터
        // 초기값을 지정해주면 (0), current = 배열의 첫번째 값부터

    return total;
    
    // 보통 reduce는 아래와 같은 방식으로 사용
    return arr.reduce( function(acc, current, index) {
        return acc + current;
    }, )
    // reduce는 새로운 값을 반환 (값의 형태는 초기값에 따라 달라짐 -> 어떤 값도 가능)
    

    // (3-3) arguments = 유사 배열: 굳이 배열로 바꾸지 않고 forEach를 한 번만 빌려쓰기
        // call(빌리는 대상, 인수: 빌려쓰려는 함수가 필요로 하는 매개변수들)
    Array.prototype.forEach.call(arguments, function(value){
        total += value;
    })
    return total;

    // (3-4) 부모 바꿔치기
    arguments.__proto__ = Array.prototype;
    console.log(arguments);  // array로 바뀜
    return arguments.reduce( function(acc, current, index){
        return acc + current;
    } )
};

const result = calculateTotal(1000, 3000, 5000, 2300, 5000, 2300, 3000, 400);
console.log( result );


// cf) 배열 매서드 - map
console.clear();
    // forEach : 값을 반환하지 X
    // reduce  : 새로운 값을 반환 (any)
    // map     : 새로운 '배열'을 반환

const shinee = ['종현', '진기', '기범', '민호', '태민'];
const newShinee = shinee.map(function(name, index) {
    return `<li data-order="${index}">[샤월]${name}</li>`
})
    // 원본을 훼손하지 않고 새로운 배열을 내보냄

console.log(newShinee);
document.body.insertAdjacentHTML('beforeend', newShinee.join('')) // HTML에 삽입

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
