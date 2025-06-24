
const template = document.createElement('template');

template.innerHTML = `
        <style>
          @import url("../../components/Counter/Counter.css")
        </style>
        <button 
          type="button"
          class="decrement"
          aria-label="감소"
        >-</button>
        <span
          aria-label="counter">
            ${10}
        </span>
        <button 
          type="button"
          class="increment"
          aria-label="증가"
        >+</button>`
        ;

console.log( template.content );


class Counter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.state = {
            value: +this.getAttribute('data-value') || 0
        }
        this.render();
        this.attachEvent();
    }

    static get observedAttributes() {
        return ['data-value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'data-value') {
            this.state.value = +newValue;
            this.render();
        }
        // console.log('data-value', oldValue, newValue);
    }

    handleClickPlus() {
        this.state.value++;
        this.dataset.value = this.state.value;
    }

    handleClickMinus() {
        this.state.value--;
        this.dataset.value = this.state.value;
    }

    handleClick(e) {
        const target = e.target.closest('button');
        if (!target) return;
        if (target.classList.contains('decrement')) this.handleClickMinus();
        if (target.classList.contains('increment')) this.handleClickPlus();
    }

    attachEvent() {
        // const minusBtn = this.shadowRoot.querySelectorAll('button')[0]
        // const plusBtn = this.shadowRoot.querySelectorAll('button')[1]
        // minusBtn.addEventListener('click', this.handleClickMinus.bind(this));
        // plusBtn.addEventListener('click', this.handleClickPlus.bind(this));
        this.shadowRoot.addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        const { value } = this.state;
        this.shadowRoot.innerHTML = `
        <style>
          @import url("../../components/Counter/Counter.css")
        </style>
        <button 
          type="button"
          class="decrement"
          aria-label="감소"
        >-</button>
        <span
          aria-label="counter">
            ${value}
        </span>
        <button 
          type="button"
          class="increment"
          aria-label="증가"
        >+</button>`
        ;
        // url 은 이 js를 읽는 main.js 기준으로 넣어야 함
        // this.shadowRoot.append(template.content.cloneNode(true));
    }
}

customElements.define('c-counter', Counter);

