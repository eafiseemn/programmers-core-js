/* -------------------------------------------------------------------------- */
/*                                 Number Type                                */
/* -------------------------------------------------------------------------- */


// 1억 (million)
// 0의 갯수가 많아 금액을 쉽게 파악하기 어렵습니다.
let riches = 100000000;

// 1,000 단위 구분하듯 사용할 수 있을까요?
riches = 100_000_000;

// 숫자 옆에 `e`를 붙여 0의 갯수를 설정할 수 있습니다.
riches = 1e8;


// 그렇다면 아래 작성된 숫자 값은 얼마일까요?
riches = 1.45e6; // → 1.45 * 10 ** 6 = 1450000


// 작은 수도 `e`를 사용해 표현할 수 있습니다.
riches = 1e-6; // → 1 / 10 ** 6 = 0.000001


/* 어림수 ---------------------------------------------------------------- */
const {log} = console;

let number = 90_127.53100032;

// 내림
let floor = Math.floor(number);
log( floor );   // 90,127

// 반올림
let round = Math.round(number);
log( round );   // 90,128

// 올림
let ceil = Math.ceil(number);
log( ceil );    // 90,128

// 절삭(소수점 이하)
let truncate = Math.trunc(number);
log( truncate );    // 90,127

// 난수
let random = Math.random() * 100;
log( random );

// 여러 수 중, 최댓값
let max = Math.max(30, 50, 100, 100);
log ( max );    // 100

// 여러 수 중, 최솟값
let min = Math.min(30, -5, 10, 100);
log ( min );    // -5

// 거듭제곱
let pow = Math.pow(2, 5);
log ( pow );    // 32

// 절대값
let abs = Math.abs(-10);
log ( abs );    // 10

// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax = (minLimit, maxLimit) => {
    return Math.round(Math.random() * (maxLimit - minLimit) + minLimit);
        // (maxLimit - minLimit) 으로 난수가 가질 수 있는 범위를 지정
        // + minLimit 으로 최소값 설정
};

log ( getRandomMinMax(2, 10) );


/* 진법 ------------------------------------------------------------------ */

// 16진수 0x
//  8진수 0o
//  2진수 0b

// parseInt(string, base) → 진수 2 <= base <= 36
// number.toString(base) → base 진수 변환 후 문자 값 반환


/* 컬러 변환 -------------------------------------------------------------- */

const colorChip = {
  red: 207,
  green: 102,
  blue: 13,
};

// colorChip의 red, green, blue 값을 변환해봅니다.

// 1. 10진수 → 16진수 변환하기

// 2. 16진수 → 10진수 변환하기