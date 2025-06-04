/* -------------------------------------------------------------------------- */
/*                                 For Of Loop                                */
/* -------------------------------------------------------------------------- */

// enumerable : 열거 가능한
// iterable   : 반복 가능한
// mutable    : 변형 가능한 (mutant)
// immutable  : 변형할 수 없는


// for ... of 반복문 : iterable한 요소에만 사용할 수 있음
    // 배열 (여러 자료형을 넣을 수 있고 순서(index) 및 length가 있는 요소) : iterable


const arrayLike = {
    0: 'body',
    1: 'head',
    2: 'div',
    3: () => {},
    4: 100,
    length: 5
}   // 배열이 아니지만 배열처럼 생긴 요소

/*
for (const key of arrayLike) {
    console.log(key);
}  // Error: arrayLike is not iterable
   // prototype 중 Symbol(Symbol.iterator) 가 있어야 iterable한 요소
   // Symbol(Symbol.iterator) {} function을 직접 만들어서 넣으면 for...of 돌아감

   // 다른 유사 배열 예시
    // document.querySelectorAll('span') = NodeList --> iterable
    // document.getElementsByTagName('span') = HTMLCollection --> iterable

*/


for (const key of 'hello javascript') {
    console.log(key);
}  // "hello javascript" 가 한 글자씩 출력됨 (문자도 iterable한 요소)



const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


// for ~ of 문
for(const key of languages) {
    console.log(key);
}

// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
Object.prototype.nickName = 'tiger';
for(const value of languages) {
    console.table(value);
}    // nickName 이 나오지 않음 (자신이 가지고 있는 property만 순환)


// - 특정 조건에서 건너띄기
// - 'Java' 가 나오지 않도록
for (const value of languages) {
    const name = value.name;
    if (name.includes('Java') && name.length < 5) continue;
        // if(name === 'Java' ) continue;
    console.log(name);
    console.table(value);
}


// - 특정 조건에서 중단하기
for (const value of languages) {
    const name = value.name;
    if (name.includes('Java') && name.length < 5) break;
        // if(name === 'Java' ) continue;
    console.log(name);
    console.table(value);
}



// 객체의 키, 값 순환
// - for ~ in 문
const obj = {
    name : 'tiger',
    age : 30
}
for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
        console.log(key);
    }
} 

// - for ~ of 문
    // 객체를 for...of로 쓰려면 Symbol.iterator를 추가해줘야 하므로 (귀찮음)
    // 객체를 배열로 만드는 방식 사용
const keys = Object.keys(obj);       // 객체의 key값을 모아 새로운 배열을 '반환'하는 유틸함수
const values = Object.values(obj);   // 객체의 value값을 모아 새로운 배열을 '반환'하는 유틸함수

for (const key of keys) {
    console.log(key);
}
for (const key of values) {
    console.table(key);
}

// key와 value를 한 번에 같이 얻는 방법
console.clear();

const objEntries = Object.entries(obj); // 객체의 key, value를 모아 한 쌍의 배열로 반환하는 유틸함수
    // [[key,value], [key,value], ..., [key,value]]

for (const keyValue of objEntries) {
    const key = keyValue[0];
    const value = keyValue[1];

    console.log(key, value);
}

    // 구조분해할당 사용 가능
    for (const [key, value] of objEntries) {
        console.log(key, value);
    }





const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
for (const key in randomUser) {
    if (Object.hasOwn(randomUser, key)) {
        const L1 = randomUser[key];
        if (typeof L1 === 'object') {

            for (const key in L1) {
                if (Object.hasOwn(L1,key)) {
                    const L2 = L1[key];
                    console.log('\t\t', L2);

                    if (typeof L2 === 'object') {
                        for (const key in L2) {
                            if (Object.hasOwn(L2,key)) {
                                const L3 = L2[key];
                                console.log('\t\t', L3);
                            }
                        }

                    }
                }
            }
        }

    }
} 

// - for ~ of 문
for (const keyValue of Object.entries(randomUser)) {
    const key = keyValue[0];
    const value = keyValue[1];
    console.log(value);

    if ( typeof value === 'object') {
        for (const keyValue of Object.entries(value)) {
            const key = keyValue[0];
            const value = keyValue[1];
            console.log(value);

            if (typeof value === 'object') {
                for (const keyValue of Object.entries(value)) {
                const key = keyValue[0];
                const value = keyValue[1];
                console.log(value);
                }
            }
        }
    }
}
    // 나중에는 재귀함수를 사용하여 더 간결하게 만들 수 있음


// - 성능 비교 진단