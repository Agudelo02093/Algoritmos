export enum AttributeApi {
    "name" = "name",
    "birth_year" = "birth_year",
    "gender" = "gender",
    "height" = "height",
    "mass" = "mass"
}

class MyCharacter extends HTMLElement{
    name?: string;
    birth_year?: string;
    gender?: string;
    height?: string;
    mass?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeApi,null> = {
            name: null,
            birth_year: null,
            gender: null,
            height: null,
            mass: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeApi, 
        oldValue: string | undefined, 
        newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
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
            `
        }
    }

}

customElements.define("my-character", MyCharacter);
export default MyCharacter;