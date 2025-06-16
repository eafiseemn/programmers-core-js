const links = document.querySelectorAll('nav a');
const header = document.querySelector('#header');

const menuDivList = document.querySelectorAll('.depth');

// 1. 각 메뉴에 마우스를 올렸을 때 선택된 자식의 .depth 를 찾아서 height = 100px 로 변경
// 2. 선택된 자식의 depth를 찾아서 - 대상의 마지막 자식 요소 (lastElementChild);
// 3. 선택된 대상의 depth가 아니면 나머지는 height = 0;


/* vanilla JS 로 구현 */
const helperfn = t => {
    t.style.height = '0px'
    t.style.overflow = 'hidden'
}

function vainlla() {
    links.forEach((a) => {
        a.addEventListener('mouseenter', (e) => {
            // console.log(e.currentTarget.lastElementChild);
            // const menuDiv = e.currentTarget.querySelector('.depth');
            // menuDiv.style.height = '100px';
            menuDivList.forEach(helperfn);
            
            const currentMenuDiv = e.currentTarget.lastElementChild;
            currentMenuDiv.style.height = '100px'
        })
    })

    header.addEventListener('mouseleave', () => {
        // console.log('leave');
        const menuDivList = document.querySelectorAll('.depth');
        menuDivList.forEach(helperfn);
    })
}



/* gsap으로 구현 */

links.forEach((a) => {
    const currentMenuDiv = a.lastElementChild;
    const tl = gsap.timeline({paused:true})
            .to(currentMenuDiv, {
                height: 100, 
                duration: 0.3,
                ease: 'power2.inOut' //'linear' 
            })
    a.addEventListener('mouseenter', () => { tl.play() })
    a.addEventListener('mouseleave', () => { tl.reverse() })
})


/* gsap 간단 실습 */
/*
gsap.to('.logo', {
    x: 100,
    duration: 3, // 기본값: 0.5s
})
gsap.to('.logo', {
    y: 100,
    delay: 3, // 위 애니메이션이 끝날때까지
})
*/
/*
const tl = gsap.timeline({
    defaults: {duration: 2,}
});
tl.to('.logo', {
    x: 100,
    // duration 은 timeline에 의해 통제됨
})
tl.to('.logo', {
    y: 100,
    // delay를 안줘도 timeline이 자동으로 통제
})
tl.reverse('.logo');
tl.restart('.logo');
*/