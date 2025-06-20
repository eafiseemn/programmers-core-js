import { 
    getNode,
    deleteStorage,
    getStorage,
    setStorage,
    getPokemonData
 } from '../../lib/index.js';


/*
 1. input 이벤트 바인딩
 2. input 값을 localStorage에 저장
 3. 새로고침 시 데이터가 textarea 안에 유지될 수 있게 설정
 4. clear 버튼 클릭 시 모든 데이터 제거
 */


const textField = getNode('#textField');
const clearBtn = getNode('button[data-name="clear"]');

function initTextInput() {
    // const text = await getStorage("inputText");
    // textField.value = text;
    getStorage("inputText")
    .then((res) => {
        textField.value = res;
    })
}

// initTextInput();

function handleTextInput(e) {
    e.preventDefault();
    setStorage("inputText", textField.value);
}

function clearStoredText(e) {
    e.preventDefault();
    deleteStorage("inputText");
    textField.value = '';
}

window.addEventListener('DOMContentLoaded', initTextInput);
textField.addEventListener('input', handleTextInput);
clearBtn.addEventListener('click', clearStoredText);