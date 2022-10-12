export enum AttributePost {
    "imgprofile" = "imgprofile",
    "name" = "name",
    "gps" = "gps",
    "content" = "content",
    "views" = "views",
    "description" = "description"
}

class Post extends HTMLElement {
    imgprofile?: any;
    name?: string;
    gps?: string;
    content?: any;
    views?: number;
    description?: string;

    static get observedAttributes(){
        const atrib: Record<AttributePost,null> = {
            imgprofile: null,
            name: null,
            gps: null,
            content: null,
            views: null,
            description: null,
        };
        return Object.keys(atrib);
    }

    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }

    attributeChangedCallback(
        propName: AttributePost,
        oldValue: string | undefined,
        newValue: string | undefined) {
            if(this[propName] === newValue) return;
            this[propName] = newValue;
            this.mount();
    }

    mount(): void {
        this.render();
    }

    render(): void {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/Post/Post.css">
        <section class="content">
            <section class="head">
                <section class="user">
                    <img src="${this.imgprofile}" alt="Imagen perfil">
                    <section class="username">
                        <h3 class="">${this.name}</h3>
                        <p>${this.gps}</p>
                    </section>
                </section>
                <img src="./app/images/ellipsis-horizontal.svg" alt="more" class="more">
            </section>

            <section class="post-content">
                <img src="${this.content}" alt="Image post">
            </section>

            <section class="icons">
                <section class="icons-first">
                    <img src="./app/images/heart-outline.svg" alt="">
                    <img src="./app/images/chatbubble-outline.svg" alt="">
                    <img src="./app/images/paper-plane-outline.svg" alt="">
                </section>
                <img src="./app/images/bookmark-outline.svg" alt="">
            </section>

            <section class="description">
                <p class="views">${this.views} Me gusta</p>
                <p><strong>${this.name}</strong> ${this.description}</p>
                <p class="comments">View all 150 comments</p>
                <p class="day">3 DAYS AGO</p>
            </section>
        </section>
        `
    }
}

customElements.define('my-post', Post);
export default Post;