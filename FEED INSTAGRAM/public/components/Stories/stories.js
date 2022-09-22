export var AttributeStorie;
(function (AttributeStorie) {
    AttributeStorie["name"] = "name";
    AttributeStorie["imgprofile"] = "imgprofile";
})(AttributeStorie || (AttributeStorie = {}));
class Storie extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const atrib = {
            name: null,
            imgprofile: null,
        };
        return Object.keys(atrib);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.mount();
    }
    mount() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Stories/storie.css">
        <section>
            <img src="${this.imgprofile}" alt="img storie">
            <p>${this.name}</p>
        </section>
        `;
    }
}
customElements.define('my-storie', Storie);
export default Storie;
