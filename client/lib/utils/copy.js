/* -------------------------------------------------------------------------- */
/*                              copy to clipboard                             */
/* -------------------------------------------------------------------------- */

export function copy(text) {
    return navigator.clipboard.writeText(text); // return Promise Function
}