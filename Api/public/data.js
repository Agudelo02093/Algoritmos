var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const cards = [];
        try {
            for (let i = 1; i < 7; i++) {
                let response = yield fetch('https://swapi.dev/api/people/' + i);
                let data = yield response.json();
                console.log(data);
                cards.push(data);
            }
            return cards;
        }
        catch (error) {
            console.log(error);
        }
    });
}
