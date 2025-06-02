/* -------------------------------------------------------------------------- */
/*                              Logical Operators                             */
/* -------------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b; // a = true && b = false --> 첫 번째 falsy 값 = b = ''
console.log(AandB); // ''

// Logical AND Assignment (논리곱 할당 연산)
console.log(a); // 10

a &&= b; // a = a && b;
console.log(a); // ''


a = 10;

// 논리합(또는) 연산자
let AorB = a || b; // a = true || b = false --> 첫 번째 true 값 = a = 10
console.log(AorB); // 10

// 논리합 할당 연산
a ||= b; // a = a || b;
console.log(a); // 10



// 부정 연산자
let reverseValue = !value; // !(Boolean(b)) = !false = true
console.log(reverseValue); // true



// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy); // {thisIsFalsy:false} ; 모두 true이므로 마지막 값 반환

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy); // 2 ; [2,3].length 값이 계산되어 반환



// 비밀번호 확인 알고리즘
console.clear();

/*
사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.
 - 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
 - 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
 - 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.

추가 조건
 - 대소문자 구분 없이 받을 수 있게
 - 공백 문자 처리
 - 콘솔창에 에러가 터지지 않도록
*/

let userName = prompt("Who's there?");
userName = userName && (userName.toLowerCase()).replace(/\s*/g, "");
 // replace() 정규 표현식 : /(...)/g 사이에 삽입
 // \s = whitespace (공백 문자), * = 전역에서 찾기

 // 값을 받는 즉시 비교하는 것보다는, if문 안에서 비교할 때 바꾸는 것이 훨씬 안전함
 // 이 경우, userName?.toLowerCase() 와 같이 옵셔널 체이닝을 사용하여 error 방지 가능
 // 그러나 디버깅을 위해 function 안에 묶어버리고, if(null || undefined) return; 같은 형태로 쓰는 것이 더 좋음

let message;
if (userName === 'admin') {
    let password = prompt('Password?');
    password = password && (password.toLowerCase()).replace(/\s*/g, "");

    if (password === "themaster") {
        message = "Welcome!"
    } else if (!password) {
        message = "Canceled"
    } else {
        message = "Wrong password"
    }
} else if (!userName) {
    message = "Canceled"
} else {
    message = "I don't know You"
}
console.log(message);
// (참고) 로그인 시 어느 부분이 틀렸는지 (id / pw) 를 구체적으로 가르쳐주는 message는 지양하는 것이 좋음
// 해킹의 표적이 될 수 있기 때문에..