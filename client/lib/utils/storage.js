import { isString } from "./type.js";

const { localStorage: storage } = window;

// storage.setItem('name', 'emily');
// console.log( storage.getItem('name') );

// const obj = {
//     "name": "emily", 
//     "age": 30,
//     do(){ return 'nice' }
// };
// storage.setItem(JSON.stringify(obj));
// console.log(JSON.parse(storage.getItem('user')));


export function setStorage(key, value) {
    return new Promise((res, rej) => {
        if(isString(key)) {
            storage.setItem(key, JSON.stringify(value));
            res(value);
        } else {
            rej({message: 'setStorage 함수의 첫 번째 인수는 문자 타입이어야 합니다.'})
        }
    })    
}

export function getStorage(key) {
    return new Promise((res, rej) => {
        if( !storage.getItem(key) ) {
            rej({message: '요청하신 키에 해당하는 값을 찾을 수 없습니다..'})
        } else if ( !isString(key)) {
            rej({message: 'getStorage 함수의 인수는 문자 타입이어야 합니다.'})
        } else {
            let result = JSON.parse(storage.getItem(key));
            res(result);
        }
    })
}

export function deleteStorage(key) {
    return new Promise((res, rej) => {
        if( !storage.getItem(key) ) {
            console.log('요청하신 키에 해당하는 값을 찾을 수 없습니다.');
            let confirmAns = confirm('storage 전체를 삭제하시겠습니까?');
            if (confirmAns) storage.clear();
            else rej({message: '취소하셨습니다.'})
        } else if ( !isString(key)) {
            rej({message: 'getStorage 함수의 인수는 문자 타입이어야 합니다.'})
        } else {
            storage.removeItem(key);
            res('삭제 완료');
        }
    })
}


// setStorage('user', obj)
// .then((value) => {
//     console.log(value);
// })

// getStorage('user')
// .then((result) => {
//     console.log(result);
// })

// deleteStorage('user')
// .then((result) => {
//     console.log(result);
// })