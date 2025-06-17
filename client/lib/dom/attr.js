/* -------------------------------------------------------------------------- */
/*                       get / set Attributes from Nodes                      */
/* -------------------------------------------------------------------------- */

import { isString, isUndefined } from "../utils/type.js";
import { getNode } from "./getNode.js";

export function getAttr(nodeName, targetProp) {
    // if (typeof nodeName === 'string') nodeName = getNode(nodeName);
    if (isString(nodeName)) nodeName = getNode(nodeName);
    if (!nodeName) 
        throw new ReferenceError('getAttr 함수에 전달된 첫 번째 인수에 해당하는 항목을 찾을 수 없습니다.')
    if (!isString(targetProp)) 
        throw new TypeError('getAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 합니다.')
    return nodeName.getAttribute(targetProp);
}


export function setAttr(nodeName, targetProp, value) {
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

export function attr(nodeName, targetProp, value) {
    if(isUndefined(value)) return getAttr(nodeName, targetProp);
    else setAttr(nodeName, targetProp, value);
}
