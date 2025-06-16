/* -------------------------------------------------------------------------- */
/*                                 DOM Styling                                */
/* -------------------------------------------------------------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const nav = getNode('nav');
console.log ( nav.className = 'nav' ); // setter
console.log ( nav.className ); // getter

// nav.className = 'hello';    // overwrite
console.log(nav);
nav.classList.add('hello');
nav.classList.remove('nav');
nav.classList.toggle('isActive');

/*
function addClassName(nodeName, className) {
    if(isString(nodeName)) nodeName = getNode(nodeName);
    if(!nodeName)
        throw new ReferenceError('입력하신 node 요소를 찾을 수 없습니다.');
    if(!className)
        throw new TypeError('addClassName 함수의 두 번째 인수 값은 필수값입니다.')
    if(!isString(className))
        throw new TypeError('addClassName 함수의 두 번째 인수 값은 문자열이어야 합니다.');
    nodeName.classList.add(className);
}

function addClassList(nodeName, classList) {
    if(isString(nodeName)) nodeName = getNode(nodeName);
    if(!nodeName)
        throw new ReferenceError('입력하신 node 요소를 찾을 수 없습니다.');
    if(!classList)
        throw new TypeError('addClassList 함수의 두 번째 인수 값은 필수값입니다.')
    if(!isArray(classList))
        throw new TypeError('addClassList 함수의 두 번째 인수 값은 배열이어야 합니다.');
    classList.forEach(element => {
        if(!isString(element))
            throw new TypeError('addClassList 함수의 두 번째 인수 배열에 들어간 값은 모두 문자열이어야 합니다.')
        nodeName.classList.add(element);
    });
}
*/

console.log ( getNode('.first') );
addClass('.first', 'peanuts');
addClass('.first', ['a','b','c']);
addClass('.first', {first:'d', second:'e'});
addClass('.first', 'f, g, h');

removeClass('.first', 'peanuts');
removeClass('.first', ['a','b','c']);
removeClass('.first', {first:'d', second:'e'});
removeClass('.first', 'f, g, h');
// removeClass('.first', '');

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

