import * as components from "./components/indexcp.js"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <my-post imgprofile="./images/perfil2.jpg" name="agudelo9914" gps="Universidad Icesi" content="./images/perfil2.jpg" views=230 description="Hola profe"></my-post>
        `
    }
}

customElements.define("app-container", AppContainer);