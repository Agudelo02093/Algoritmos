import "./components/indexcp.js";
import { getData } from "./data.js";

import MyCharacters, { AttributeApi } from "./components/Characters/Characters.js";

class AppContainer extends HTMLElement{
    cards: MyCharacters[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const data = await getData();
        console.log(data);

        data?.forEach((user) => {
            const card = this.ownerDocument.createElement('my-character') as MyCharacters;
            card.setAttribute(AttributeApi.name, user.name);
            card.setAttribute(AttributeApi.birth_year, user.birth_year);
            card.setAttribute(AttributeApi.gender, user.gender);
            card.setAttribute(AttributeApi.height, user.height);
            card.setAttribute(AttributeApi.mass, user.mass);
            this.cards.push(card);
        });
        this.render(data);
    }

    render(data:any){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.cards.forEach((card)=>{
                this.shadowRoot?.appendChild(card);
            })
        }
    }
}

customElements.define("app-container",AppContainer);