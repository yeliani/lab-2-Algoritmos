class Banner extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description', 'txtbutton'];
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
        <link rel="stylesheet" href="/public/index.css">
        <section class="img-avatar">
		<img class="" src="./src/assets/ubisoft aviso_Mesa de trabajo 1.png" alt="">
        <div class="sec"></div>
        </section>
         <div class="texto">
            <h1>Protect Pandora.BECOME NA'VI</h1>
            <p>Reconnect with your lost heritage discover what it trully means to be Na'vi, and join other clans to <b>
            </b> protect Pandora.</p>
         </div>
    `;
	}
}

customElements.define('banner-component', Banner);
export default Banner;
