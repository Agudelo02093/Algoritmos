import "./components/index.js";
import data from "./data.js";
import { AttributeStorie } from "./components/Stories/Stories.js";
import { AttributePost } from "./components/Post/Post.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.stories = [];
        this.posts = [];
        this.attachShadow({ mode: 'open' });
        data.forEach((data) => {
            const cardStories = this.ownerDocument.createElement("my-storie");
            cardStories.setAttribute(AttributeStorie.imgprofile, data.imgprofile);
            cardStories.setAttribute(AttributeStorie.name, data.name);
            this.stories.push(cardStories);
        });
        data.forEach((data) => {
            const cardPost = this.ownerDocument.createElement("my-post");
            cardPost.setAttribute(AttributePost.imgprofile, data.imgprofile);
            cardPost.setAttribute(AttributePost.name, data.name);
            cardPost.setAttribute(AttributePost.gps, data.gps);
            cardPost.setAttribute(AttributePost.content, data.imgprofile);
            cardPost.setAttribute(AttributePost.views, data.views);
            cardPost.setAttribute(AttributePost.description, data.description);
            this.posts.push(cardPost);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./app/components/Stories/Stories.css">`;
            const storiesContainer = this.ownerDocument.createElement("div");
            storiesContainer.classList.add('stories-container');
            this.stories.forEach((storie) => {
                var _a;
                (_a = storiesContainer) === null || _a === void 0 ? void 0 : _a.appendChild(storie);
            });
            (this.shadowRoot) === null || this.shadowRoot === void 0 ? void 0 : this.shadowRoot.appendChild(storiesContainer);
            this.posts.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
