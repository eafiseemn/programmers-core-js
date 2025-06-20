import { 
    changeColor, 
    delayP, 
    END_POINT,
    fetchData, 
    getNode, 
    renderEmptySVG, 
    renderSpinner, 
    renderUserCard
 } from '../../lib/index.js';

async function renderUserList(){
    renderSpinner('.user-card-inner', 200, '유저 정보를 가져오는 중...🧐');
    await delayP(1000); // 테스트를 위해 강제 딜레이 생성 중

    try {
        const data = await fetchData.get(END_POINT);   // try test
        // const data = await fetchData.get('');   // catch test
        
        gsap.to('.loadingSpinner', {
            opacity: 0,
            duration: 0.2,
            onComplete() {
                // getNode('.loadingSpinner').remove();
                this._targets[0].remove();

                data.forEach((user) => renderUserCard('.user-card-inner', user));
                changeColor('.user-card');

                gsap.from('.user-card', {
                    opacity: 0,
                    stagger: 0.1,
                    x: -30,
                })
            }
        })
    }
    catch {
        gsap.to('.loadingSpinner', {
            opacity: 0,
            duration: 0.2,
            onComplete() {
                this._targets[0].remove();
                renderEmptySVG('.user-card-inner', 200, '유저 정보를 불러올 수 없어요! 😭');
            }
        })
    }
}

renderUserList();


const userCardInner = getNode('.user-card-inner');

function handleDelete(e) {
    const button = e.target.closest('button');
    if(!button) return;

    const id = button.dataset.value;
    const data = fetchData.delete(END_POINT+`/${id}`);
    console.log( data );
}

userCardInner.addEventListener('click', handleDelete);