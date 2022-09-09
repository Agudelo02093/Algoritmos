import * as components from "./components/indexcp.js"
import data from "./components/data.js"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = 
        data.forEach(element => {
            this.shadowRoot.innerHTML += `
            <section>
            <my-post imgprofile="${element.imgprofile}" name="${element.name}" gps="${element.gps}" content="${element.content}" views="${element.views}" description="${element.description}"></my-post>
            `;
        });
    }
}

customElements.define("app-container", AppContainer);