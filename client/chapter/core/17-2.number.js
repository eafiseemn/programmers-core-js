// 삼각함수
// 원 운동, 원하는 각도로 이동, 진동, 눈 내리는 애니메이션

// 직각 삼각형의 빗변의 길이가 1일 때,
// sin@ = 세로변(y축) 길이
// cos@ = 가로변(x축) 길이
// -> 각도를 조절하면 r=1인 원을 그릴 수 있음

// 각도 단위 : degree -> radian 로 변환해야 함
// 360deg = 2*pi rad
// 1 deg = pi / 180
// 1 rad = 180 / pi

function toRadian(degree) {
    return degree * (Math.PI / 180);
}
console.log( toRadian(30) );

function toDegree(radian) {
    return radian * (180 / Math.PI);
}

console.log( toDegree(3.141592) );


const circle = document.querySelector(".circle");
let degree = 45;
let radius = 10;
let lastInsertTime = 0;

function animation() {
    if (radius < 300) {
        degree += 0.3;
        // radius = 100; // 원 운동
        radius += 0.1;  // spiral

        let rad = toRadian(degree);

        const x = Math.cos( rad ) * radius;
        const y = Math.sin( rad ) * radius;

        circle.style.transform = `translate(${x}px,${-y}px)`;


        const currentTime = Date.now();

        if(currentTime - lastInsertTime >= 300) {
        const tag = /*html*/`
        <div style="transform: translate(${x}px,${-y}px)">😇</div>
        `;

        document.querySelector('.space').insertAdjacentHTML('beforeend', tag);

        lastInsertTime = currentTime
        }
    }
}

setInterval(animation, 0);