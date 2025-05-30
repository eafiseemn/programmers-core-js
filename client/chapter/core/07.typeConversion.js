/* -------------------------------------------------------------------------- */
/*                               Type Conversion                              */
/* -------------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(YEAR + " (" + typeof YEAR + ")");
console.log( String(YEAR) + " (" + typeof String(YEAR) + ")");
console.log( YEAR+'' + " (" + typeof (YEAR+'') + ")");


// undefined, null
let days = null;
console.log(days);
console.log(days + '');

let undef;
console.log(undef);
console.log(undef + '');

// boolean
let isClicked = false;
console.log(isClicked);
console.log(String(isClicked));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log( Number(friend) ); // NaN (계산되지 않음)

// null
let money = null;
console.log(money);
console.log(money * 1); // 0 (숫자로 계산 가능)
console.log(money / 1); // 0
console.log(+money); // 0

// boolean
let isActive = true;
console.log(isActive);
console.log(isActive * 1); // 1
isActive = false;
console.log(isActive / 1); // 0

// string
let numString = '100';
console.log(numString * 1); // 100

// numeric string
const width = '120.5px';
console.log(width);
console.log(width + 10); // '120.5px10'
console.log(width * 1 + 10); // NaN

// Integer, Float 으로 변환하는 함수
    // 주의! 기본이 10진수가 아님 -- 안전하게 사용하려면 10진수임을 명시해야 함
console.log(parseInt(width, 10)); // 120
console.log(parseFloat(width, 10)); // 120.5

let widthEnlarge = parseFloat(width, 10) + 10;
console.log(widthEnlarge + 'px'); // 130.5px


/* 데이터 → 불리언 ---------------------------------------------------------- */
// 조건문에서 많이 사용

// console.clear();

// undefined
console.log(Boolean(friend)); // false
// null
console.log(Boolean(money)); // false
// 0
console.log(Boolean(0)); // false
// '' (빈 문자열)
console.log(Boolean('')); // false
// NaN
console.log(Boolean(NaN)); // false
// 그 외의 것들...
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // true
console.log(Boolean(-1)); // true
console.log(!!{}); // true
console.log(!![false]); // true
console.log(!!(()=>{})); // true
