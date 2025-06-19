// console.log('delay');

import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./type.js";

// callback
function delay(callbackFn, timeout = 1000) {
    setTimeout(callbackFn, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

/* 콜백을 이용한 순차적 애니메이션 (콜백 지옥..) */
delay(()=>{
    first.style.top = '-100px';
    delay(()=>{
        first.style.transform = 'rotate(360deg)'
        delay(()=>{
            first.style.top = '0';
            delay(()=>{
                first.style.top = '100px';
                delay(()=>{
                    first.style.transform = 'rotate(-360deg)'
                    delay(()=>{
                        first.style.top = '0';
                        second.style.top = '0';
                     })
                    second.style.transform = 'rotate(360deg)'
                })
                second.style.top = '-100px';
            })
            second.style.top = '0';
        })
        second.style.transform = 'rotate(-360deg)'
    })
    second.style.top = '100px';
}, )


/* Promise */

function _delayP(shouldRejected = false, timeout = 1000) {
    return new Promise((resolve, reject)=>{
    
    setTimeout(() => {         // 연습용 강제 딜레이
        if(!shouldRejected) {
            resolve('success!');    // PromiseResult = 'success!' 
        } else {
            reject({message:'오류 발생!'});
        }
    }, timeout);

    })
}

// delayP(false,3000)        // [[promise object]]


/* Promise를 사용한 순차적 애니메이션 (보다 순서적으로 명확) */
_delayP(false, 8000)
.then((result)=>{
    console.log(result);
    first.style.top = '-100px';
    second.style.top = '100px';
    return _delayP();    // 두 번째 delay를 발생시키기 위함 (then이 뭘 기다릴지 명확히 return 해줘야함)
}, (error) => {
    console.log(error.message);
})
.then(()=>{
    first.style.transform = 'rotate(360deg)'
    second.style.transform = 'rotate(-360deg)'
    return _delayP();
})
.then(()=>{
    first.style.top = '0';
    second.style.top = '0';
    return _delayP();
})
.then(()=>{
    first.style.top = '100px';
    second.style.top = '-100px';
    return _delayP();
})
.then(()=>{
    first.style.transform = 'rotate(-360deg)'
    second.style.transform = 'rotate(360deg)'
    return _delayP();
})
.then(()=>{
    first.style.top = '0';
    second.style.top = '0';
    return _delayP();
})




/* Object Mixin */

const defaultOptions = {
    shouldRejected: false,
    data: 'Success',
    errorMsg: 'Unknown Error',
    timeout: 1000,
}


function delayP(options) {
    let config = {...defaultOptions};

    if (isNumber(options)) {
        config.timeout = options;
    }

    if (isObject(options)) {
        config = {...defaultOptions, ...options};
            // defaultOption을 먼저 넣고, option에 겹치는 key가 있으면 값 덮어쓰기
    }
    
    const {shouldRejected, timeout, errorMsg, data} = config;

    return new Promise((resolve, reject)=>{
    
    setTimeout(() => {         // 연습용 강제 딜레이
        if(!shouldRejected) {
            resolve(data);    // PromiseResult = 'success!' 
        } else {
            reject({message:errorMsg});
        }
    }, timeout);

    })
}


delayP({
    data: '성공!!',
    // shouldRejected: true,
    // timeout: 1000,
    // errorMsg: '오류 발생!!!!'
})
.then(res => console.log(res));

delayP(5000)
.then(res => console.log(res));