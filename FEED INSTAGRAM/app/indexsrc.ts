import './components/indexcp.js';
import data from './components/data.js';

//Import of attributes
import Storie, {AttributeStorie} from "./components/Stories/stories.js";
import Post, { AttributePost } from './components/Post/post.js';

class AppContainer extends HTMLElement {
    stories: Storie[] = [];
    posts: Post[] = [];

    constructor() {
        super();
        this.attachShadow({mode:'open'});

        data.forEach((data) => {
            const cardStories = this.ownerDocument.createElement("my-storie") as Storie;
            cardStories.setAttribute(AttributeStorie.imgprofile, data.imgprofile);
            cardStories.setAttribute(AttributeStorie.name, data.name);
            this.stories.push(cardStories);
        });

        data.forEach((data) => {
            const cardPosts = this.ownerDocument.createElement("my-post") as Post;
            cardPosts.setAttribute(AttributePost.imgprofile, data.imgprofile);
            cardPosts.setAttribute(AttributePost.name, data.name);
            cardPosts.setAttribute(AttributePost.gps, data.gps);
            cardPosts.setAttribute(AttributePost.content, data.imgprofile);
            cardPosts.setAttribute(AttributePost.views, data.views);
            cardPosts.setAttribute(AttributePost.description, data.description);
        })
    }
}

customElements.define("app-container", AppContainer);