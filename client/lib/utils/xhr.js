/* -------------------------------------------------------------------------- */
/*                               Async JS - XHR                               */
/* -------------------------------------------------------------------------- */

/* XHR 기본 개념 */
/*
const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();

console.log ( xhr.readyState ); // 0

xhr.open('GET', END_POINT); // 어떤 통신을 할지, 통신할 주소

/~
 [readyState]
 0: uninitialized
 1: loading
 2: loaded
 3: interactive
 4: complete ( 통신 성공 || 실패 )
 ~/

console.log ( xhr.readyState ); // 1

xhr.addEventListener('readystatechange', () => {

    const {readyState, status, response} = xhr;
    console.log ( readyState );      // 2, 3, 4

    if(readyState === 4) {
        console.log ( `${status} - 통신 완료` );

        if (status >= 200 && status < 400) {
            console.log ( JSON.parse( response ) );
        } else {
            console.log ( '데이터 로드 실패' );
            switch (status) {
                case 404:
                    console.log('NOT FOUND');
                    // location.href = '404.html';
                    break;
                case 403:
                    console.log('NOT AUTORIZED');
                    break;
            }
        }
    }
})

xhr.send(); // POST / PUT / PATCH 같이 생성 & 수정 내용을 보내야할 때
*/


function xhr({
    method = 'GET', 
    url, 
    success = (data) => { console.log('data load success') }, 
    fail = () => {console.log('data load failed')}, 
    body = null,
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
} = {}) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    /* header 설정 */
    if(method !== 'DELETE') {
        Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value); 
    })

    xhr.addEventListener('readystatechange', () => {
        const { readyState, status, response } = xhr;
        if(readyState === 4) {
            console.log( `${status} - 통신 완료` );
            if (status >= 200 && status < 400) {
                const data = JSON.parse( response );
                return success(data) ;
            } else {
                // console.log ( '데이터 로드 실패' );
                // switch (status) {
                // case 404:
                //     console.log('NOT FOUND');
                //     break;
                // case 403:
                //     console.log('NOT AUTORIZED');
                //     break;
                fail({message: '오류가 발생했습니다!'});
            }
        }
    })
    xhr.send(JSON.stringify(body));
    } else {
        xhr.send();
    }
}


const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// xhr({
//     url: END_POINT,
//     success: (data) => { console.log( data ); }
// })

const obj = {
    name: "tiger",
    age: 30,
    email: "tiger@gmail.com"
}

// xhr({
//     method: 'POST', 
//     url: END_POINT, 
//     success: (data) => { console.log(data) },
//     fail: ({message}) => { console.log(message) },
//     body: obj,
// })

// xhr({
//     method: 'DELETE', 
//     url: `${END_POINT}/4`, 
//     success: (data) => { console.log(data) },
//     fail: ({message}) => { console.log(message) },
// })



/* 함수 메서드 추가 */
xhr.get = (url, success, fail) => {
    xhr({ method:'GET', url, success, fail,})}

xhr.post = (url, body, success, fail) => {
    xhr({method:'POST', url, success, fail, body})}

xhr.delete = (url, success, fail) => {
    xhr({method:'DELETE', url, success, fail})}

xhr.put = (url, body, success, fail) => {
    xhr({method:'PUT', url, success, fail, body})}

xhr.patch = (url, body, success, fail) => {
    xhr({method:'PATCH', url, success, fail, body})}



// xhr.get(END_POINT, (data)=>{ console.log(data) }, ()=>{});
// xhr.post(END_POINT, obj);
// xhr.patch(`${END_POINT}/4`, {username:"emily"}, (data)=>{ console.log(data) }, ()=>{});



/* XHR Promise */

const _defaultOptions = {
    method: "GET", 
    url: '', 
    body: null,
    errorMessage: '서버와의 통신이 원활하지 않습니다.',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

export function xhrPromise(options = {}) {
    const {method, url, body, errorMessage:message, headers} = {
        ..._defaultOptions, 
        ...options, 
        headers: {
            ..._defaultOptions.headers,
            ...options.headers
        }};
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if(!(method === 'DELETE')) {
        Object.entries(headers).forEach(([k,v]) => {
            xhr.setRequestHeader(k,v);
        })
    }
    xhr.send(body ? JSON.stringify(body) : null);
    return new Promise ((res, rej) => {
        xhr.addEventListener('readystatechange', () => {
        const { readyState, status, response } = xhr;
        if (readyState === 4) {
            if ( status >= 200 && status < 400 ) {
                res( JSON.parse(response) );
            } else {
                rej({message});
            }
        }})})
}


// xhrPromise({
//     method: 'POST',
//     url: END_POINT,
//     body: obj,
// })
// .then((res) => {
//     console.log( res );
// })
// .catch((err) => {
//     console.log( err.message );
// })

xhrPromise.get = (url) => xhrPromise({url});
xhrPromise.post = (url, body) => xhrPromise({method: 'POST', url, body,});
xhrPromise.put = (url, body) => xhrPromise({method: 'PUT', url, body,});
xhrPromise.patch = (url, body) => xhrPromise({method: 'PATCH', url, body,});
xhrPromise.delete = (url) => xhrPromise({method: 'DELETE', url});


// xhrPromise.post(END_POINT+1,obj)
// .then((res) => {
//     console.log( res );
// })
// .catch((err) => {
//     console.log( err.message );
// })