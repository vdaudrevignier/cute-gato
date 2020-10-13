import { EventEmitter } from "events"
import Dispatcher from "../dispatcher/Dispatcher"

class CatStore extends EventEmitter {
    constructor() {
        super();
        // this.cats = fetch('http://localhost:8080/api/v1/cats')
        //     .then(res => res.json())
    }

    getAll() {
        this.emit("change");
        return this.cats;
    }

    handleDataUpdate(action) {
        console.log("ouiais ouais ta capté " + action)
        switch (action.type) {
            case "UPDATE": {
                this.cats = fetch('http://localhost:8080/api/v1/cats')
                    .then(res => res.json());
                break;
            }
            default: {
                break;
            }
        }
    }
}

const catStore = new CatStore();
Dispatcher.register(catStore.handleDataUpdate.bind(catStore));

window.Dispatcher = Dispatcher;
window.catStore = catStore;
export default catStore;