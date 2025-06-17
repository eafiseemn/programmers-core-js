import { 
    attr, 
    insert,
    getNode, 
    getNodes, 
    scrollBottom,
    diceAnimation, 
 } from '../../lib/index.js'

// console.log( diceAnimation );
// setInterval (diceAnimation, 1000);


/*
  1. 주사위 굴리기 버튼을 선택
  2. 클릭 이벤트 바인딩
  3. setInterval diceAnimation
  4. 같은 버튼을 눌렀을 때 토글 처리
    - 상태 변수 만들기
    - 조건 처리
  5. 애니메이션 재생 / 정지
  6. record / reset Button 활성화 / 비활성화(target.disabled = true || false)
 */


const [rollingBtn, recordBtn, resetBtn] = getNodes(".buttonGroup button");
// const btnList = getNodes(".buttonGroup button");
// const rollingBtn = btnList[0];

const recordListWrapper = getNode(".recordListWrapper");

/*
  1. 주사위 눈 가져오기
  2. 태그 만들고
  3. 태그 랜더링 하기
 */


// const recordList = [];
// let diceNum = cube.getAttribute("dice");
// let totalDiceNum = recordList.reduce((acc,cur)=>acc+cur);
// const template = `
//         <tr>
//             <td>${recordList[-1][0]}</td>
//             <td>${recordList[-1][1]}</td>
//             <td>${recordList[-1][2]}</td>
//           </tr>`

// function renderRecordItem() {
//     recordList.push({
//         times: recordList.length,
//         currentRecord: diceNum,
//         totalRecord: totalDiceNum,
//     });
//     insertAfter(recordBody,template)
// }

let count = 0;
let total = 0;

function createItem(diceNumber) {
    return `
        <tr>
            <td>${++count}</td>
            <td>${diceNumber}</td>
            <td>${total += diceNumber}</td>
        </tr>`;
}

function renderRecordItem() {
    const diceNumber = +attr('#cube', 'dice');
    insert('tbody', createItem(diceNumber), 'last');
    
    scrollBottom(recordListWrapper);
}

function resetRecordItem() {

}

const handleRollingDice = (() => {
    let id ;
    return (e) => {
        e.preventDefault();
        rollingBtn.classList.toggle('isClicked');
        // console.log(rollingBtn.className);
        
        if(rollingBtn.classList.contains('isClicked')) {
            // console.log('on');
            id = setInterval( diceAnimation, 100 );
            recordBtn.disabled = true;
            resetBtn.disabled = true;
        } else {
            // console.log('off');
            clearInterval( id );
            recordBtn.disabled = false;
            resetBtn.disabled = false;
        };
    }
})()

function handleRecording() {
    recordListWrapper.hidden = false;
    renderRecordItem();
}

function handleReset() {
    // recordListWrapper.hidden = true;
    resetRecordItem();
    recordBtn.disabled = true;
    resetBtn.disabled = true;
}



rollingBtn.addEventListener('click', handleRollingDice);
recordBtn.addEventListener('click', handleRecording);
resetBtn.addEventListener('click', handleReset);