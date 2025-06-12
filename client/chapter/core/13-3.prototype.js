
/*
    1. constructor 작성하기
    2. click event 연결하기
    3. input값 가져오기 (getter) / 설정하기 (setter)
    4. 태그 랜더링하기
    5. 데이터 보관하기
*/

class Todo {

    input = null;
    button = null;
    renderPlace = null;

    constructor({input, button, renderPlace}) {
        this.input = document.querySelector(input);
        this.button = document.querySelector(button);
        this.renderPlace = document.querySelector(renderPlace);
        this.todoListArray = [];
        this.attachEvent();
    }

    get currentInputTodoData() {
        return this.input.value;
    }
    set currentInputTodoData(value) {
        this.input.value = value;
    }
    addTodoData() {
        if (this.currentInputTodoData === '') return;
        this.todoListArray.push(this.currentInputTodoData);
        console.log(this.todoListArray);
    }

    createTag() {
       return `<li>${this.currentInputTodoData}</li>`
    }

    #render() {
        if (this.currentInputTodoData === '') return;
        this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
        this.currentInputTodoData = '';
    }

    handleClick() {
        // console.log( this.createTag() );
        this.#render();
    }

    attachEvent() {
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.addTodoData();
            this.handleClick();
        });
    }

}


document.querySelector('.todo')

const todo = new Todo({
    input: '.todoInput',
    button: '.todoButton',
    renderPlace: '.todolist'
});


const todo2 = new Todo({
    input: '.todoInput2',
    button: '.todoButton2',
    renderPlace: '.todolist2'
});
