import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import * as CatsActions from "../actions/CatsActions";

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    // componentDidMount(){
    //     fetch('http://localhost:8080/api/v1/cats')
    //     .then(res => res.json())
    //     .then(json => {
    //         this.setState({
    //             isLoaded: true, 
    //             items : json
    //         })
    //     })
    // }
    render() {

        const handleClick = () => {
            //CatsActions.voteCat(this.props.id);
            var raw = "";

            var requestOptions = {
                method: 'PUT',
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/api/v1/vote/"+this.props.id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
        }

        return (
            <div>
                <img className="catImg" name="catImg" src={this.props.img} alt="new" />
                <p className="id" name="id">id : {this.props.id}</p>
                <p className="voteNumber" name="voteNumber">Number of votes : {this.props.votes}</p>
                <Button className="button" type="submit" onClick={handleClick}>Vote for this cat</Button>
            </div>
        )

    }
}

export default Cat;
