class Nav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Nav/Nav.css">

            <section class="container">
                <section class="logo">
                    <img src="./app/images/Instagram_logo.svg.png" alt="logo app">
                </section>
                <section>
                    <input type="text" placeholder="Buscar"> !!!Arreglarlo
                </section>
                <section class="icons">
                    <img src="./app/images/icons8-casa.svg" alt="home">
                    <img src="./app/images/icons8-facebook-messenger.svg" alt="message">
                    <img src="./app/images/more.svg" alt="add">
                    <img src="./app/images/compass-outline.svg" alt="explore">
                    <img src="./app/images/heart-outline.svg" alt="favorites">
                    <img src="./app/images/photo1.jpg" class="profile-nav" alt="profile">
                </section>
            </section>
            `
        }
    }

}

customElements.define("my-nav", Nav);
export default Nav;