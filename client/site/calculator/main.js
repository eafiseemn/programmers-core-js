/* -------------------------------------------------------------------------- */
/*                                   계산기 만들기                                */
/* -------------------------------------------------------------------------- */

// import { clearContents } from "../lib/dom/clearContents.js";
// import { insert } from "../lib/dom/insert.js";

import { insert, clearContents } from "../../lib/index.js"

/*
1. input 선택하기 - getNode, querySelector
2. input 이벤트 바인딩 - addEventListener('input')
3. input의 value 값 가져오기
4. 숫자 값 더하기
5. result에 출력하기 - insertLast or insertAdjacentHTML
6. clear 클릭 시 모든 값 초기화
 */

const first = document.querySelector('#firstNumber');
const second = document.querySelector('#secondNumber');
const result = document.querySelector('.result');
const clearBtn = document.querySelector('#clear');

const addVales = (a, b) => a+b;

function handleInput(e) {
    e.preventDefault();

    const firstValue = +first.value;
    const secondValue = +second.value;
    const total = addVales(firstValue, secondValue);

    // result.textContent = '';
    clearContents(result);
    insert(result, total, 'last');
}

function handleClickClear(e) {
    e.preventDefault();
    // first.value = '';
    // second.value = '';
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
    first.focus();
}


first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);

clearBtn.addEventListener('click', handleClickClear);