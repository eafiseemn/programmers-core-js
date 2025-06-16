
/**
 * @function DOM Element에 Class를 추가하는 함수
 * @author Emily
 * @param {HTMLElement | string} nodeName
 * @param {string | string[] | object} className
 * @return {void}
 */

function addClass(nodeName, className) {
    if(isString(nodeName)) nodeName = getNode(nodeName);
    if(!nodeName)
        throw new ReferenceError('입력하신 node 요소를 찾을 수 없습니다.');
    if(!className)
        throw new TypeError('addClass 함수의 두 번째 인수 값은 필수값입니다.')
    if(isArray(className)) {
        className.forEach(element => {
            if(!isString(element))
                throw new TypeError('addClassList 함수의 두 번째 인수 배열에 들어간 값은 모두 문자열이어야 합니다.')
            nodeName.classList.add(element);
        });
        return;
    }
    if(isObject(className)) {
        let _temp = Object.values(className);
        _temp.forEach(element => {
            if(!isString(element))
                throw new TypeError('addClassList 함수의 두 번째 인수 객체에 들어간 값은 모두 문자열이어야 합니다.')
            nodeName.classList.add(element);
        });
        return;
    }
    if(!isString(className))
        throw new TypeError('addClass 함수의 두 번째 인수 값은 문자열이어야 합니다.');
    if(className.includes(',')) {
        let _temp = className.replace(/\s*/g,'').split(',');
        _temp.forEach(element => {
            if(!isString(element))
                throw new TypeError('addClassList 함수의 두 번째 인수에 들어간 값은 모두 문자열이어야 합니다.')
            nodeName.classList.add(element);
        });
        return;
    }
    nodeName.classList.add(className);
}

// if 조건을 여러개 걸면 return을 해야 뒤의 코드가 실행되지 않는다 (아니면 else if 조건으로..)
// 아니면 return을 넣지 않고, 일단 array로 모두 바꾼 다음에 forEach만 돌리는 방법 사용


/**
 * @function DOM Element에서 Class를 제거하는 함수
 * @author Emily
 * @param {HTMLElement | string} nodeName
 * @param {string | string[] | object} className
 * @return {void}
 */

function removeClass(nodeName, className) {
    if(isString(nodeName)) nodeName = getNode(nodeName);
    if(!nodeName)
        throw new ReferenceError('입력하신 node 요소를 찾을 수 없습니다.');
    if(isObject(className)){
    className = Object.values(className)
    }
    if(className.includes(',')){
    className = className.replace(/\s*/g,'').split(',');
    }
    if(Array.isArray(className)){
        className.forEach((c)=> nodeName.classList.remove(c))
        return;
    }
    if(className === '') {
        nodeName.className = '';
        return;
    }
    nodeName.classList.remove(className);
}


/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {boolean} - 추가 true, 제거 false
 */

function toggleClass(nodeName, className) {
    if(isString(nodeName)) nodeName = getNode(nodeName)
    if(!nodeName)
        throw new ReferenceError('입력하신 node 요소를 찾을 수 없습니다.');
    return nodeName.classList.toggle(className);
}
