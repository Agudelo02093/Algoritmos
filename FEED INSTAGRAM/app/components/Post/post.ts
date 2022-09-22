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
        
        `
    }
}

customElements.define('my-post', Post);
export default Post;