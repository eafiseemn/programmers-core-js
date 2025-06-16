/* -------------------------------------------------------------------------- */
/*                        SPA (Single Page Application)                       */
/* -------------------------------------------------------------------------- */

const { log, clear } = console;

// history.pushState(null,'','/about');
    // 주소를 /about 으로 바꿈 (http://localhost:5500/about)
        // 새로고침 하면 에러가 남 (브라우저가 html -> js 순으로 읽는데, .../about을 못찾아서 .../index로 돌아오지 못함)
    
    // 보통 addEventListener 달아서 이동시킬 때 사용
    // index.html 안에 있는 body를 갈아끼우는 느낌으로 사용 (모바일 App에서 페이지 이동 시 부드럽게 넘어가게)
    // https://nomad.patrickbeser.com/ 같은 사이트 (GSAP)

    // js가 읽히기 전에는 html이 아무것도 못 뿌리기 때문에 SEO (검색엔진 최적화) 가 안됨
    // SSG (static site) 를 만들어서 SEO 에 노출되게 만드는 형태로 사용하기도 함

    // 요즘에는 MPA(Multi Page Application) 도 많이 씀 (반반 정도..)


const links = document.querySelectorAll('a');
// log ( links );

function about() {
    return `
    <h1>About...</h1>
    <div>
    <img src="https://randomuser.me/api/portraits/thumb/women/75.jpg" />
        <p>
            Hello, my name is ....
        </p>
    </div>`
}

const routes = {
    '/': '<h1>HOME 페이지 입니다!</h1>',
    '/about': about(),
    '/contact': '<h1>CONTACT 페이지 입니다!</h1>',
}
// log ( routes );

function router() {
    const path = location.pathname;     // 변경된 주소를 가져옴
    app.innerHTML = routes[path] || `<h1>404 not found</h1>`;
            // routes 의 pathname과 동일한 객체를 조회해서 innerHTML에 삽입
}

const app = document.querySelector('#app');

links.forEach((a) => {
    a.addEventListener('click', function(e) {
        e.preventDefault();     // <a> 의 default인 이동 동작을 막음
        // log(this.href);
        const href = this.href;
        history.pushState(null,'',href);    // 주소만 변경
        router();
    })
})

window.addEventListener('DOMContentLoaded', router)  // 페이지가 다시 로드되어도 router가 실행되도록