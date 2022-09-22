export enum AttributeStorie {
    "name" = "name",
    "imgprofile" = "imgprofile"  
}

class Storie extends HTMLElement {
    name?: string;
    imgprofile?: any;

    static get observedAttributes(){
        const atrib: Record<AttributeStorie,null> = {
            name: null,
            imgprofile: null,
        };
        return Object.keys(atrib);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    attributeChangedCallback(propName: any, oldValue: string, newValue: string) {
        if(this[propName]=== newValue) return;
        this[propName] = newValue;
        this.mount();
    }

    mount(): void {
        this.render();
    }

    render(): void {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Stories/storie.css">
        <section>
            <img src="${this.imgprofile}" alt="img storie">
            <p>${this.name}</p>
        </section>
        `
    }
}

customElements.define('my-storie', Storie);
export default Storie;