/* -------------------------------------------------------------------------- */
/*                                Do While Loop                               */
/* -------------------------------------------------------------------------- */


let i = 0;
do {
    console.log(i);

    /* 특정 시점(3)에서 멈추려면:
    if ( i === 3 ) {
        break;
    }
    */

    i++;
// } while ( false ); // 0 (무조건 최초 한 번은 실행함)
} while ( i < 5 );    // 0, 1, 2, 3, 4




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정




/* HTML 요소를 가져와서 다루기 (Document Object Model, DOM) ----------------------- */
// html에 태그를 만들고 내가 원하는 태그에 style을 입히기 위해서 : CSS => class selector . 사용
// html에 태그를 만들고 내가 원하는 태그를 동적 제어하기 위해서 : JS => querySelector 사용

const first = document.querySelector('.first');  // document = HTML
console.log( first );  // span.first
    // 아무 설정도 하지 않으면 null ( <script> 가 나와서 실행시킬 시점에는 .first가 아직 그려지지 않아서 )
    // <script src=".." **defer**> 형태로 defer 지시 필요 (HTML을 모두 읽고 나서 JS를 실행하도록 지연시킴)

// .second 요소도 가져오려면?
    // querySelector 를 많이 사용하는 것은 성능 부하를 가져올 수 있으므로 가능하면 최소한으로 사용
    // function 을 이용해서 first 다음에 있는 element를 가져오기
    // .nextSibling 을 쓸 경우 공백이 #text로 인식되고 주석도 별도 요소로 인식되기 때문에,
    // 내가 원하는 요소가 나올 때까지 반복문을 사용

let second = first;

do {
    second = second.nextSibling;
    // console.log(second);
    // second가 second element가 맞는지 확인하고 아니면 반복
    // document 에서 가장 작은 단위는 node > 각 node는 고유한 type을 가짐
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    // element는 1, #text는 3, comment(주석)은 8
} while(second.nodeType !== 1)

console.log( second );

// 반복 가능하도록 함수화 + class 이름을 직접 받도록
function findNextSibling (targetNode) {
    // className 이 문자일 때만 실행 (validation = type guard)
    if (typeof targetNode === 'string') {
    targetNode = document.querySelector(targetNode)
    }

    do {
        targetNode = targetNode.nextSibling;
    } while (targetNode.nodeType !== 1);
    return targetNode;
}

second = findNextSibling('.first');
const third = findNextSibling('.second');
console.log(second);
console.log(third);

// 위 함수는 nextElementSibling과 동일
// 이전 element 를 찾는 건 previousElementSibling