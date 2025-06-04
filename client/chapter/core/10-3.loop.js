/* -------------------------------------------------------------------------- */
/*                                  For Loop                                  */
/* -------------------------------------------------------------------------- */



// 2 ~ 10까지의 짝수 출력하기

let k = 0;
let evenArray = [];
while (k <= 10) {
       k++;
    if (k % 2 !== 0) continue;
    evenArray = evenArray.concat([k]);
}
console.log(evenArray); 

evenArray = [];
for (let p = 1; p <= 10; p++) {
    if (p % 2 !== 0) continue;
    evenArray = evenArray.concat([p]);
}
console.log(evenArray); 





// console.clear();

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

// while(i < l) {
// //   console.log(frontEndDev[i]);
//   i += 1;
// }


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
/* 내 풀이
for (; i<l; i++) {
    if (frontEndDev[i] === 'SVG' || frontEndDev[i] === 'jQuery') continue;
    console.log(frontEndDev[i]);
}
*/
// 쌤 풀이
for (let i = 0; i<l; i++) {
    const value = frontEndDev[i]; // 매번 계산하지 않아도 되도록 미리 선언
    const lower = value.toLowerCase();
    if (lower.includes('svg') || lower.includes('jquery')) continue;
    console.log(value);
}


//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
for (let i = 0; i<l; i++) {
    const value = frontEndDev[i]; // 매번 계산하지 않아도 되도록 미리 선언
    const lower = value.toLowerCase();
    if (lower.includes('jquery')) break;
    console.log(value);
}

// 참고용: pop / shift - 배열 요소를 빼내는 것
// 단, 실행 후 배열의 원본이 훼손되기 때문에 (아예 아이템을 제거) 잘 사용하지 않음
// 성능적으로는 뒤에서 앞으로 뽑는 것이 더 빠르지만, 큰 차이는 없음

console.clear();
const arr = [...frontEndDev];
for (let i = 0; i < l; i++) {
    // console.log(frontEndDev.pop()); // 뒤에서 앞으로
    // console.log(arr.pop()); // 뒤에서 앞으로 - 원본 훼손하지 않기
    console.log(arr.shift()); // 앞에서 뒤로
}



//   - 무한 루프 (브레이크)
//   - for 문 (역순환)