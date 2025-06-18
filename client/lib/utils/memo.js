/* -------------------------------------------------------------------------- */
/*                                 memoization                                */
/* -------------------------------------------------------------------------- */

export const memo = (() => {
    const cache = {};

    return (key, callbackFn) => {
        if(!callbackFn) return cache[key];  // getter

        if(cache[key]) {
            console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`)

            if(confirm('캐시 값을 덮어쓰기 하시겠습니까?')) { cache[key] = callbackFn(); }
            else return;
        }
        cache[key] = callbackFn();          // setter
    }
})()
