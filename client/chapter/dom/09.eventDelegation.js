/* -------------------------------------------------------------------------- */
/*                              Event delegation                              */
/* -------------------------------------------------------------------------- */

const links = getNodes('a');
const nav = getNode('.navigation');

// 각 <a> tag에게 이벤트를 거는 것이 아니라 그 부모인 <nav> 에 이벤트 삽입

nav.addEventListener('click', (e) => {
    e.preventDefault();     // 꼭 실행시키는 형태로 넣어야한다....

    // e.target = 이벤트(마우스)를 처음 마주한 대상
    // console.log( e.target );    // <a>, <li>, ... (마우스 클릭 위치에 따라 변동)
    // console.log( e.target.closest('li'));   // <li>
    const target = e.target.closest('li');


/* 클래스를 사용한 위임 ---------------- */
    // about class가 있는 li에게만 hit 문자 출력
    // if(target.className === 'about') {
    // if(target.matches('.about')) {
    if(target.classList.contains('about')) {
        console.log( 'hit - about' );
    }


/* 속성을 사용한 위임 ------------------ */
    // data-name = "contact" 속성을 가지고 있는 li
    // if(target.getAttribute("data-name","contact")) {
    if(target.dataset.name === "contact") {
        console.log( 'hit - contact' );
    }


/* 노드를 사용한 위임 ------------------ */
    // closest를 쓰지 않았을 때 유용
    // if(target.nodeName === 'li') { ... }
})
