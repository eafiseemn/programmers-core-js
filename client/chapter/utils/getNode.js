/* -------------------------------------------------------------------------- */
/*                      querySelector / querySelectorAll                      */
/* -------------------------------------------------------------------------- */

/**
 * @function 입력한 선택자에 해당하는 DOM Element를 찾는 함수
 * @author Emily
 * @param {string} nodeName - CSS 선택자 문자열 ex) '.class', '#id', 'div'
 * @param {Document | HTMLElement} context - 부모가 될 context (default는 document 입니다)
 * @return {HTMLElement | null} - 매칭된 첫 번째 요소 또는 Null일 수 있습니다.
 * @example
 * const btn = getNode('#button');
 * const li = getNode('li','.navigation');
 */

function getNode(nodeName, context=document) {
    if (context.nodeType !== 9) context = document.querySelector(context);
        // nodeType 9 = DOCUMENT_NODE
    return context.querySelector(nodeName) };

function getNodes(nodeName, context=document) {
    if (context.nodeType !== 9) context = getNode(context);
    return context.querySelectorAll(nodeName) };
