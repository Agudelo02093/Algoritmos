export var AttributeNav;
(function (AttributeNav) {
    AttributeNav["imgprofile"] = "imgprofile";
})(AttributeNav || (AttributeNav = {}));
class Nav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const atrib = {
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
        <section>
            <section>
            <img src="./images/photo1.jpg" alt="logo app">
            </section>
            <section>
            <input type="text" placeholder="Buscar"> !!!Arreglarlo
            </section>
            <section>
            <img src="./images/icons8-casa.svg" alt="home">
            <img src="./images/icons8-facebook-messenger.svg" alt="message">
            <img src="./images/more.svg" alt="add">
            <img src="./images/compass-outline.svg" alt="explore">
            <img src="./images/heart-outline.svg" alt="favorites">
            <img src="./images/photo1.jpg" alt="profile">
            </section>
        </section>
        `;
    }
}
customElements.define('my-nav', Nav);
export default Nav;
