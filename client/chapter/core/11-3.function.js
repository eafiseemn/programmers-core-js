/* eslint-disable no-unreachable */
/* -------------------------------------------------------------------------- */
/*                              Functions → Arrow                             */
/* -------------------------------------------------------------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (moneyA, moneyB, moneyC, moneyD) => {
    return moneyA + moneyB + moneyC + moneyD;
};
let result = calcAllMoney(1000, 3000, 5000, 2500);
console.log(result);

// 화살표 함수의 arguments - rest parameter (...)
    // ... 뒤에 보통 rest, args 라는 이름을 사용하나, 아무 매개변수 이름을 붙여도 무방
calcAllMoney = (...rest) => {
    console.log( rest );
};
calcAllMoney(1000, 3000, 5000, 2500);


calcAllMoney = (...args) => {
    let totalSum = 0;

    // for...of
    for (const value of args) {
        totalSum += value;
    }
    return totalSum;

    // forEach
    args.forEach( function(value, index) {
        totalSum += value;
    } )
    return totalSum;

    // forEach Arrow Function
    args.forEach( (value, index)=> totalSum += value )
    return totalSum;

    // reduce
    totalSum = args.reduce( function(accValue, currentValue) {
        return accValue + currentValue;
    }, 0 )
    return totalSum;

    // reduce Arrow Function
    return args.reduce( (acc, curr) => acc + curr , 0);

}

console.log( calcAllMoney(1000, 3000, 5000, 2500) );


let _calcAllMoney = (...args) => args.reduce((acc,curr) => acc + curr, 0);
console.log( _calcAllMoney(1000, 3000, 5000, 2500) );



// 화살표 함수와 this

// 일반 함수는 나를 호출한 대상을 기준으로 this를 바인딩합니다.
// constructor를 내장하고 있어 생성자 함수로써 사용될 수 있습니다.
// 단, concise method는 예외적으로 constructor를 내장하지 않습니다.
// 따라서, concise method는 객체 안에서 this를 찾기 위해 메서드로 많이 사용됩니다.

function a() {
    console.log(this);
}
a();    // window (module에서는 undefined)

// 화살표 함수는 this를 바인딩하지 않고, 상위 컨텍스트에서 가져옵니다.
// constructor를 내장하지 않습니다. (성능 최적화) <-> class
// 상위 컨텍스트에서 this를 가져오기 위한 메서드 안에서의 함수로 자주 사용됩니다.

const b = () => {
    console.log(this);
}
b();    // window (module에서는 undefined)

const user = {
    name: 'Emily',
    total: 0,
    grade: [50, 70, 40],
    sayHi: function() {
        console.log(this);  // this = {user}
            // constructor를 내장: new sayHi() 가능
    },
    sayHi2: () => {
        console.log(this);  // this = window
    },
    sayHi3() {
        console.log(this);  // this = {user}
            // constructor를 내장하지 않음: new sayHi3() 불가능
    },
    totalGrades() {
        this.grade.forEach( function(score){
            // console.log(this);
                // 여기서의 this는 forEach 안에 있는 callback function의 this
                // callback fn의 this는 window --> window 반환
            this.total += score;
        })
        // console.log(this.total);  = 0
    
        // ==> let self = this;
        // this.grade.forEach ( ... ) { console.log(self); }
            // forEach 바깥에 self를 선언하고 그 self를 안에서 사용하는 방법

        // 또는, 화살표 함수 사용 (상위 컨텍스트의 this 가져옴)
        this.grade.forEach( score => this.total += score )
        console.log(this.total);

        // 또는, forEach 안에 원하는 this 지정
        this.total = 0;
        this.grade.forEach( function(score){
            this.total += score;
        }, this )
        console.log(this.total);

        // reduce를 사용할 경우
        this.total = this.grade.reduce((acc,cur) => acc+cur, 0);
        return this.total;
    }
}




// 자바스크립트 함수의 두 가지 기능
// 1. 일반 함수 (normal function)

function button(text = 'empty') {
    return `<button>${text}</button>`
}
button('click!');

// 2. 생성자 함수 (constructor function)
new button('click!');  // button {} 을 return
    // 생성자 함수는 return값과 상관 없이 객체를 반환

// 생성자 함수는 첫 글자를 대문자로 쓰는 것이 컨벤션
function Button(text = 'empty') {
    this.text = text;
}
const btn = new Button(); // 생성자 함수는 앞에 new를 붙여 실행
console.log(btn);

// 생성자 함수를 구분해서 보다 정확히 쓸 수 있는 새로운 문법 : class
class Button_ { }
// const _btn = Button_(); // Class constructor Button_ cannot be invoked without 'new'
const _btn = new Button_();
console.log(_btn);

// 화살표 함수로는 생성자 함수를 만들 수 없음
const arrow = () => {}
// new arrow(); // arrow is not a constructor




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// numeric ^ powerCount를 구하는 함수, for문 사용
let pow = (num, count) => {
    let result = 1;
    for(let i=0; i < count; i++) {
        result *=num;
    }
    return result;
}; 

console.log ( pow(2,52) );

// 
let _pow = (num, count) => Array(count).fill(null).reduce( acc => acc * num, 1)
        // count 길이만큼 null이 들어가있는 배열을 강제로 만들고 reduce 돌리기
console.log ( _pow(2,5) );
console.log ( _pow(2,52) );


// repeat(text: string, repeatCount: number): string;
// repeat('반복하고자 하는 텍스트', 몇 번 반복할지) -> 'texttexttext'
let repeatText = (text, repeatCount) => {
    let result = '';
    for(let i=0; i < repeatCount; i++) {
        result += text;
    }
    return result;
}
console.log ( repeatText('hello', 3) );

let _repeatText = (text, repeatCount) => Array(repeatCount).fill(null).reduce( acc => acc + text , '')
console.log ( _repeatText('hello', 3) );

let _repeatText_ = (text, repeatCount) => text.repeat(repeatCount);
console.log ( _repeatText_('hello', 3) ); 
