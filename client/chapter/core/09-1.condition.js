/* -------------------------------------------------------------------------- */
/*                                  Condition                                 */
/* -------------------------------------------------------------------------- */


let answer = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");
answer = answer.toLowerCase();

if (answer === 'ecmascript') {
    alert('정답입니다!');
    console.log('정답입니다!');
} else {
    alert('모르셨나요? 정답은 ECMAScript 입니다!');
    console.log('모르셨나요? 정답은 ECMAScript 입니다!');
}



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No


// 영화 봤니?
let didWatchMovie;
didWatchMovie = confirm('영화를 보셨나요?');

// 영화 볼거니?
let goingToWatchMovie;

if (!didWatchMovie) {
    goingToWatchMovie = confirm('영화를 볼 예정이신가요?');
}

if (didWatchMovie) {
    console.log('영화를 본 유저');
} else if (goingToWatchMovie) {
    console.log('영화를 볼 예정인 유저');
} else {
    console.log('영화 안 볼 예정');
}



// 복합 if문
let didWatchMovie = confirm('그 영화 봤어?');

if (didWatchMovie) {
    // 이미 영화 봤어
    console.log('그 영화 재밌더라 ~ 역시👍🏻');
} else {
    // 아직 안 봤어
    let goingToWatchMovie = confirm("그럼 그 영화 보러 갈거야?");

    if(goingToWatchMovie) {
        // 응 보러 갈거야
        let withWho = prompt('누구랑 볼거니??');

        if (withWho === '너') {
            console.log('그래, 좋아! 같이 보자~~!');
        } else if (withWho === '가족') {
            console.log('알겠어, 재밌게 봐!');
        } else {
            console.log('나 말고 누구야?');
        }
    } else {
        // 아니 안 볼거야
        console.log('나도 사실 별로야.');
    }

}


// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

let didWatchMovie = confirm('Did you watch the movie?');
let goingToWatchMovie;

let message = didWatchMovie ? '영화 재밌더라 한 번 봐봐!' :
 goingToWatchMovie = confirm('Will you going to watch the movie?');

message = goingToWatchMovie ? '언제 볼까? 재밌겠다!' : '그래...'

console.log(message);


// 조건부 렌더링
// 예) 사용자의 상태를 받아서 특정 메시지를 출력하는 함수

function render(node, isActive) {

    /*/~ if문 ~/
    let msg;
    if(isActive) {
        msg = '안녕';
    } else {
        msg = '잘가~';
    }
    const template = `
    <div>${msg}</div>`*/
    
    /* 삼항식 */
    const template = `
    <div>${isActive ? '안녕' : '잘가~'}</div>`

node.insertAdjacentHTML('beforeend', template);
}