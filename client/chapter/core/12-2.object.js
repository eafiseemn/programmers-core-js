/* -------------------------------------------------------------------------- */
/*                          Copy object by reference                          */
/* -------------------------------------------------------------------------- */

const {log} = console;


/*
1. 참조에 의한 객체 복사 (객체 / 배열은 모두 참조 복사 가능) -> 리액트에서 지양
2. 얕은 복사
3. 깊은 복사
*/


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브(원시) 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;


// 비교 (복사 vs. 참조)
log(message == text);
log(message === text);
log(messenger == conversationTool);
log(messenger === conversationTool);


// 객체 복사 (얕은 복사)
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};
for (const key in messenger) {
    cloneObject[key] = messenger[key];
}
log( cloneObject );

cloneObject.name = 'line';
log( cloneObject );
log( messenger );  // 원본 보존

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);
log( copyObject );

copyObject.name = 'line';
log( copyObject );
log( messenger );  // 원본 보존


// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = {...messenger};
log( spreadObject );

spreadObject.name = 'line';
log( spreadObject );
log( messenger );  // 원본 보존


// 4. 객체를 복사해주는 유틸 함수 
function copiedObject(obj) {
    return Object.assign({}, obj);
}
const _copiedObject = obj => ({...obj});

const functionObject = copiedObject(messenger);
log( functionObject );

functionObject.name = 'line';
log( functionObject );
log( messenger );  // 원본 보존



// 객체 병합(합성) : Object mixin pattern
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
log( combinedCssMap );

let _combinedCssMap = {...cssMapA, ...cssMapB}
log( _combinedCssMap );

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copiedContainerStyles = {
    ...containerStyles
};
log(copiedContainerStyles);
copiedContainerStyles['min-height'] = '50vh';
log(copiedContainerStyles);
log(containerStyles); // 원본 보존

copiedContainerStyles['max-width'].md = 50;
log(copiedContainerStyles['max-width'].md);
log(containerStyles['max-width'].md); // 원본 손상



copiedContainerStyles = {
    ...containerStyles,
    ['max-width']: {
        ...containerStyles['max-width']
    }
};

copiedContainerStyles['max-width'].md = 640;
log(copiedContainerStyles['max-width'].md);
log(containerStyles['max-width'].md); // 원본 보존



// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(   // 다시 객체로 만드는 함수
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);   // 재귀 (최종 depth까지)
      }
      return [key, value];
    })
  );
}

const deepCopied = cloneDeep(containerStyles);

deepCopied['max-width'].md = 700;
log(deepCopied['max-width'].md);
log(containerStyles['max-width'].md); // 원본 보존




// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
