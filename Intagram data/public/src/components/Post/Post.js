class MyPost extends HTMLElement {
    static get observedAttributes() {
      return ["imgprofile", "name", "gps", "content", "views", "description"];
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
      <link rel="stylesheet" href="./src/components/Post/style.css">
  
      <section class="content">
          <section class="head">
            <section class="user">
              <img src="${this.imgprofile}" alt="Imagen perfil">
              <section class="username">
                <h3 class="">${this.name}</h3>
                <p>${this.gps}</p>
              </section>
            </section>
              <img src="./images/ellipsis-horizontal.svg" alt="more" class="more">
          </section>
  
          <section class="post-content">
              <img src="${this.content}" alt="Image post">
          </section>
  
          <section class="icons">
            <section class="icons-first">
              <img src="./images/heart-outline.svg" alt="">
              <img src="./images/chatbubble-outline.svg" alt="">
              <img src="./images/paper-plane-outline.svg" alt="">
            </section>
              <img src="./images/bookmark-outline.svg" alt="">
          </section>
  
          <section class="description">
              <p class="views">${this.views} views</p>
              <p><strong>${this.name}</strong> ${this.description}</p>
              <p class="comments">View all 150 comments</p>
              <p class="day">3 DAYS AGO</p>
          </section>
      </section>        
          `;
    }
  }
  
  customElements.define("my-post", MyPost);
  export default MyPost;  