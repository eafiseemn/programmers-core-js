/* -------------------------------------------------------------------------- */
/*                          Prototype and inheritance                         */
/* -------------------------------------------------------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const _animal = {
    legs: 4,
    tail: true,
    getEat() {
        return this.stomach;
    },
    setEat(food) {
        this.stomach = [];
        this.stomach.push(food);
    }
}

_animal.setEat('strawberry');
console.log( _animal.getEat() );

// getter 와 setter를 합치기

const animal = {
    legs: 4,
    tail: true,
    get eat() {  // getter
        return this.stomach;
    },
    set eat(food) {  // setter
        this.stomach = [];
        this.stomach.push(food);
    }
}

animal.eat = 'watermelon';   // setter 동작: 함수에 넣지 않고 객체처럼 사용
console.log( animal.eat );   // getter 동작



const tiger = {
    pattern: 'stripe',
    hunt(target) {
        this.prey = target;
        this.eat = this.prey;
        return `Quietly approaching to ${target}`
    },
    __proto__: animal,
}
console.log( tiger.hunt('deer') );
console.log( tiger );

console.log( tiger.legs );
console.log( tiger.stomach );


const whiteTiger = {
    name: "laohu",
    color: 'white',
    __proto__: tiger,
}
const blackTiger = {
    name: "hodol",
    color: "orange",
    __proto__: tiger,
}

console.log( blackTiger.tail );
console.log( whiteTiger.hunt('pig') );
console.log( whiteTiger.stomach );


// 생성자 함수 (object constructor function) : __proto__ 설정을 쉽게
// return을 따로 넣지 않아도 무조건 객체를 생성

function Animal() {
    this.legs = 4;
    this.tail = true;
    this.getEat = function () {  // 생성자함수는 getter / setter 생성 불가
        return this.stomach ?? [];
    };
    this.setEat = function (food) {
        this.stomach = [];
        this.stomach.push(food);
    }
}

const otherAnimal = new Animal();

console.log( otherAnimal );
otherAnimal.setEat('grape');
console.log( otherAnimal.getEat() );


function Tiger(name) {
    Animal.call(this);
    this.name = name;
    this.pattern = 'stripe';
    this.hunt = function (target) {
        this.prey = target;
        return `Approaching to ${target}`
    }
}

const _tiger = new Tiger('hosun');
console.log( _tiger );
console.log( _tiger.__proto__.constructor );

console.log( _tiger.legs );





// function instance method

function sum(a,b) {
    console.log(this);
    return a+b;
}
console.log( sum(1,2) ); // this = window

// f.call : 함수를 대신 "실행" 시킴 (빌려쓰기) -> 인수: 값 ,,,
console.log ( sum.call('hello', 10, 20) ); // this = string{'hello'} & return 10+20;
        // = {'hello'}.sum(10,20) 과 동일

// f.apply : 함수를 대신 "실행" 시킴 (빌려쓰기) -> 인수: 배열 [,,,]
console.log( sum.apply({}, [3,4]) );  // this = {} & return 3+4;
        // apply는 array 형태로 [p1, p2, p3, ...] parameter 전달

// f.bind : 함수를 대신 실행 X / 빌려쓰되, 함수 본문을 그대로 가져옴
console.log( sum.bind({}) );  // this = {} & sum.bind() = function sum(a,b)
        // const fnVar = sum; 하는 방식과 똑같지만, this를 window로 하지 않고 원하는 {}로 바인딩

const _call = sum.call({}, 10, 20);
const _apply = sum.apply({}, [10, 20]);
const _bind = sum.bind({}, 20, 30);

console.log( _bind );  // function sum(a, b)
console.log( _bind() ); // 50 (bind를 직접 실행시켜야 return)

// target.addEventListner("click", handleClick.bind({})) 같은 형태로 사용
    // 원하는 this({})가 handleClick() 을 가지고 있다가 click 이벤트가 발생할 때 실행하도록
    // 이벤트를 특정 this에 연결하고, 해당 this를 찾아서 활용해야하거나 하는 상황에 쓰임