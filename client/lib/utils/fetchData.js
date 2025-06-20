/* -------------------------------------------------------------------------- */
/*                                    fetch                                   */
/* -------------------------------------------------------------------------- */

// fetch 는 Promise를 반환
// Promise 의 {response}를 사용하기 위해 .then 이나 await 사용
// response 는 통신 결과 (ok: true)나 응답 코드 (status: 200) 등을 포함
// response 에 담겨있는 데이터는 response.json() 으로 가져올 수 있음; JSON.parse(response.result) 와 비슷
// 대신 response.json() 은 JSON.parse(result) 를 promiseResult로 갖는 Promise(<<pending>>) 을 반환
// -> await 을 한 번 더 사용해서 Result 에 바로 접근

// export const END_POINT = 'https://jsonplaceholder.typicode.com/users';
export const END_POINT = 'http://localhost:3000/posts';

// const response = await fetch(END_POINT);

// if(response.ok) {
//     console.log( await response.json() );
// }


/*
 fetch API를 활용한 함수 만들기

 1. 함수로 전달받은 url을 fetch의 인수로 넣어주세요.
 2. 통신을 통해 전달받은 promise 객체의 result를 확인해주세요.
 3. 원하는 데이터를 return 해주세요.
 4. defaultOptions 와 함수로부터 전달 받은 인자를 병합(mixin) 해주세요.
 */

const defaultOptions = {
    method: 'GET',
    url: '',
    body: null,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    errorMessage: '서버와의 통신이 원활하지 않습니다.'
}

export const fetchData = async (options) => {

    const { url, ...rest } = {
        ...defaultOptions, 
        ...options, 
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }};

    const response = await fetch(url, rest);

    if(response.ok) response.data = await response.json();
    else console.error( rest.errorMessage );

    return response.data;
}

// const { data } = await fetchData({url:END_POINT});  // {Response}.data 구조분해할당
// console.log( data );


fetchData.get = (url, options) => fetchData({url, ...options});
fetchData.delete = (url, options) => fetchData({url, method: 'DELETE', ...options});
fetchData.post = (url, body, options) => fetchData({url, method: 'POST', body:JSON.stringify(body), ...options});
fetchData.put = (url, body, options) => fetchData({url, method: 'PUT', body:JSON.stringify(body), ...options});
fetchData.patch = (url, body, options) => fetchData({url, method: 'PATCH', body:JSON.stringify(body), ...options});

// const getData = await fetchData.get(END_POINT);
// console.log( getData );

// const postData = await fetchData.post(END_POINT, {name: "emily"});
// console.log( postData );