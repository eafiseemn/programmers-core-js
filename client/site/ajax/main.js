import { 
    changeColor, 
    clearContents, 
    delayP, 
    END_POINT,
    fetchData, 
    getNode, 
    renderEmptySVG, 
    renderSpinner, 
    renderUserCard
 } from '../../lib/index.js';


const userCardInner = getNode('.user-card-inner');

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

                clearContents(userCardInner);
                console.log(userCardInner.textContent.length); 
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


function handleDelete(e) {
    const button = e.target.closest('button');
    if(!button) return;

    const id = button.dataset.value;
    const data = fetchData.delete(END_POINT+`/${id}`)
    .then(() => {
        alert('삭제가 완료됐습니다!')
        renderUserList();
    })
}

userCardInner.addEventListener('click', handleDelete);


const createBtn = getNode('.create');
const cancelBtn = getNode('.create .cancel');
const doneBtn = getNode('.create .done');


function handleCreate() {
    const pop = getNode('.create .pop');
    // pop.style.opacity = 1;
    // pop.style.visibility = 'initial';

    gsap.to(pop,{
        autoAlpha: 1
    })
}

function handleCancel(e) {
    const pop = getNode('.create .pop');
    e.stopPropagation();    // createBtn 위에 cancelBtn이 있어서
    gsap.to(pop, {
        autoAlpha: 0
    })
}

function handleDone(e) {
    e.preventDefault();
    const name = getNode('#nameField').value;
    const email = getNode('#emailField').value;
    const website = getNode('#siteField').value;

    fetchData.post(END_POINT, {name, email, website})
    .then(() => {
        gsap.to('.create .pop', { autoAlpha: 0 } )
        getNode('#nameField').value = '';
        getNode('#emailField').value = '';
        getNode('#siteField').value = '';
        renderUserList();
    });

}

createBtn.addEventListener('click', handleCreate);
cancelBtn.addEventListener('click', handleCancel);
doneBtn.addEventListener('click', handleDone);



const registerBtn = getNode('.register');
const registerCancelBtn = getNode('.register .cancel');
const registerDoneBtn = getNode('.register .done');

function handleRegister() {
    const pop = getNode('.register .pop');
    gsap.to(pop,{
        autoAlpha: 1
    })
}

function handleRegisterCancel(e) {
    const pop = getNode('.register .pop');
    e.stopPropagation(); 
    gsap.to(pop, {
        autoAlpha: 0
    })
}

function handleRegisterCreate(e) {
    e.preventDefault();

    const name = getNode('#create-name').value;
    const email = getNode('#create-email').value;
    const password = getNode('#create-password').value;

    fetchData.post('http://localhost:3000/register', {
        name,
        email,
        password
    })
    .then((data) => {
        console.log('회원가입 성공!');
        gsap.to('.register .pop', { autoAlpha: 0 } )

        fetchData.post('http://localhost:3000/login', {
            name: `${getNode('#create-name').value}`,
            email: `${getNode('#create-email').value}`,
            password: `${getNode('#create-password').value}`
        })
        getNode('#create-name').value = ''
        getNode('#create-email').value = ''
        getNode('#create-password').value = ''
    }).then(() => {
        console.log('로그인 성공!');
    })
    .catch((err) => {
        console.error('이미 존재하는 이메일이거나 잘못된 요청입니다.');
        console.error('에러:', err);
    });
}



registerBtn.addEventListener('click', handleRegister);
registerCancelBtn.addEventListener('click', handleRegisterCancel);
registerDoneBtn.addEventListener('click', handleRegisterCreate);
