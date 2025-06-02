/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */

/* switch문 연습 --------------------------------------------------------- */

const a = prompt("답은 무엇일까요?");
switch (+a) {
	case 10: console.log("값이 너무 낮습니다."); break;
	case 15: console.log("정답입니다!"); break;
	case 20: console.log("값이 너무 높습니다."); break;
	default: console.log("숫자를 입력해주세요.");
}


// prompt를 통해 숫자를 입력 받고, (0 ~ 6까지)
// 받은 숫자를 사용해서 switch case를 사용해주세요.
/*
 0 : 일
 1 : 월
 2 : 화
 ...
 6 : 토
*/

const daysNum = prompt("0 ~ 6 사이의 숫자를 입력해 주세요.");
let daysName;

switch (+daysNum) {
	case 0: daysName = "일"; break;
	case 1: daysName = "월"; break;
	case 2: daysName = "화"; break;
	case 3: daysName = "수"; break;
	case 4: daysName = "목"; break;
	case 5: daysName = "금"; break;
	case 6: daysName = "토"; break;
	default: console.log("정확한 범위의 숫자만 입력해 주세요."); break;
}

console.log(daysName);

// 랜덤한 값 (0 ~ 6) 을 받아서 랜덤한 요일을 출력해보자!

    // Math.random() = 0 ~ 1 사이의 random float를 생성
    // (최대 숫자 +1) 을 곱하면 0 ~ 최대 숫자 사이의 값을 반환
    // Math.floor()는 언제나 버림 처리하고 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환 

// 랜덤한 숫자 만들기 (가능하면 함수를 기능에 따라 분리; separation of concerns)
function getRandom(n) {    
    // const value = Math.floor(Math.random() * 7);
        // 0에서 6까지의 숫자만을 출력 
    	// 재사용성을 높이기 위해 매개변수 n을 사용해서 출력 가능한 범위를 높음
    const value = Math.floor(Math.random() * (n+1));
	return value;
}

function daysNumToName(value) {
	// const value = getRandom();

	// 숫자에 따른 요일 이름 부여하기
	switch (value) {
		case 0: return "일";
		case 1: return "월";
		case 2: return "화";
		case 3: return "수";
		case 4: return "목";
		case 5: return "금";
		case 6: return "토";
	}
}

daysName = daysNumToName(getRandom(6));
console.log(daysName);

// daysNumToName 함수를 가지고 주말인지 평일인지를 구분할 수 있는 함수를 만들어 주세요

function isWeekend() {
    const today = daysNumToName(getRandom(6));
    switch(today) {
        case '토':
        case '일':
            return `오늘은 ${today}요일입니다. 그러므로 주말입니다.`
        default :
            return `오늘은 ${today}요일입니다. 그러므로 평일입니다.`

    /* if else 문을 사용할 경우 -------------------------------
    function isWeekend() {
        const today = daysNumToName(getRandom(6));
        if(today.includes('토') || today.includes('일')) {
            return `오늘은 ${today}요일입니다. 그러므로 주말입니다.`
        } else {
            return `오늘은 ${today}요일입니다. 그러므로 평일입니다.`
        }
    }
    */

    /* 삼항식을 사용할 경우 ---------------------------------------- 
    const today = daysNumToName(getRandom(6));
    const day = today.includes('토') || today.includes('일') ?
        `오늘은 ${today}요일입니다. 그러므로 주말입니다.` :
        `오늘은 ${today}요일입니다. 그러므로 평일입니다.`
    return day;
    */
    }
}

let weekend = isWeekend();
console.log(weekend);




/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

const MORNING = "아침",
	LUNCH = "점심",
	DINNER = "저녁",
	NIGHT = "밤",
	LATE_NIGHT = "심야",
	DAWN = "새벽";

let thisTime;
// thisTime = prompt("현재 시간을 입력해 주세요.");
let message;

switch (thisTime) {
	case MORNING:
		// 조건 유형(case): '아침'
		message = "뉴스 기사 글을 읽는다.";
		break;

	case LUNCH:
		// 조건 유형(case): '점심'
		message = "자주 가는 식당에 가서 식사를 한다.";
		break;

	case DINNER:
		// 조건 유형(case): '저녁'
		message = "동네 한바퀴를 조깅한다.";
		break;

	case NIGHT:
		// 조건 유형(case): '밤'
		message = "친구에게 전화를 걸어 수다를 떤다.";
		break;

	case LATE_NIGHT:
	case DAWN:
		// 조건 유형(case): '심야'
		// 조건 유형(case): '새벽'
		message = "한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.";
		break;

	default:
		message = "현재 시간을 정확히 입력해 주세요.";
		break;
	// default 처리 하지 않을 경우 undefined 반환
}
console.log(message);

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */
