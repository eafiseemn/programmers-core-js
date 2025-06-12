/* -------------------------------------------------------------------------- */
/*                                 String Type                                */
/* -------------------------------------------------------------------------- */
const {log} = console;


let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
log( stringTotalLength );   // 13

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
log( extractCharacter );    // i

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);
log ( immutableChangeCharacter ); // Pess is more.

// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(2,5);
// let subStr = message.subStr(1, 5);   // module 지원 불가


// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
log( indexOf );     // 5 (포함하는 경우 해당 index 양수를 반환)
indexOf = message.indexOf('not');
log( indexOf );     // -1 (해당 문자가 없으면 -1을 반환)

function checkBrowser() {
    const agent = navigator.userAgent.toLowerCase();
    let browserName;

    switch (true) {
        case agent.indexOf('edg') > -1 : browserName = 'MS Edge'; break;
        case agent.indexOf('chrome') > -1 && !! window.chrome : browserName = 'Chrome'; break;
        case agent.indexOf('safari') > -1 : browserName = 'Mac Safari'; break;
        case agent.indexOf('firefox') > -1 : browserName = 'Firefox'; break;
        case agent.indexOf('trident') > -1 : browserName = 'Trident'; break;
        default: browserName = "This is not Modern Browser!"
    }
    return browserName;
}

log( checkBrowser() );

let lastIndexOf;


let includes = message.includes('more');
log ( includes ); // true
includes = message.includes('less');
log ( includes ); // false

let startsWith = message.startsWith('Less');
log ( startsWith ); // true

let endsWith = message.endsWith('more');
log ( endsWith );   // false (.이 없음)

let str = '      a      b     c      d        e f    '

// 공백 잘라내기
let trimLeftStr = str.trimLeft();        // 지원 불가
log (trimLeftStr);
let trimRightStr = str.trimRight();      // 지원 불가
log ( trimRightStr );
let trim = str.trim();
log ( trim );
let replaceAll = str.replaceAll(' ', '');
log ( replaceAll );
let replace = str.replace(/\s/g,'');
log ( replace );



// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;