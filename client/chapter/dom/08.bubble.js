/* -------------------------------------------------------------------------- */
/*                         Event bubbling & capturing                         */
/* -------------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

/*
// section 안에 있는 어떤 요소를 찍어도 동작
section.addEventListener('click', () => {
    console.log('%c section', 'color:dodgerblue; font-size:20px');    
});

// article event + section event 동작
article.addEventListener('click', () => {
    console.log('%c article', 'color:hotpink; font-size:18px');
});

// p + article + section 모두 동작
p.addEventListener('click', (e) => {
    e.stopPropagation();    // 뒤에 있는 요소까지 이벤트 번식을 막음
    console.log('%c p', 'color:orange; font-size:16px');
});
*/

section.addEventListener('click', (e) => {
    console.log('%c section', 'color:dodgerblue; font-size:20px');

    console.log( `target: `, e.target, ` currentTarget: `, e.currentTarget, ` this: `, this);
});
// e.target = 마우스가 처음 마주한 대상 / e.currentTarget = 이벤트가 걸린 대상


p.addEventListener('mouseenter', (e) => { // 해당 영역에 마우스가 들어갔을 때 발동 (P 만)
    console.log(e.type);
})
// section.addEventListener('mouseover', (e) => { // 마우스가 들어갔을 때 동작하나, 주위 모든 요소에도 영향
//     console.log(e.type);
// })


p.addEventListener('mouseleave', (e) => { // 해당 영역에서 마우스가 나올 때 발동
    console.log(e.type);
})
// section.addEventListener('mouseout', (e) => { // 마우스가 들어갔을 때 동작하나, 주위 모든 요소에도 영향
//     console.log(e.type);
// })


/* 캡처링 ----------------------------------------------------------------- */