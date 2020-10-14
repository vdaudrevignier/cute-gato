import React, { Component } from 'react';
import Cat from './Cat'
import '../css/Cats.less';
import CatStore from "../stores/CatStore";

class Top5Cats extends Component {

    constructor(props) {
        super(props);
        var requestOptions = {
            method: 'GET'
        };

        const truc = fetch("http://localhost:8080/api/v1/topcats", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))

        this.state = {
            items: truc
        }
    }

    componentDidMount() {
        CatStore.on("change", () => {
            this.setState({
                items: CatStore.getAll()
            })
        })
        var requestOptions = {
            method: 'GET'
        };

        const truc = fetch("http://localhost:8080/api/v1/topcats", requestOptions)
            .then(response => response.json())
            .then(json => this.setState({
                items: json
            }))

        this.state = {
            items: truc
        }
    }

    render() {

        let { items } = this.state;
        const catItems = []

        for (let i = 0; i < items.length; i++) {
            catItems.push(<Cat key={items[i].id} img={items[i].picUrl} id={items[i].id} votes={items[i].votes} />)
        }


        return (
            <div className="Cats">
                {catItems}
            </div>
        )

    }
}
export default Top5Cats