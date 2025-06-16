/* -------------------------------------------------------------------------- */
/*                                DOM traversal                               */
/* -------------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

const first = document.querySelector(".first");
console.log( first.nextElementSibling );

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// 1. nav 태그 요소
const nav = document.querySelector( "nav" );
console.log( nav );

// 2. nav 태그 안에 있는 about li 태그 요소
// const aboutLi = document.querySelector( "nav > .about" );
// const aboutLi = document.querySelector( ".navigation .about" );
const aboutLi = nav.querySelector( "li.about" );
console.log( aboutLi );

// 3. data-name 이 contact인 li 태그 요소
const dataNameLi = nav.querySelector(`li[data-name="contact"]`);
console.log( dataNameLi );

// 4. nav 요소 안에 있는 모든 자식 요소
const navChildAll = nav.querySelectorAll( "*" );
const _navChildAll = [...nav.children]; // children은 HTML collection을 반환하므로 Array화
console.log( navChildAll );
console.log( _navChildAll );

_navChildAll.forEach(li => console.log(li));

const li = _navChildAll.find(li => li.matches('.about'));
console.log( li );


console.clear()
function getNode(nodeName, context=document) {
    if (context.nodeType !== 9) context = document.querySelector(context);
        // nodeType 9 = DOCUMENT_NODE
    return context.querySelector(nodeName) };

function getNodes(nodeName, context=document) {
    if (context.nodeType !== 9) context = getNode(context);
    return context.querySelectorAll(nodeName) };

console.log( getNode('.second') );
console.log( getNode('.second', 'nav') );

function $(nodeName) { return document.querySelector(nodeName)};
console.log( $('#java') );



/* 문서 대상 확인 */
// - matches
// - contains