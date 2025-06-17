/* -------------------------------------------------------------------------- */
/*                             add alert-error                                */
/* -------------------------------------------------------------------------- */

import { addClass, removeClass } from "./css.js";
import { getNode as $ } from "./getNode.js";
// import { isString } from "../utils/type.js";

export function showAlert({target:node, className, message, timeout = 1000}) {
    // if(isString(node)) node = $(node);

    addClass(node, className);
    $(node).textContent = message;
    
    setTimeout(()=>{
        removeClass(node, className);
    }, timeout)
}