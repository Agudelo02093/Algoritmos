export enum AttributeNav {
    "imgprofile" = "imgprofile"
}

class Nav extends HTMLElement {
    imgprofile?: any;

    static get observedAttributes(){
        const atrib: Record<AttributeNav,null> = {
            imgprofile: null,
        };
        return Object.keys(atrib);
    }

    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }

    attributeChangedCallback(propName: any, oldValue: string, newValue: string) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.mount();
    }

    mount(): void {
        this.render();
    }

    render(): void {
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
        `
    }
}

customElements.define('my-nav', Nav);
export default Nav;