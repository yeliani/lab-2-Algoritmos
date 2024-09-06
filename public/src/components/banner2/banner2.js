class Banner2 extends HTMLElement {
    static get observedAttributes() {
        return [];
}

constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

connectedCallback() {
    this.render();
    
}

attributeChangedCallback(name, oldValue, newValue) {
   
}


    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/banner2/banner2.css">
             <div class="titulo">
              <h1>Star Wars Outlaws</h1>
              </div>
              <div class="escrito"
              <p>Get 3 Days Early Access with Ubisof+ Premium or Gold Edition</p>
              </div>
            

    `;
    }
}

customElements.define('bannertwo-component', Banner2);
export default Banner2;