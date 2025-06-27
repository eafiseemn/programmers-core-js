class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.state = {
            showImage: this.getAttribute('show_image') || 'true',
            title: this.getAttribute('title') || 'Card title'
        }

        this.render();
    }

    render() {
        const { showImage, title } = this.state;
        const figure = 
            `<figure>
                <img src="../../assets/visual.png" alt="" />
                <figcaption class="a11y-hidden">맛있고 새빨간 딸기</figcaption>
            </figure>`;

        this.shadowRoot.innerHTML = /* html */`
        <style>
	        @import url("../../components/Card/Card.css");
        </style>
        <div class="card">
            ${ showImage === "true" ? figure : ''}
            <h2>대제목 입력</h2>
            <p>description...</p>
            <button type="button">Button</button>
        </div>
        `
    }
}

customElements.define('c-card', Card);


