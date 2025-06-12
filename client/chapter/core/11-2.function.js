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
    arguments.__proto__ = Array.prototype;  // [[Prototype]] 을 설정하는 것
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
    // filter  : 새로운 배열을 반환

const shinee = ['종현', '진기', '기범', '민호', '태민'];
const newShinee = shinee.map(function(name, index) {
    return `<li data-order="${index}">[샤월]${name}</li>`
})
    // 원본을 훼손하지 않고 새로운 배열을 내보냄

console.log(newShinee);
document.body.insertAdjacentHTML('beforeend', newShinee.join('')) // HTML에 삽입

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
    console.log("hello, I'm anonymous!")
};

anonymousFunctionExpression();

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
    console.log("hello, I have my own name!")
};

namedFunctionExpression();


// 콜백 함수 (표현)식
let callbackFunctionExpression = function(condition, success, fail) {
    // console.log(condition);
    // console.log(success);
    // console.log(fail);
    if (condition) success();
    else fail();
};

callbackFunctionExpression(
    true,
    function(){ console.log('Success!'); },
    function(){ console.log('Failed..'); }
);
callbackFunctionExpression(
    false,
    () => { console.log('Wow, you win!'); },
    () => { console.log('You Lose..'); }
);


// 콜백 함수에서 변수 받기(1) - url
function movePage(url, success, fail) {
    if (url.includes('https://')) {
        success(url);
    } else fail();
}

movePage(
    'https:///www.naver.com/',
    (url) => { 
        console.log(`현재 입력하신 url은 ${url} 입니다.`); 
        console.log('3초 뒤 해당 사이트로 이동합니다.'); } ,
    () => { console.log('잘못된 url 정보를 입력하셨습니다.'); }
);

// 콜백 함수에서 변수 받기(2) - 위치 서비스
function getGeoLocation(success) {
    navigator.geolocation.getCurrentPosition(function(so) {
        // 서버와 통신하는 함수 --> 실행하는데 일정 시간이 소요됨
        const lat = so.coords.latitude;
        const lon = so.coords.longitude;
        const data = [lat, lon];

        // return data; 
            // 지연 처리되는 값은 나중에 실행되기 때문에 제대로 return되지 않음
            // (값을 받지 못해서 그대로 undefined를 반환함)

        success(data);
            // 값(arguments)이 떨어져야 실행되도록 콜백 함수를 넣어줌
    })
}
getGeoLocation( function(value) {
    // value = success(data); 와 같은 상태
    console.log(value);
} );

    // promise, async await 처럼 실행될때까지 기다리게 하는 방법도 있음
    // async await을 사용할 경우 const value = getGeoLocation(); 과 같이 간결하게 사용 가능




// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// encapsulation (캡슐화) 
(function() {
    var a = 'randomNumber'
    console.log("hello! I'm IIFE")
})() // anonymous function - 함수 선언과 동시에 실행

// console.log(a); // encapsulated 스코프 안에 var도 가둠


// encapsulated function 의 변수를 가져오려면?
const MASTER = (function() {
    var encryptedPassword = 'qwr91234hikasd9f9u0'

    return {
        getKey() {
            return encryptedPassword;
        },
        setKey(value) {
            encryptedPassword = value;
        }
    }
})()

console.log( MASTER );
console.log( MASTER.getKey() ); // encryptedPassword 반환

MASTER.setKey('newEncryptedPassword') ; // password 변경
console.log( MASTER.getKey() ); // newEncryptedPassword 반환
    
    // MASTER 외에는 값에 접근하거나 변경하지 못하도록 캡슐화한 것 (데이터 보존)
    // 최근에는 module programming 을 데이터 보존에 주로 사용함
    // 그러나 closure에는 여전히 사용됨


// IIFE 에 arguments를 전달하는 방법?
const newIIFE = (function(myNewName) {
    console.log( myNewName );
})(window);

    // module programming에서
    // import { window as myNewName } from './...' 
    // 처럼 쓰는 형태와 동일




console.clear();
/* 함수를 작성하는 순서 ------------------------------------------------------
1. function name: 함수의 이름
2. argument: 함수 실행부 작성
3. parameter: 매개변수 확인
4. return value
5. validation
6. Test Driven Development (TDD)
------------------------------------------------------------------------- */

/* 함수 작성 실습(1): px -> rem 변환하기 ----------------------------------------- */

// rem의 기본 개념:
    // CSS에서 :root 는 html
    // 기본 :root 속성 존재 (e.g. font-size : 16px;)
    // rem = root-em : html의 폰트 사이즈를 그대로 가져가는 것
    // e.g. font-size : 2rem; = font-size : 32px;
    // rem 단위를 사용할 경우 :root만 바꾸면 전체를 조정할 수 있음

// 함수의 동작: 내가 원하는 font-size (숫자 또는 px value) -> rem으로 변환
    // rem(pxValue: number|string, base: number):string;
    // pxValue 는 숫자 또는 문자이며, base는 기본 1rem 의 값을 설정
    // output은 rem('30px', 10) = '3rem' 형태의 string으로 반환 
