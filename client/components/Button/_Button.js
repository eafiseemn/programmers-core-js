/* ---------------------------------------------- */
/*       Web Component API - Custom Elements.     */
/* ---------------------------------------------- */

class MyElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('mount');
        this.render();
        this.attachEvent();
    }

    disconnectedCallback() {
        console.log('unmount');
    }

    static get observedAttributes() {
        
        return ['data-value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'data-value') {
            this.render();
        }
        console.log( name, oldValue, newValue );
    }

    handleClick() {
      console.log('clicked');
      this.dataset.value = ++this.count;
    }

    attachEvent() {
        this.addEventListener('click', this.handleClick); 
    }

    count = 0

    render() {
        console.log(this);
        this.innerHTML = this.dataset.value;
    }
}

customElements.define('my-element', MyElement);

// const element = document.createElement('my-element');
// document.body.append(element);


class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
  }
}

customElements.define('hello-button', HelloButton);