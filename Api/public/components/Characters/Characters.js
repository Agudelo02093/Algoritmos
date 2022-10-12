export var AttributeApi;
(function (AttributeApi) {
    AttributeApi["name"] = "name";
    AttributeApi["birth_year"] = "birth_year";
    AttributeApi["gender"] = "gender";
    AttributeApi["height"] = "height";
    AttributeApi["mass"] = "mass";
})(AttributeApi || (AttributeApi = {}));
class MyCharacter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            name: null,
            birth_year: null,
            gender: null,
            height: null,
            mass: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Characters/Characters.css">
            
            <section class="container">
                <section class="name">
                    <h2>${this.name}</h2>
                </section>
                <section class="card">
                    <section class="datas">
                        <img src="./images/calendar.png">
                        <p>  : ${this.birth_year}</p>
                    </section>
                    <section class="datas">
                        <img src="./images/gender.png">
                        <p>  : ${this.gender}</p>
                    </section>
                    <section class="datas">
                        <img src="./images/ruler.png">
                        <p>  : ${this.height}</p>
                    </section>
                    <section class="datas">
                        <img src="./images/kilogram.png">
                        <p>  : ${this.mass}</p>
                    </section>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-character", MyCharacter);
export default MyCharacter;
