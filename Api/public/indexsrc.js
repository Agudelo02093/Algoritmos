var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/indexcp.js";
import { getData } from "./data.js";
import { AttributeApi } from "./components/Characters/Characters.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.cards = [];
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield getData();
            console.log(data);
            data === null || data === void 0 ? void 0 : data.forEach((user) => {
                const card = this.ownerDocument.createElement('my-character');
                card.setAttribute(AttributeApi.name, user.name);
                card.setAttribute(AttributeApi.birth_year, user.birth_year);
                card.setAttribute(AttributeApi.gender, user.gender);
                card.setAttribute(AttributeApi.height, user.height);
                card.setAttribute(AttributeApi.mass, user.mass);
                this.cards.push(card);
            });
            this.render(data);
        });
    }
    render(data) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.cards.forEach((card) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
