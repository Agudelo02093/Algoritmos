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
        this.storiesContainer = this.ownerDocument.createElement("div");
        this.storiesContainer.classList.add('stories-container');
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
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./app/components/Stories/Stories.css">`;
            this.stories.forEach((storie) => {
                this.storiesContainer.appendChild(storie);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.storiesContainer);
            this.posts.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
