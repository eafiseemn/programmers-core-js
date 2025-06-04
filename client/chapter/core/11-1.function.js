/* -------------------------------------------------------------------------- */
/*                           Functions → Declaration                          */
/* -------------------------------------------------------------------------- */

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);


function getRandomValue() {
    return Math.random() > 0.5 ? 1 : 0;
}


// 함수 선언
function calcPrice(
    priceA, 
    priceB = getRandomValue(), 
    priceC = getRandomValue(), 
    priceD = getRandomValue()
) {
    // default value 외 undefined 처리 방법
    // if (priceD === undefined) priceD = 0;
    // if(!priceD) priceD = 0;
    // priceD = priceD || 0;
    // priceD ||= 10;  // 실제로 d=0이 들어왔을 때도 10으로 반환
    // priceD = priceD ?? 0;
    // priceD ??= 0;

    if(!priceA) {
        throw new Error('calcPrice 함수는 1개 이상의 매개변수를 설정해야 합니다.')
    }

    return priceA + priceB + priceC + priceD;
}

// 함수 호출
const result = calcPrice(1000);
console.log( result );


// 함수 값 반환
function sayHi() {
    return 'hello~~'
}

const a = sayHi();   // 'hello~~' (return 값)
const b = sayHi;     // sayHi() (function 자체)
console.log(b());    // 'hello~~' (b에 함수가 담겼으므로 원래 함수 실행됨)

// 매개 변수 - 콜백 함수
function ok() {
    return '동의하셨습니다.'
}
function cancel() {
    return '취소되었습니다.'
}
function ask(question, yes, no) {
    // let question = '동의합니까?'
    // let yes = function ok() {...}
    // let no = function cancel() {...}
    if (confirm(question)) yes();
    else no();
}
ask('동의합니까?', ok, cancel);
ask('동의합니까?', function(){}, function(){}); // 이름을 지정하지 않고 전달해도 동일

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
    // 1. 함수는 하나의 기능만을 수행해야 한다.
    // 2. 외부변수를 직접 수정하지 않는다.
    // 3. 함수는 재사용성이 좋아야 한다. (매개변수 활용)
    // 4. 함수의 이름은 그 기능을 명확히 표현해야 한다. (동사 활용; 가독성 높게)
    // 5. 인자와 인수를 4개 이상 사용하는 것은 지양해야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
let rem;




// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.