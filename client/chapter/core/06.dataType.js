/* --------------------------------- */
/*          Data Types               */
/* --------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty + " (" + typeof empty + ")");

// 2. 값이 할당되지 않은 상태
let noCurrentValue;
console.log(noCurrentValue + " (" + typeof noCurrentValue + ")");

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let stringSingle = 'Hello';
let stringDouble = "World";
// backtick 활용 시 보간(interpolation) 가능
let stringBacktick = `This is ${stringSingle / 10} ${stringDouble}`; // This is NaN World (stirng)

console.log(stringSingle + " (" + typeof stringSingle + ")");
console.log(stringDouble + " (" + typeof stringDouble + ")");
console.log(stringBacktick + " (" + typeof stringBacktick + ")");

// 생성자 함수 (constructor function)
const strObject = new String('hello'); // 문자 생성자 함수 (string constructor function)
    // 생성자이므로 PascalCase 를 사용하고, 'new' 키워드를 붙여야 함
console.log(strObject); // String {'hello'}
console.log( strObject.toUpperCase() ); // 'HELLO'
console.log( stringSingle.toUpperCase() ); // 'HELLO' -> single/double/.. 도 object적 속성을 가지고 있음
    // string literal : string은 object이지만 읽기 편하도록 primitive 하게 보임
console.log(stringDouble[0]); // 'W'


// 4. 정수, 부동 소수점 숫자(길이 제약)
let integerVar = 123123124;
console.log(integerVar + " (" + typeof integerVar + ")");
let floatingVar = 123.123124;
console.log(floatingVar + " (" + typeof floatingVar + ")");

// 숫자 생성자 함수 (number constructor function)
const numObject = new Number(123.456);
console.log(numObject); // Number {123.456}
console.log(numObject.toFixed() ); // 123 (정수 부분만)


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigIntVar = 123124124124124121441n;
console.log(bigIntVar + " (" + typeof bigIntVar + ")");

// bigInt constructor function -- new 키워드 없이도 생성 가능
const bigIntObject = BigInt(12341234);
console.log(bigIntObject); // 12341234n


// 6. 참(true, yes) 또는 거짓(false, no)
let booleanVar1 = true;
let booleanVar2 = false;
console.log(booleanVar1 + " (" + typeof booleanVar1 + ")");
console.log(booleanVar2 + " (" + typeof booleanVar2 + ")");

// Boolean constructor function
const booleanObject = new Boolean(true);
console.log(booleanObject); // Boolean {true}

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let objectVar = { name : 'Emily', age : 30 };
console.log(objectVar);
console.log(typeof objectVar);

// Object constructor function
const objConst = new Object({});
console.log(objConst); // {}

// 단, Object constructor로는 다른 타입 변수도 만들어낼 수 있음
const objConstAlt = new Object('test'); // Object 생성 함수 안에 string 삽입
console.log(objConstAlt); // String {'test'}

// 8. 고유한 식별자(unique identifier)
let symbolVar = Symbol('uuid');
console.log(symbolVar);
console.log(typeof symbolVar);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof 1 + 2); // 'number2'
// 2) 함수 typeof()
console.log(typeof(1+2)); // 'number'
// 언어 상, 오류
console.log(typeof null); // 'object'
  // null 은 object가 아니지만, 언어상 오류로 object로 출력


/* -------------------------------------------------------------------------- */
/*                             object & functions                             */
/* -------------------------------------------------------------------------- */
// console.clear();

// Object
const _obj = {
    name: 'tiger',
    age: 30,
    birth: [1991, 7, 21],
    sayHi: function() {
        console.log('hello~');
    }
} // object 는 다양한 property를 가질 수 있음 (없어도 됨)

console.log (_obj);
console.log (_obj.name); // 객체 Property에 접근
console.log (_obj['age']); // 객체의 key는 문자열
    // property 삭제 방법 : delete _obj.name;
    // 완전 삭제보다는 _obj.name = null; 처럼 비워두는 방식 지향

// method : 객체 안에 들어있는 함수
_obj.sayHi();


// Array
const arr = ['a', 100, {name: 'tiger'}, ['a','b'], true, ()=>{}]; // array는 모든 자료형을 담을 수 있음
console.log(arr);
// console.log(arr.0); // 이 방식으로는 접근 불가
console.log(arr[2]); // {name: 'tiger'} ([0, 1, 2, 3, ...] 순서)

// Array constructor function
const arrConst = new Array(1,2,3);
console.log(arrConst);


// function
function tempFnName() {
    console.log('tempFnName 함수가 실행됐습니다.');
}
console.log (tempFnName()); // undefined

function tempFnReturn() {
    return 'tempFnReturn 함수가 실행됐습니다.';
}
console.log (tempFnReturn()); // 'tempFnReturn 함수가 실행됐습니다.'


// function - parameter (매개변수)
function 붕어빵틀(재료) {
    return `따끈하고 맛있는 ${재료} 맛 붕어빵입니다.`
}
const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');

console.log( 팥붕 );
console.log( 슈붕 );
console.log( 피붕 );



// this : 나를 호출한 대상

console.log(this); // 전역에서 호출하면: window

const objectThis = {
    name: 'object_test',
    sayHello1: function() {
        console.log(this);
        console.log(this.name);
    },
    sayHello2: function() {
        console.log('hello~');
    },
    sayHello3: () => {
        console.log(this);
        console.log(this.name);
    },
    sayHello4() {
        console.log(this);
        console.log(this.name);
    }
}

// 일반 함수 (normal function method; f () ) -> this: 나를 호출한 대상
objectThis.sayHello1(); // Object에서 호출하면: objectThis
objectThis.sayHello2();

// 화살표 함수 (arrow function method; () => {...} ) : this를 바인딩하지 않습니다. (상위 컨텍스트에서 this를 찾습니다.)
    // 변수 등은 다 가둘 수 있음 (함수 스코프 생성); this만 바인딩 안 됨
    // 이 이슈로 인해 객체의 메서드로 잘 사용되지 않음
objectThis.sayHello3(); // 상위 컨텍스트인 전역의 this = window
    // 모던 자바스크립트 (type = module) 에서는 this = undefined이므로 this.name -> Error
    // 상위 컨텍스트에서 this를 못 찾았는지 확인할 수 있고, 전역을 오염시키지 않기 때문에 이게 좀 더 안전함

// 간결 함수 (concise method; f functionName() )
    // 객체에 method를 정의할 때 가장 많이 쓰는 방식 (함수 이름이 key값 역할을 함)
objectThis.sayHello4(); // this = 나를 호출한 대상 (objectThis)


// arrow function 은 prototype이 없음 (정확히는, 직접 가지고 있지 않음)
    // prototype 은 나를 생성한 부모
    // 일반 함수는 prototype 안에 object ... 을 내장하기 때문에 훨씬 무거움
    // arrow function은 훨씬 가벼워서 성능적으로는 좋지만, this를 바인딩하지 않기 때문에 메서드로 적합하지 않음
// concise method도 prototype이 없음
    // 가볍기 때문에 성능적으로 좋지만, this도 잘 찾음 -> method로 적합
