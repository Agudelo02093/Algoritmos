//Como pongo el numerito de las notificaciones?

import * as components from "./components/indexcp.js"
import data from "./components/data.js";

console.log(data);

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        data.forEach(element => {
            this.shadowRoot.innerHTML += `
            <section>
            <my-profile imgprofile="${element.imgprofile}" name="${element.name}" age="${element.age}" description="${element.description}"></my-profile>
            `;
        });
    }
}

customElements.define("app-container", AppContainer);