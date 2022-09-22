export enum AttributeStorie {
    "imgprofile" = "imgprofile",
    "username" = "username",
    "name" = "name"
}

class Suggest extends HTMLElement {
    imgprofile?: any;
    usename?: string;
    name?: string;

    static get observedAttributes(){
        const atrib: Record<AttributeStorie,null> = {
            imgprofile: null,
            username: null,
            name: null,
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
        <section>
            <section>
                <img src="./images/photo1.jpg" alt="profile">
                <h2>agudelo9914</h2>
                <p>Ana Agudelo</p>
                <p>Cambiar</p>
            </section>

            <section>
                <h2>Sugerencias para ti</h2>
                <p>Ver más</p>
            </section>

            <section>
                <section>
                    <img src="./images/photo2.jpg" alt="profile">
                    <h2>@tristejoker</h2>
                    <p>Meritxell Segura</p>
                    <p>Nuevo en Instagram</p>
                </section>

                <section>
                    <img src="./images/photo3.jpg" alt="profile">
                    <h2>@elexterminadorfeliz</h2>
                    <p>Fabian Pastor</p>
                    <p>Sugerido para ti</p>
                </section>

                <section>
                    <img src="./images/photo4.jpg" alt="profile">
                    <h2>@elbuenoelfeoyyo</h2>
                    <p>Cecilio Lamas</p>
                    <p>laescenaguacari y 22 más siguen esta cuent...</p>
                </section>
            </section>
        </section>
        `
    }
}

customElements.define('my-suggest', Suggest);
export default Suggest;