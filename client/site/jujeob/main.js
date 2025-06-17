/*
[phase 1]
    1. 주접 떨기 버튼을 클릭하는 함수
    - 주접 떨기 버튼 가져오기
    - 이벤트 연결 'click'
    
    2. input 값 가져오기
    - input.value

    3. data 함수에서 주접 이름 넣고 꺼내기 => 리턴값 확인
    - n번째 주접 랜덤 pick 하기

    4. result에 렌더링하기
    - insertLast

[phase 2]
    5. 예외 처리
    - 이름이 없을 경우 에러
    - 숫자만 들어오면 에러
 */

import { 
    copy,
    insert,
    showAlert,
    getRandom, 
    getNode as $, 
    clearContents, 
    isNumericString,
    shakeAnimation} from "../../lib/index.js"
import jujeobGenerator from "../../data/data.js";

const jujeobBtn = $('#submit');
const nameField = $("#nameField");
const result = $(".result");


function handleSubmit(e) {
    e.preventDefault();

    const name = nameField.value;

    if ( !name.trim() ) {
        // addClass('.alert-error', 'is-active');
        // $('.alert-error').textContent = '공백은 허용하지 않습니다.'

        // setTimeout(()=>{
        //     removeClass('.alert-error', 'is-active');
        // }, 1000)
        showAlert({
            target: '.alert-error',
            message: '공백은 허용하지 않습니다.',
            timeout: 1500,
            className: 'is-active'
        });

        clearContents(nameField);
        shakeAnimation(nameField);
        nameField.focus();
        
        return;
    }

    if( !isNumericString(name) ) {
        showAlert({
            target: '.alert-error',
            message: '유효한 이름을 입력해 주세요.',
            timeout: 1500,
            className: 'is-active'
        });

        clearContents(nameField);
        shakeAnimation(nameField);
        nameField.focus();
        return;
    }

    const jujeobList = jujeobGenerator( name );
    const idx = getRandom(0, jujeobList.length);
    const pick = jujeobList[idx];

    clearContents(result);
    insert(result, pick, 'last');
    // nameField.value='';
}

function handleCopyClipboard() {

    copy(this.textContent)
    .then(()=>{
        showAlert({
        target: '.alert-success',
        className: 'is-active',
        message: '클립보드 복사 완료!',
        timeout: 2000,
    })
    })
}


jujeobBtn.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopyClipboard);