/* -------------------------------------------------------------------------- */
/*                               Array's Methods                              */
/* -------------------------------------------------------------------------- */

const people = [
    {
        id: 0,
        name: 'Emily',
        age: 30,
        job: 'FEEng',
        imgSrc: 'https://randomuser.me/api/portraits/med/women/20.jpg',
        imgAlt: '대체 텍스트입니다...',
    } , {
        id: 1,
        name: 'June',
        age: 35,
        job: 'AM',
        imgSrc: 'https://randomuser.me/api/portraits/med/women/40.jpg',
        imgAlt: '대체 텍스트입니다...',
    } , {
        id: 2,
        name: 'MJ',
        age: 40,
        job: 'DA',
        imgSrc: 'https://randomuser.me/api/portraits/med/women/45.jpg',
        imgAlt: '대체 텍스트입니다...',
    }
]

const _people = [...people];
// Array.isArray
// console.log( people.isArray() );


/* 요소 순환 ---------------------------- */

// forEach
function callUser(user) {
    console.log( user );
}

people.forEach(callUser);


const spans = document.querySelectorAll('span');
spans.forEach( (span, index) => {

    // span.addEventListener('click', () => {
    //     console.log(this); // 화살표 함수는 this가 바인딩 되지 않으므로 항상 window
    // })
    // span.addEventListener('click', function() {
    //     console.log(this);  // <span> 찾을 수 있음
    // })
    span.addEventListener('click', (e) => {
        console.log(this);
    })

} )

// 모든 요소에 event를 다는 것은 브라우저에 있어 부담 -> event delegation (이벤트 위임) 사용 필요


/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift



// reverse
const _reverse = _people.reverse();
console.log ( _reverse );
console.log ( _people );     // 원본 훼손됨


const reverse = people.toReversed();
console.log ( reverse );
console.log ( people );     // 원본 훼손되지 않음 (안전)



// splice
const _splice = _people.splice(0, 1, {name: 'Sunny'})
console.log ( _splice );     // 제거된 아이템 (people[0] 부터 1개의 아이템)
console.log ( _people );     // 원본 훼손


const splice = people.toSpliced(0, 0, {name: 'Jake'})
console.log ( splice );     // 아이템 추가된 array
console.log ( people );     // 원본 보존

const arr = [5, 4, 2, 7, 3, 1];
const _arr = [5, 4, 2, 7, 3, 1];

function toCompare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

// sort
const _sort = _arr.sort(toCompare);
console.log( _sort );   // 정렬된 배열
console.log( _arr );    // 원본 훼손

const sort = arr.toSorted(toCompare);
console.log( sort );    // 정렬된 배열
console.log( arr );     // 원본 보존


/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

// 사람들의 직업만을 모아놓은 배열 반환
const jobs = people.map( user => user.job );
console.log( jobs );

// 현재 나이에서 전부 +2세를 추가한 새로운 배열 반환
const ages = people.map( user => user.age +2 );
console.log( ages );


const tags = people.map((user) => {

    const template = /* html */`
    <li key="${user.id}">
        <figure>
            <img src="${user.imgSrc}" />
            <figcaption>${user.imgAlt}</figcaption>
        </figure>
        <ul>
            <li>이름 : ${user.name}</li>
            <li>나이 : ${user.age}</li>
            <li>직업 : ${user.job}</li>
        </ul>
    </li>
    `;
    return template;
})

const list = document.querySelector(".todolist2");
// tags.forEach((li) => list.insertAdjacentHTML('beforeend',li));
    // 그냥 tags 통째로 넣으면 [<code> , <code> , <code> ] 사이 콤마까지 들어가니까
    // forEach 로 하나씩 넣어야 깔끔하게 들어감

list.insertAdjacentHTML('beforeend', tags.join('<hr />'));
    // 혹은 이런 형태로 join('') 해서 문자열로 넣음


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const az = people.find((user) => {
    return user.age >= 40;
})
console.log( az );


// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
const mz = people.filter( user => user.age < 40);
console.log( mz );  // 조건에 맞는 요소를 포함한 array를 반환


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
    return acc + cur.age;
}, 0)
console.log( totalAge );


const template = people.reduce((htmlCode, user) => {
    return htmlCode + `<li>${user.name}, ${user.age}, ${user.job}</li>`
}, '');

list.insertAdjacentHTML('beforebegin', template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const _array = '안/녕/하/세/요';

// split
const stringToArray = _array.split('/');
console.log( stringToArray );

// join
const arrayToString = stringToArray.join('/');
console.log( arrayToString );



/* 배열 메소드 직접 만들어보기 ---------------------- */

console.clear();

const products = [
    { name: '냉동 만두', price: 10000, brand: '비비고',},
    { name: '냉동 피자', price: 15000, brand: '오뚜기',},
    { name: '냉동 새우', price: 12000, brand: '곰곰',},
    { name: '냉동 치킨', price: 11000, brand: '하림',},
];


// forEach
products.forEach(item => console.log(item));

const _forEach = (iterator, fn) => {
    for( const i of iterator ) fn(i);
}
_forEach(products, (item)=>{ 
    console.log( item );
});


// map
const brandArray = products.map(item => item.brand);
console.log(brandArray);

const _map = (iterator, fn) => {
    const array = [];
    for( const i of iterator) {
        array.push(fn(i));
    }
    return array;
}

const _priceArray = _map(products, item => item.price)
console.log( _priceArray );


// filter
const filteredProduct = products.filter(item => item.price < 15000);
console.log( filteredProduct )

const _filter = (fn, iterator) => {
    const array = [];
    for( const i of iterator) {
        if(fn(i)) array.push(i);
    }
    return array;
}

const _filteredProduct = _filter(item => item.price < 15000 , products);
console.log( _filteredProduct );