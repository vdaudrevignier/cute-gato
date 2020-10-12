import React from 'react';
import Button from 'react-bootstrap/Button'

const Cat = (props) => {
    return (
        <div>
            <img src = {props.img} alt = "new"/>
            <p>id : {props.id}</p>
            <p>Number of votes : {props.votes}</p>
            <Button href="#"></Button> <Button type="submit">Vote for this cat</Button>{' '}
        </div>
    )
}

export default Cat;
