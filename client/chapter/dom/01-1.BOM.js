/* -------------------------------------------------------------------------- */
/*                            Browser Object Model                            */
/* -------------------------------------------------------------------------- */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;
const { log, clear } = console;

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload, pathname } = location;
log( href );        // http://localhost:5500/index.html?type=listing&page=2#title
log( protocol );    // http: or https:
log( host );        // localhost:5500
log( port );        // 5500

log( search );      // ?type=listing&page=2 (query string)
const urlParams = new URLSearchParams(location.search);
log( urlParams );   // { type:listing, page:2 }
    // for (const [key, value] of urlParams) {
    // log(`${key}:${value}`);
    // } 
    // parameter를 받아서 (상품코드 같은 것) > 새 창을 띄우거나 무언가 동작해야할 때 사용

log( hash );        // #title (이정표; 페이지 내 특정 부분에 접근 가능)
log( pathname );    // /index.html


// const router = {
//     '/about': '<h1>about PAGE</h1>'
// }
// document.body.innerHTML = router[]






/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;
log( platform );    // MacIntel
log( userAgent );   // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36
log( language );    // ko
log( onLine );      // true

log( geolocation ); // {}
log( geolocation.getCurrentPosition((data) => {
    log( data );
        // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1749691348028}
        // coords : GeolocationCoordinates {
                // latitude: 37.495655187831424, 
                // longitude: 126.75686371464501, 
                // altitude: 0, 
                // accuracy: 40, 
                // altitudeAccuracy: null, …}
        // timestamp : 1749691348028
        // [[Prototype]] : GeolocationPosition
}) )

// callback function 사용
function getGeoLocation(success) {
    geolocation.getCurrentPosition((data) => {
    const {latitude:lat, longitude:long} = data.coords;
    success({lat, long});
    });
}

getGeoLocation((data) => log(data));

// promise API
function _getGeoLocation() {
    const p = new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((data) => {
        const {latitude:lat, longitude:long} = data.coords;
        resolve({lat,long})
    });
    })
    return p;
}

log( _getGeoLocation() );    // Promise {<pending>}
_getGeoLocation()
.then((data) => log(data)); // {lat: 37.495..., long: 126.757...}
// .then()      // 그 다음 할 동작
// .then()      // 그 다음 할 동작
// ...

// async await
// const {lat, long} = _getGeoLocation();


log( navigator.mediaDevices );
navigator.mediaDevices.getUserMedia({video:true})     // Promise 반환
.then((stream)=>{
    log(stream);
    document.querySelector("#videoElement").srcObject = stream;
})


/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

log ( width );  // 1470
log ( height ); // 956
log ( availWidth );  // 1470
log ( availHeight ); // 834 ( 위 아래 요소들 제거하고 실제 쓸 수 있는 모니터 height 영역 )
// cf) innerWidth & innerHeight : 브라우저 창 크기 (반응형 조건 설정)


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;
// history.back() = 뒤로 가기 (사용자를 강제로 보내야할 때)
// history.forward() = 앞으로 가기 
// history.go(n) = n번 이동
log( length );  // 2 (뒤로가기에 쌓인 페이지 스택 수)

