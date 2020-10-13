import Dispatcher from "../dispatcher/Dispatcher"

export function getAll() {
    Dispatcher.dispatch({
        type: "UPDATE"
    })
    fetch("http://localhost:8080/api/v1/cats")
        .then(response => {
            console.log(response);
        });
}

export function voteCat(id) {
    Dispatcher.dispatch({
        type: "VOTE",
        id
    })
}

export function reload() {
    Dispatcher.dispatch({ type: "FETCHING" });
    const cats = fetch("http://localhost:8080/api/v1/cats")
        .then(response => {
            console.log(response);
        });
}