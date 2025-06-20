/* -------------------------------------------------------------------------- */
/*                             insertAdjacentHTML                             */
/* -------------------------------------------------------------------------- */

import { getNode } from "../dom/getNode.js"
import { isString } from "../utils/type.js";

// - "beforebegin" – before
// - "afterbegin" – firstchild
// - "beforeend" – lastchild
// - "afterend" – after

export function insertBefore(node, content) {
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('beforebegin', content);
}
export function insertFirstChild(node, content) {
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('afterbegin', content);
}
export function insertLastChild(node, content) {
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('beforeend', content);
}
export function insertAfter(node, content) {
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('afterend', content);
}

export function insert(node, content, place) {
    switch (place) {
        case 'before':
            insertBefore(node, content);
            break;
        case 'firstchild':
        case 'first':
        case 'firstChild' :
            insertFirstChild(node, content);
            break;
        case 'lastchild':
        case 'last':
        case 'lastChild':
            insertLastChild(node, content);
            break;
        case 'after':
        case 'end':
            insertAfter(node, content);
            break;
        default:
            throw new ReferenceError('잘못된 위치 이름을 입력하셨습니다.');
    }
}