let rem ;

function calcRem(pxValue, base = 16) {
    if (!pxValue) {
        throw new Error('calcRem 함수의 첫 번째 인수는 필수 입력값입니다. (px값 입력)')
    }
    if (typeof base !== "number") {
        throw new Error('calcRem 함수의 두 번째 인수는 숫자로만 입력해야합니다.')
    } 
    if (typeof pxValue === 'string' && pxValue.includes('px')) {
        // pxValue = +pxValue.replace('px','');
        pxValue = parseInt(pxValue);
    } else if (!isNaN(pxValue) && pxValue > 0) {
        pxValue;
    } else {
        throw new Error('잘못된 px 값을 입력하셨습니다.')
    }

    return `${pxValue/base}rem`;
}

console.log(calcRem(20));
console.log(calcRem('25px'));
console.log(calcRem('30px', 10));

console.assert(calcRem(20) === '1.25rem');
console.assert(calcRem('25px') === '1.5625rem');
console.assert(calcRem('30px',10) === '3rem');



/* 함수 작성 실습(2): CSS 요소 변경하기 ----------------------------------------- */
// css(node: string, prop: string, value: number|string) : string;

function setCss(node, property, value) {
    // className = className.replace('.', '');
    // const targetElem = document.getElementsByClassName(className)[0];
    let targetElem;
    if (typeof node === 'string') {
        targetElem = document.querySelector(node); }
        // querySelector는 문서 내 첫번째 해당 요소를 반환
    
    // argument type 에러 반환
    if (!targetElem) {
        throw new Error('요청하신 node 요소를 찾을 수 없습니다.');
    }
    if (typeof property !== 'string') {
        throw new Error('setCSS 함수의 두 번째 인수는 문자 타입이어야 합니다.');
    }
    if (!value) throw new Error('setCSS 함수의 세 번째 인수는 필수 입력값입니다.');

    // 유효한 style 확인
    if(!(property in document.body.style)) {
        throw new ReferenceError('setCSS 함수의 두 번째 인수는 유효한 CSS 속성이어야 합니다.')
    }

    targetElem.style[property] = value;
}

setCss('.first', 'color', 'dodgerblue');
setCss('#java', 'font-size', '50px');
// setCss('.hello', 'background-color', 'lightpink');
// setCss(123, 'color', 'hotpink');
// setCss('.second', 12123, 'hotpink');
// setCss('.second', 'color');
// setCss('.second', 'bgcolor', 'orange');



/* 함수 작성 실습(3): CSS 요소 가져오기 ----------------------------------------- */
    
function getCss(node, property) {
    // argument type 에러 반환
    if (!node || !property) throw new Error('setCSS 함수의 두 인수는 필수 입력값입니다.');
    if (typeof property !== 'string' || typeof node !== 'string') {
        throw new Error('setCSS 함수의 인수는 모두 문자 타입이어야 합니다.');
    }

    // 대상 node 요소 탐색
    let targetElem = document.querySelector(node);
    if (!targetElem) {
        throw new Error('요청하신 node 요소를 찾을 수 없습니다.');
    }
    // 유효한 style 확인
    if(!(property in document.body.style)) {
        throw new ReferenceError('setCSS 함수의 두 번째 인수는 유효한 CSS 속성이어야 합니다.')
    }

    // getComputedStyle() 사용
    return getComputedStyle(targetElem)[property];
}

const fontSize = getCss('.first', 'font-size');
console.log(fontSize);

console.log ( getCss('.first', 'color') );
console.log ( getCss('#java', 'font-size') );
console.log ( getCss('.second', 'font-family') );



/* 함수 작성 실습(4): CSS 요소 가져오거나, 설정하기 ----------------------------- */
// getCSs() 와 setCss() 를 하나로 합쳐보기

function css(node, parameter, value) {
    // if(!value) {
    //     getCss(node, parameter);
    // } else {
    //     setCss(node, parameter, value);
    // }
    return !value ? getCss(node, parameter) : setCss(node,parameter,value);
}

console.log( css('.first', 'color') );
css('.third', 'background-color', 'lightblue');

// 화살표함수 형태로 표현하기
const _css = (node, parameter, value) => !value ? getCss(node,parameter) : setCss(node,parameter,value);
_css('.third', 'background-color', 'lightpink');



// IIFE 패턴으로 유틸 함수 관리하기
    // getCss(); 와 setCss(); 는 사용하지 않고 css(); 만 사용하는 컨벤션이 있으면
    // get/set() 함수에 접근할 수 없도록 막는 것이 관리상 편의
/*
    const css = (function() {
        function setCss() {...}
        function getCss() {...}
        function css() {...}

        return css;
    })()
*/
    // 최근에는 별도의 .js 파일에 함수를 담아서, 원하는 함수만 export { css } 하는 형태로 사용



// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 