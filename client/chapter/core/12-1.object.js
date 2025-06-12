/* -------------------------------------------------------------------------- */
/*                                   Object                                   */
/* -------------------------------------------------------------------------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialogMap = {
    position: "fixed",
    ["z-index"]: 10000,
    top: "50%",
    left: "50%",
    width: "60vw",
    maxWidth: 800, // camelCase 로 변경, px단위 생략
    height: "40vh",
    minHeight: 280,
    transform: "translate(-50%, -50%)",
};




// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// cf) abbr. auth의 두 가지 의미
// authentication : 인증
// authorization : 권한 부여

const authUser = {
    uuid : crypto.randomUUID(),
    name : "Emily",
    email : "eafiseemn@gmail.com",
    isSignIn : false,
    permission : 'paid', // paid | free
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uuid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser["permission"]);


// 객체의 key만을 모아서 배열로 반환하는 객체의 static method: Object.keys
const keys = Object.keys(authUser);
console.log(keys);

function getKeys(obj) {
    let arr = [];
    for (const key in obj) {
        if(Object.hasOwn(obj, key)){
            arr.push(key);
        }
    }
    return arr;
}
console.log(getKeys(authUser));


// 객체의 value들을 모아서 배열로 반환하는 객체의 static method: Object.values
const values = Object.values(authUser);

function getValues(obj) {
    let arr = [];
    for (const key in obj) {
        if(Object.hasOwn(obj, key)) {
            arr.push(obj[key]);
        }
    }
    return arr;
}
console.log(getValues(authUser));

// 객체의 key와 value를 하나의 쌍으로 묶어서 새로운 배열을 반환하는 객체의 static method: Object.entries
const entries = Object.entries(authUser);

function getEntries(obj) {
    let arr = [];
    for (const key in obj) {
        if(Object.hasOwn(obj,key)) {
            // arr.push({"key": key, "value": obj[key]});
            arr.push([key, obj[key]]);
        }
    }
    return arr;
}
console.log(getEntries(authUser));


// 제거(Remove) vs. 삭제(Delete)
// - 제거 : 공간 비워두기 / 삭제 : 메모리 자체에서 없애는 것

// 제거
authUser.email = null;
console.log(authUser);
authUser.email = "eafiseemn@gmail.com"

// type validation -- Object.prototype.toString 사용
// 자료형마다 원래 가지고 있는 toString() 이 아닌 Object의 인스턴스 메서드를 사용하기 위해 call() 사용
console.log(Object.prototype.toString.call({}));         // [object Object]
console.log(Object.prototype.toString.call('a'));        // [object String]
console.log(Object.prototype.toString.call(1));          // [object Number]
console.log(Object.prototype.toString.call(1n));         // [object BigInt]
console.log(Object.prototype.toString.call([]));         // [object Array]
console.log(Object.prototype.toString.call(null));       // [object Null]
console.log(Object.prototype.toString.call(undefined));  // [object Undefined]
console.log(Object.prototype.toString.call(()=>{}));     // [object Function]
console.log(Object.prototype.toString.call(Math));       // [object Math]
console.log(Object.prototype.toString.call(true));       // [object Boolean]

function removeProperty(obj, key) {
    if( isObject(obj) ) {
    obj[key] = null;
    } else {
        throw new Error('removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.')
    }
}

removeProperty(authUser,"email");
console.log( authUser );

// 삭제
delete authUser.email;
console.log(authUser);



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
    return {
        name,  // name : name,
        age,   // age : age,
        [calculateProperty + '번호']: phone,
    }
}
console.log(createUser('emily',30,'010-1234-5678'));
calculateProperty = 'tel';
console.log(createUser('emily',30,'02-123-1234'));


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티 (shorthand properties)
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
    name,           // name : name
    email,          // email : email
    authorization,  // authorization : authorization
    isLogin,        // isLogin : isLogin
}


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* -------------------------------------------------------------------------- */
/*                   배열 구조 분해 할당  destructuring assignments                */
/* -------------------------------------------------------------------------- */

