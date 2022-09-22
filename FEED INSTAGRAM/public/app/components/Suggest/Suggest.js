class Suggest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Suggest/Suggest.css">
            <section class="container">
                <section class="profile">
                    <section>
                        <img src="./app/images/photo1.jpg" alt="profile">
                        <section>
                            <h2>agudelo9914</h2>
                            <p>Ana Agudelo</p>
                        </section>
                    </section>
                    <p>Cambiar</p>
                </section>

                <section>
                    <h2>Sugerencias para ti</h2>
                    <p>Ver más</p>
                </section>

                <section class="user-profile">
                    <section>
                        <img src="./app/images/photo2.jpg" alt="profile">
                        <h2>@tristejoker</h2>
                        <p>Meritxell Segura</p>
                        <p>Nuevo en Instagram</p>
                    </section>

                    <section>
                        <img src="./app/images/photo3.jpg" alt="profile">
                        <h2>@elexterminadorfeliz</h2>
                        <p>Fabian Pastor</p>
                        <p>Sugerido para ti</p>
                    </section>

                    <section>
                        <img src="./app/images/photo4.jpg" alt="profile">
                        <h2>@elbuenoelfeoyyo</h2>
                        <p>Cecilio Lamas</p>
                        <p>laescenaguacari y 22 más siguen esta cuent...</p>
                    </section>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-suggest", Suggest);
export default Suggest;
