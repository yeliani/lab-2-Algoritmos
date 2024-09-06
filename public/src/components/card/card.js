class CardDescriptGame extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'subtitle',"icon1","icon2","icon3","icon4",];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/card/card.css">
			<div>
                <img src=${this.img}>
                <div>
                    
                    <h3>${this.subtitle}</h3>
                 </div>
				 <div class="icons">
				 <svg> ${this.icon1}</svg>
				 <svg> ${this.icon2}</svg>
				 <svg> ${this.icon3}</svg>
				 <svg>${this.icon4}</svg>

				 </div>
            </div>
			
    `;
	}
}

customElements.define('descript-gamecard', CardDescriptGame );
export default CardDescriptGame ;