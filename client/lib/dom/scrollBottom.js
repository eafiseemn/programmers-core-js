/* -------------------------------------------------------------------------- */
/*                          set scroll to Bottom Box                          */
/* -------------------------------------------------------------------------- */

import { getNode } from "./getNode.js";
import { isString } from "../utils/type.js";

// const recordListWrapper = getNode(".recordListWrapper");
// recordListWrapper.scrollTop = recordListWrapper.scrollHeight;


export function scrollBottom(node) {
    if (isString(node)) node = getNode(node);
    node.scrollTop = node.scrollHeight;
}