/* -------------------------------------------------------------------------- */
/*                                 For In Loop                                */
/* -------------------------------------------------------------------------- */
// for ... in -> 객체 순환 (배열도 객체이므로 사용 가능하나, 기본적으로는 index 출력함)
// for ... of -> 배열 등 반복 가능한(iterable) 요소 순환



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};



// 객체의 속성(property) 포함 여부 확인 방법
// 사용자에게 받은 input 에서 address 가 있으면 --> 주소를 받고
// address 가 없으면 --> 주소를 입력해달라고 alert 보내는 등
// 특정 property가 있는지 확인하고 그에 따른 제어가 필요한 경우에 사용


// '' in object : '' 이 object 안에 들어있는지 확인하는 in 문
console.log('creator' in javaScript);  // true
console.log('createAt' in javaScript); // true
console.log('javaName' in javaScript); // false

// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
Object.prototype.nickName = 'tiger';
console.log('nickName' in javaScript); // true
console.log('constructor' in javaScript); // true
console.log(javaScript);
    // Object는 모든 자료형의 최상단에 있고, prototype은 그 Object의 능력이기 때문에
    // 어떤 객체를 만들어준 조상격인 Object의 원본이 훼손되어 모든 객체에서 조회됨
    // in은 대상 object에 찾는 속성이 없으면 그 상위에 있는 모든 조상까지 찾아서 결과를 출력


// 객체 자신의 속성인지 확인하는 방법 : hasOwnProperty method
console.clear();
console.log(javaScript.hasOwnProperty('creator'));  // true
console.log(javaScript.hasOwnProperty('nickName')); // false
    // hasOwnProperty 는 Object.prototype의 메서드이기 때문에
    // 만약에 javaScript 객체 안에 hasOwnProperty() { return ...} 이라는 메서드가 있으면
    // 그 메서드가 우선적으로 실행됨 (Object.prototype 이 덮어쓰여질 수 있음)

// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// Object.prototype.hasOwnProperty.call();  -- call: Object의 메서드를 빌려쓰기
console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));  // false
console.log(({}).hasOwnProperty.call(javaScript, 'nickName'));  // 이렇게 써도 됨

console.log(Object.hasOwn(javaScript, 'nickName')); // call 하지 않아도 되도록 새롭게 나온 메서드



// for ~ in 문
    // 객체를 순환해서 그 안에 있는 결과값(key)을 모두 확인할 수 있음 

for (const key in javaScript) {
    console.log(key);
}  // creator, createAt, standardName, currentVersion, **nickName** 출력

// - 객체 자신의 속성만 순환하려면?
for (const key in javaScript) {
    if (Object.hasOwn(javaScript, key)) {
    // if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
        console.log(key);
    }
}  // creator, createAt, standardName, currentVersion 출력


// 객체의 값에 접근하는 방법?
for (const key in javaScript) {
    if (Object.hasOwn(javaScript, key)) {
        console.log(javaScript.key);
    }
}   // undefined 출력
    // javaScript.var 를 넣으면 javaScript 안에 "var"라는 key값이 있는지 찾음 
    // (var를 변수로 인식하지 않음)
    // 반드시 대괄호 안에 넣어야 변수로 인식 javaScript[var]

    // undefined 만 나오고 끝나기 때문에, 디버깅 시 에러임을 인식하기 위해
    // throw new Error('에러 발생!') 형태로 에러를 강제 발생시킬 수 있음

for (const key in javaScript) {
    if (Object.hasOwn(javaScript, key)) {
        const value = javaScript[key];
        console.log( value );
    }
}   // 'Brendan Eich', '1995.05', 'ECMAScript', 2023 출력


// - 배열 객체 순환에 사용할 경우?
const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
    console.log(key);         // 0, 1, 2, 3, nickName
    console.log(tens[key]);   // 10, 100, 1000, 10000, tiger
}
    // 배열 순환에도 사용 가능하지만, 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없음
    // 반복되는 순서가 구현에 따라 달라지는데, 순서를 정할 수 있는 배열에 사용하는 건 굳이.. (위험)
    // for...in 은 객체 순환용으로만 사용하고, 배열에는 가능한 for...of 사용
