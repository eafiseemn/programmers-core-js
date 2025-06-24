
class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        // console.dir(this.shadowRoot);   // mode: closed 이면 null

        this.state = {
            active: this.getAttribute('active') || false
        }

        this.render();
        this.button = this.shadowRoot.querySelector('button');
    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'active') {
            this.state.active = newValue === 'true';
            this.render();
            // console.log(name, oldValue, newValue);
        }
    }

    handleClick() {
        // console.log('clicked');
        const newActiveState = !this.state.active;
        this.setAttribute('active', newActiveState);
    }

    attachEvent() {
        this.shadowRoot.querySelector('button')
          .addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        const { active } = this.state
        this.shadowRoot.innerHTML = `
        <style>
            button {
              background-color: ${ active ? "orange" : "hotpink" };
              border: none;
              border-radius: 20%
            }
        </style>
        <button 
          type="button"
          aria-label="${active ? "활성화" : "비활성화"}"
          aria-pressed="${active}"
        >${active ? "🥸" : "🥳"}</button>`;

        this.attachEvent();
    }
}

customElements.define('my-button', Button);

// console.log( document.querySelector('button') );  // null
