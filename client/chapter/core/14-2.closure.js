// closure 개념
function earth() {
    let water = true;
    let gravity = 9.8;
    
    return (value = water) => {
        water = value;
        return {water, gravity};
    }
}

const ufo = earth();     // closure 환경 구성: GC는 ufo가 가지고 있는 함수에 접근할 수 없음
console.log(ufo());      // 지구 정보 염탐
console.log(ufo(false)); // 지구 정보 변경도 가능


// closure 활용

const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");

const _handleClick = () => {
    let isClicked = false;  // 전역 오염을 막기 위해 함수 안쪽에 넣음

    return () => {
        if (!isClicked) {
            document.body.style.background = 'orange';
            // isClicked = true;
        } else {
            document.body.style.background = 'white';
            // isClicked = false;
        }
        isClicked = !isClicked;
    }
}

// return 되는 함수를 바로 실행시키기 위해 IIFE 패턴 사용
const handleClick = (() => {
    let isClicked = false;  // 전역 오염을 막기 위해 함수 안쪽에 넣음

    return () => {
        if (!isClicked) {
            document.body.style.background = 'orange';
            // isClicked = true;
        } else {
            document.body.style.background = 'white';
            // isClicked = false;
        }
        isClicked = !isClicked;
    }
})()


button1.addEventListener('click', _handleClick()); // return 함수를 실행하기 위해 handleClick() 형태로 삽입 필요
button2.addEventListener('click', handleClick); // return 함수를 실행하기 위해 handleClick() 형태로 삽입


// 필요없을 때 event를 제거 - 버튼 비활성화 (removeEventListener)

const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
    console.log('hit');
    button2.removeEventListener('click', handleClick);
})

function bindEvent(node, eventType, fn) {
    if (typeof node === "string") node = document.querySelector(node);
    node.addEventListener(eventType, fn);

    return () => node.removeEventListener(eventType,fn);
}

const remove = bindEvent('.btn', 'click', _handleClick());

setTimeout(() => {  // 5초 뒤 이벤트 제거
  console.log("이벤트 제거!");
  remove();
}, 5000);



// hook

function fn(init) {
    let value = init;

    function read() {
        return value;
    }

    function write(newValue) {
        value = newValue;
    }

    return [read,write];
}

const a = fn('hello');  // [f(read), f(write)] 함수 배열

console.log ( a[0]() );
a[1]('bye!');
console.log ( a[0]() );

const read = a[0];
const write = a[1];

write('hello, again!');
console.log ( read() );

const [_read, _write] = fn('hello');
console.log ( _read() );



function useState(init) {
    let value = init;

    function read() {
        return value;
    }

    function write(newValue) {
        value = newValue;
    }

    return [read,write];
}
const [value, setValue] = useState('hello');