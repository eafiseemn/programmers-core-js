/* -------------------------------------------------------------------------- */
/*                                   Classes                                  */
/* -------------------------------------------------------------------------- */

// 생성자 함수를 만들 때는 class 문법 + PascalCase 를 사용하는 것을 권장

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
    legs = 4;           // 고정된 값은 바깥에 명시
    tail = true;

    #nickName = 'panda'  // private field: 밖에서는 접근이 안되고 class 함수 안에서만 사용 가능

    constructor(name) { // 최초 1회만 실행
        this.name = name;
        this.stomach = [];
    }

    get eat() {
        return this.stomach;
    }

    set eat(food) {
        this.stomach.push(food);
        console.log (`${this.#nickName} loves this ${food}!`)
    }
}

const animal = new Animal('pubao');
console.log ( animal );
console.log ( animal.constructor ); // class Animal

animal.eat = 'bamboo';
console.log ( animal.eat );

// const _animal = Animal('human');
    // Error: Class constructor Animal cannot be invoked without 'new'
// console.log ( animal.#nickName );
    // Error: Private field '#nickName' must be declared in an enclosing class


class Panda extends Animal {
    constructor(name) {
        super(name);    // 부모(Animal)의 constructor를 한 번 더 실행
        this.pattern = 'black and white'
    }

    hunt(target) {
        this.prey = target;
        return `${this.name} wants ${target}`
    }

    static bark(sound) {
        return sound + '🐼'
    }
}

const panda = new Panda('aibao');
console.log( panda );

// 인스턴스 메서드
console.log( panda.hunt('bamboo') );
// console.log( panda.bark('yamyam') );
    // Error: panda.bark is not a function

// 스태틱 메서드
// console.log( Panda.hunt('bamboo') );
    // Error: Panda.hunt is not a function
console.log( Panda.bark('yamyam') );



// class로 DOM 제어하기
/*
1. 버튼 선택
2. textContent 수정
3. 클릭 이벤트 바인딩
4. 태그 생성하기
5. 태그 렌더링하기
*/

class Button {
    constructor({target:selector, content}) {
        this.button = document.querySelector(selector);
        this.button.textContent = content;
        this.attachEvent();
        this.count = 0;
    };
    createTag() {
        return /* html */`<div>${++this.count} times clicked</div>`
    }

    #render() {
        document.body.insertAdjacentHTML('beforeend', this.createTag());
    }

    handleClick() {
        console.log(this);
        this.#render();
    };

    attachEvent() {
        this.button.addEventListener('click', this.handleClick.bind(this));
            // 그냥 this = this.button = <button type="button" class="btn">click me!</button> (button element)
                // this.#render()는 Button 클래스의 프라이빗 메서드인데 
                // 버튼 요소(HTMLButtonElement)에는 #render가 없으니까 #render not a function 에러가 터짐
            
            // bind한 this = this = Button {button: button.btn} (button instance에 접근)
            // ('click', () => this.handleClick() ) 처럼 써도 됨
    };
}

const btn = new Button({
    target: '.btn',         // {} 구조분해할당은 이름을 따라가므로 target이 있어야 함
    content: 'click me!'
})




// User 제어 class
class User {
    #pw;

    constructor(id, pw) {
        this.id = id;
        this.#pw = this.hashPassword(pw);
    }
    hashPassword(pw) {
        this.#pw = `hashCode ${pw} salt and pepper`
        return this.#pw
    }
    checkPassword(pw) {
        return this.#pw === this.hashPassword(pw);
    }
}

const user = new User('tiger', 'hello123');

console.log( user.checkPassword('hello123') );
console.log( user.checkPassword('goodbye123') );


class Admin extends User {
    constructor (id, pw) {
        super(id, pw);
        this.role = 'admin';
    }
    isAdmin() {
        return true;
    }
    banUser (user) {
        console.log(`${user.id} 계정이 관리자 ${this.id}에 의해 정지되었습니다.`)
        user.isBanned = true;
    }
}

const admin = new Admin('admin', 'admin');
admin.banUser(user);

let guestCount = 1;

class Guest extends User {

    constructor() {
        const guestId = `guest_${++guestCount}`;
        super(guestId, null);
        this.role = 'guest';
    }
    isGuest() {
        return true;
    }
    checkPassword() {
        return false;
    }
}