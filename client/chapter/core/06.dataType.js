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
let stringVar1 = 'Hello';
let stringVar2 = "World";
let stringVar3 = `This is ${stringVar1 + stringVar2}`;

console.log(stringVar1 + " (" + typeof stringVar1 + ")");
console.log(stringVar2 + " (" + typeof stringVar2 + ")");
console.log(stringVar3 + " (" + typeof stringVar3 + ")");

// 4. 정수, 부동 소수점 숫자(길이 제약)
let numVar = 123123124;
console.log(numVar + " (" + typeof numVar + ")");

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigIntVar = 123124124124124121441n;
console.log(bigIntVar + " (" + typeof bigIntVar + ")");

// 6. 참(true, yes) 또는 거짓(false, no)
let booleanVar1 = true;
let booleanVar2 = false;
console.log(booleanVar1 + " (" + typeof booleanVar1 + ")");
console.log(booleanVar2 + " (" + typeof booleanVar2 + ")");

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let objectVar = { name : 'Emily', age : 30 };
console.log(objectVar);
console.log(typeof objectVar);

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

  
// Object

// Array

// function

// this


