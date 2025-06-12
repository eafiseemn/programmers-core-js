/* -------------------------------------------------------------------------- */
/*                              Optional Chaining                             */
/* -------------------------------------------------------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.();

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.



/* -------------------------------------------------------------------------- */
/*                                 BROWSER API                                */
/* -------------------------------------------------------------------------- */

// API = Application Programming Interface

// 1. setTimeOut
const _timeout = setTimeout(() => {
    console.log('Tik-Tok!');
}, 4000)  // 단위 : ms

// 자바스크립트는 단일 스레드 (콜 스택 하나에 쌓아서 하나씩 순서대로 일처리를 진행; Last-In-First-Out)
// setTimeout() 은 브라우저의 API 이므로 콜스택에 쌓이지 않고 Web API에서 따로 실행됨
// 지정한 시간이 지나면 Task Queue(First-In-First-Out)로 옮기고, 그 다음 콜 스택에 쌓음
    // 콜 스택에서 이미 돌아가고 있는 태스크(fibonacci 같이 오래 걸리는 것..)가 있으면
    // 지정한 시간이 지나도 해당 태스크가 완료되고 나서 실행됨 (callStackLoupe 사이트 참조)

// Web API 가 멀티 스레드와 유사한 역할을 하기 때문에, 비동기적 제어를 위해 사용됨

console.log(_timeout);   // number를 반환

setTimeout(() => {
    // clearTimeout(_timeout);  // timeout 제거
    console.log('timer removed');
}, 3500);


const timeout = setTimeout(() => {

    const tag = /* html */ `
    <button type="button" class="_btn">Click Here!</button>
    `
    
    document.body.insertAdjacentHTML('beforeend', tag);
}, 3000)

const button = document.querySelector("._btn");
button?.addEventListner('click', ()=>{})
    // 아직 생성되지 않은 button에 그냥 eventListner를 달면 에러가 남
    // 이럴 때 옵셔널 체이닝을 써서 button이 있으면 실행하도록 구성



// 2. setInterval

let count = 0;


const intervalTimeout = setInterval(() => {

    // console.log(++count);

    const first = document.querySelector(".first");
    first.style.transform = `translateY(${++count}px) rotate(-${count}deg)`

    if (count >= 500) {
        clearInterval(intervalTimeout);
        // clearTimeout(intervalTimeout);  도 동일하게 동작
    }

}, 10);   // 100 ms = 0.1s 에 한 번씩 실행됨
    // chrome에서는 해당 탭을 보고 있지 않으면 실행을 일시정지함



let _count = 0;

function animation() {

    const second = document.querySelector(".second");
    second.style.transform = `translateY(${++_count}px) rotate(-${_count}deg)`

    const id = requestAnimationFrame(animation);
        // 기본적으로 60Hz로 동작하지만, 모니터 성능에 따라 FPS 바뀜 (성능 최적화)

    if (_count >= 500) {
        cancelAnimationFrame(id)
    }
}

animation();