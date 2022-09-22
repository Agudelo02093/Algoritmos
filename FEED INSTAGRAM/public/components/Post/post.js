export var AttributePost;
(function (AttributePost) {
    AttributePost["imgprofile"] = "imgprofile";
    AttributePost["name"] = "name";
    AttributePost["gps"] = "gps";
    AttributePost["content"] = "content";
    AttributePost["views"] = "views";
    AttributePost["description"] = "description";
})(AttributePost || (AttributePost = {}));
class Post extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const atrib = {
            imgprofile: null,
            name: null,
            gps: null,
            content: null,
            views: null,
            description: null,
        };
        return Object.keys(atrib);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.mount();
    }
    mount() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        
        `;
    }
}
customElements.define('my-post', Post);
export default Post;
