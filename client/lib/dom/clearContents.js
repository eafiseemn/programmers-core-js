/* -------------------------------------------------------------------------- */
/*                        clear innerText / inputValues                       */
/* -------------------------------------------------------------------------- */

import { isString } from "../utils/type.js";

export default function clearContents(node) {
    if(isString(node)) node = document.querySelector(node);
    if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
        node.value = '';
        return;
    }
    node.textContent = '';
}