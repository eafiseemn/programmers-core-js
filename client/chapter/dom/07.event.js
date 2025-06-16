/* -------------------------------------------------------------------------- */
/*                               Event Handling                               */
/* -------------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode('.first');

// first.onclick = () => {
//     console.log('hit!');
// }

function _handler(e) {
    // wheelDeltaY: 마우스 휠을 얼마나 내렸나(-) 올렸나(+)
    if ( e.wheelDeltaY > 0 ) {
        console.log('up');
    } else {
        console.log('down');
    }
}

const ground = getNode('.ground');
const ball = getNode('.ball');

// function handleBall({offsetX:x, offsetY:y}) {
function handleBall(e) {
    const {offsetX:x, offsetY:y} = e;
    // x, y에 e.offsetX / e.offsetY 값 구조분해할당

    const w = ball.offsetWidth;
    const h = ball.offsetHeight;

    ball.style.transform = `translate(${x-(w/2)}px, ${y-(h/2)}px)`;
        // 마우스포인터 가운데로 올 수 있게 w/h 절반씩 옮김

    // console.log(this);
    // console.log(e);
}

function handleMove(e) {
    // console.log(this);
    // console.log(e);
    console.log('💧');

}

// first.addEventListener('wheel', _handler);
// ground.addEventListener('click', handleBall);
ground.addEventListener('mousemove', handleBall);
// ground.addEventListener('mousemove', debounce(handleMove,1000));
ground.addEventListener('mousemove', throttle(handleMove));

// mousemove Event 는 계속 이벤트가 걸려서 연결 함수가 복잡할 경우 브라우저에 부담을 줄 수 있음
    // text input, mousemove, resize (창 크기 조절) 등 연속적으로 일어나는 이벤트
// 만약 text input을 받아서 서버에 요청을 보낸다면, 입력이 완료되지 않은 상태에서 계속 서버를 찌르는 건 비용 낭비
// 디바운싱 (다 끝났을 때 체크해서 한 번 호출) 또는 스로틀링(이벤트 탐지 횟수를 줄임)을 통해 성능 최적화 필요

function debounce(callbackFn, limit = 1000) {
    let timeout;    // 변수 오염을 막기 위해서 클로져 사용

    return function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callbackFn.call(this, e);
        }, limit);
    };
}

// debounce(() => console.log('hello'), 1000);

window.addEventListener('resize', debounce(()=> {
    console.log('사이즈 계산!');
}))
    // 여러번 반복해서 호출되면, clearTimeout 따문에 이전 timeout은 다 사라짐
    // 마지막에 호출된 timeout만 남아서 한 번만 실행됨




function throttle(callbackFn, limit=1000) {
    let wait = false;
    return function(e) {
        if(!wait) {
            callbackFn.call(this, e);
            wait = true;    // 한 번 실행하고 멈춤
            setTimeout(() => wait = false, limit);  // 타이머가 limit 에 도달하면 다시 콜백을 실행
        }
    }
}

throttle(() => console.log('hello'), 1000);


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener