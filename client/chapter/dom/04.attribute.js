/* -------------------------------------------------------------------------- */
/*                     HTML Attributes vs. DOM Properties                     */
/* -------------------------------------------------------------------------- */

import { isString, isUndefined } from "../utils/type.js";
import { getNode } from "./getNode.js";
/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset


const about = getNode('.about');


// 1. about에 class 속성이 있는지 확인해주세요.
const hasAttr = about.hasAttribute('class');
console.log( hasAttr );

// 2. about의 class 값을 가져와주세요.
const _getAttr = about.getAttribute('class');
console.log( _getAttr );

// 3. about의 id 값을 'about'으로 설정해주세요.
about.setAttribute('id', 'aboutId');
console.log( about );

// 4. about의 data-name="hello" 속성을 설정해주세요.
// about.setAttribute('data-name', 'hello');
about.dataset.name = 'hello';

// 5. about의 data-name의 값을 "bye"로 변경해주세요.
about.dataset.name = 'bye';

// 6. about의 class 속성을 제거해주세요.
about.removeAttribute('class');

// 7. about의 모든 속성을 나열해주세요.
for(const a of about.attributes) {
    console.log( a );
}


function getAttr(nodeName, targetProp) {
    // if (typeof nodeName === 'string') nodeName = getNode(nodeName);
    if (isString(nodeName)) nodeName = getNode(nodeName);
    if (!nodeName) 
        throw new ReferenceError('getAttr 함수에 전달된 첫 번째 인수에 해당하는 항목을 찾을 수 없습니다.')
    if (!isString(targetProp)) 
        throw new TypeError('getAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 합니다.')
    return nodeName.getAttribute(targetProp);
}

let valGetAttr = getAttr('.first', 'class');
console.log( valGetAttr );
valGetAttr = getAttr('#java', 'id');
console.log( valGetAttr );


function setAttr(nodeName, targetProp, value) {
    if (isString(nodeName)) nodeName = getNode(nodeName);
    if (!nodeName) 
        throw new ReferenceError('setAttr 함수에 전달된 첫 번째 인수에 해당하는 항목을 찾을 수 없습니다.')
    if (!isString(targetProp)) 
        throw new TypeError('setAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 합니다.')
    if (value === '') {
        nodeName.removeAttribute(targetProp);
        return;
    }
    if (!value) // value === '' 보다 위에 있으면 안됨
        throw new Error('setAttr 함수에 세 번째 인수를 입력해주세요.')
    nodeName.setAttribute(targetProp, value);
}

let valSetAttr = setAttr('.first','id','hello');
console.log ( getAttr('.first', 'id') );

valSetAttr = setAttr('.first','id','');
console.log ( getAttr('.first', 'id') );


function attr(nodeName, targetProp, value) {
    if(isUndefined(value)) return getAttr(nodeName, targetProp);
    else setAttr(nodeName, targetProp, value);
}

let valAttr = attr('.first', 'id', 'bye');
console.log ( attr('.first', 'id') );
valAttr = attr('.first', 'id', '');
console.log ( attr('.first', 'id') );