const arr = [10, 100, 1000, 10_000, 100_000];

// 배열(또는 유사배열) 내 특정 값을 자주 사용한다면 ... ?
// let ar1 = arr[0];
// let ar2 = arr[1];
// let ar3 = arr[2];
// .... =>

const [ar1, , ar3, , ar5 = 999] = arr;
    // 각 변수 이름에 array의 구조를 분해해서 값을 재할당
    // 배열의 순서(order)를 바꿀 수 없으므로, 사용하지 않는 값에 대한 변수명은 비워둬야 함
        // 사용하지 않는 값은 관례적으로 _ 로 표시 ([ar1, _, ar3])
    // 기본값(999) 할당 가능; arr에 해당 값이 있으면(100,000) 그 값을 사용 
console.log(ar1, ar3);

const spans = document.querySelectorAll("span");
console.log(spans);

const [first, second] = document.querySelectorAll("span");
console.log(first, second);

for (const [key, value] of Object.entries(authUser)) {
    // const key = keyValue[0];
    // const value = keyValue[1];

    console.log(key,value);
}

Object.entries(authUser).forEach((item) => console.log(item));
Object.entries(authUser).forEach(([k,v]) => console.log([k, v]));

const mapArray = Object.entries(authUser).map(([_,v]) => v);
console.log(mapArray);

const arrow =_=> {}



console.clear();
/* -------------------------------------------------------------------------- */
/*                   객체 구조 분해 할당  destructuring assignments                */
/* -------------------------------------------------------------------------- */

const salaries = {
    "PM": 400,
    "FEEng": 500,
    "BEEng": 600,
}

// const pm = salaries.PM;
// const fe = salaries.FEEng;
// const be = salaries.BEEng;
// console.log(pm, fe, be);

const { FEEng, PM, BEEng } = salaries;
console.log(PM, FEEng, BEEng);
    // 객체의 구조 분해 할당은 순서 상관 없이 동일한 이름을 찾아감

const { FEEng:fe, BEEng:be, PM:pm, AM:am = 350 } = salaries;
    // 별칭 및 기본값 설정 가능
console.log(am, pm, fe, be);

salaries.AM = 350;
const { FEEng:fee, BEEng:bee, ...others } = salaries;
console.log(others);

const {log} = console;
log('aa');




function _createUserObject(name, age, address, phone, job) {
    return {
        name,
        age,
        address,
        phone,
        job,
        // ...
    }
}
let user = _createUserObject('Emily', 30, '부천', /* ... */);
// 들어가야하는 데이터가 많아지면 함수 실행이 복잡해짐

log(user);

const data = {
    name: 'Emily',
    age: 35,
    address: '강남',
    phone: '010-1234-1234',
    job: 'front-end engineer',
}


function createUserObject(obj = {}) {
    const {name, age, address, phone, job, ...rest} = obj;
    return {
        // name: obj.name,
        // age: obj.age,
        // address: obj.address,
        // ...
        name,
        age,
        address,
        phone,
        job,
        ...rest,
    }
}
// function createUserObject({
    // name, 
    // age: _age = 20, 
    // address = "서울", 
    // phone = "010-0000-0001",
    // job = "무직", 
    // ...rest
    // } = {}) {
    // ...
    // } 
// 형태로 parameter 자체에 구조분해할당을 사용해서 기본값/별칭과 함께 선언해도 동일

function createObject( {a, b, c, d} ) { // 여기는 구조분해할당 (obj를 받아서 a,b,c,d로 쪼개겠다)
    return {a, b, c, d}                 // 여기는 shorthand property (a,b,c,d를 포함한 obj를 만들겠다)
}
// 필요한 속성을 간단히 꺼내 쓰고, 기본값을 설정하거나, 선택적으로 원하는 parameter만 받을 수 있음
// -> 가독성 제고, 유연한 코드

user = createUserObject(data);
log(user);