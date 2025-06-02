/* -------------------------------------------------------------------------- */
/*                                  variables                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------ 변수 가지고 놀기 ------------------------------ */
// 1. admin과 name이라는 변수를 선언하세요.
let admin;
let name;

// 2. name에 값으로 "John"을 할당해 보세요.
name = "John";

// 3. name의 값을 admin에 복사해 보세요.
admin = name;

// 4. admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
alert(admin);
console.log("name is: ", name);
console.log("admin is: ", admin);


/* ------------------------------- 올바른 이름 선택하기 ------------------------------ */

// 1. 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 
// 변수 이름은 어떻게 지어야 할까요?
const ourPlanetName = 'Earth';
// const OUR_PLANET_NAME = 'Earth'; // 변하지 않는 값이므로 대문자상수로 선언 가능

// 2. 웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 
// 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
let currentOnlineUserName;


/* --------- 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */

// - 갯수 별 상품 가격 계산하기
let merchandisePrice;
let totalPurchaseCount;

// - 구매 제품 가격의 총 합
let totalPurchasePrice;
// totalPurchasePrice= merchandisePrice * totalPurchaseCount;

// - 구매 결제 여부
let isPurchased = true; // 'Y/N' 보다는 Boolean 데이터를 많이 사용함
isPurchased = false;

// - 구매 결제 내역
let purchasedPaymentHistory;

// - 오늘의 운세
let todaysFortune;

// - 상품 정보
let merchandiseInfo;


/* constant variables -------------------------------------------------- */

// - 1년 기준 일(day)자 수
const DAYS_FOR_A_YEAR = 365;

// - 브랜드 접두사
const brandPrefix = 'Azure';