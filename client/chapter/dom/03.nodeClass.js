/* eslint-disable no-undef */
/* -------------------------------------------------------------------------- */
/*                               DOM Node Class                               */
/* -------------------------------------------------------------------------- */

const {log, clear} = console;

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* ------------------------------------------------------------------------ */

// EventTarget – EventTarget가 모든 DOM 노드의 베이스에 있기때문에 DOM 노드에서 '이벤트’를 사용할 수 있습니다.


// Node – getter 역할을 하는 parentNode, nextSibling, childNodes 등의 주요 트리 탐색 기능을 제공합니다. 
//        Text 클래스, Element 클래스, Comment클래스는 Node클래스를 상속받습니다.


// Element – nextElementSibling, children 이나 getElementsByTagName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메서드가 이를 기반으로 합니다. 
//           SVGElement, XMLElement, HTMLElement 클래스의 [베이스] 역할을 합니다.


// HTMLElement – HTML 요소 노드의 베이스 역할을 하는 클래스입니다.
//               HTMLInputElement – <input> 요소에 대응하는 클래스
//               HTMLBodyElement – <body> 요소에 대응하는 클래스
//               HTMLAnchorElement – <a> 요소에 대응하는 클래스


/* 노드 정보 ------------------------------------------------------------- */

const about = getNode('.about');

// - nodeType
log( about );
log( about.nodeType );

// - nodeName (vs. tagName)
log( about.nodeName );
log( about.nodeName === 'div');

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// * 기존 내용 삭제
// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
// * XSS 공격에 취약

const first = getNode('.first');
first.innerHTML = 'Hello';  // setter
log( first.innerHTML );     // getter

// 기존 문구에 추가 : 복합 할당 연산 사용
first.innerHTML += '-Hola!';



// - textContent
// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출

first.textContent = 'Bye';
first.textContent = '<div>Bye</div>'    // 태그도 텍스트인 상태 그대로 렌더링



/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

// first.hidden = true;      // display: {inline-block 등...} 있으면 CSS 우선순위가 높아서 적용 안됨
// first.hidden = false;

// let toggle = false;
// setInterval(() => {
//     first.hidden = toggle ? true : false;
//     toggle = !toggle;
// }, 500);


// gsap 사용 (명령형)
//<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js" defer></script>

log ( gsap );
gsap.to('.first', {
    opacity: 0,
    yoyo: true,
    repeat: 5,
    rotate: 360,
})

gsap.from('nav li', {
    x: 30, // translateX
    y: 100, // translateY
    opacity: 0,
    stagger: 0.2,
})