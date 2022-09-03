class MyProfile extends HTMLElement {
  static get observedAttributes() {
    return ["imgprofile", "name", "age", "description"];
  }

  constructor() {
    super(); //coge todos los atributos
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/profile/style.css">
   
    <section class="cotainer">
      <section class="content">
        <img src="${this.imgprofile}" alt="Profile">
        <section class="user">
            <section class="datas">
              <h2>${this.name}</h2>
              <section>
                <p>, ${this.age}</p>
              </section>
            </section>
            <p class="description">${this.description}</p>
        </section>
        <section class="buttons">
          <my-counter countimg="./images/love.png"></my-counter>
          <my-counter countimg="./images/x.png"></my-counter>
        </section>
      </section>   
    </section>
        `;
  }
}

customElements.define("my-profile", MyProfile);
export default MyProfile;
