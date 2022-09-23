import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge  from 'react-bootstrap/Badge';

function TodoItem (props) {
    return (
        <ListGroup.Item as='li' className="d-flex justify-content-between align-items-start">
            <p>{props.text}</p>
            <Badge pill>X</Badge>
        </ListGroup.Item>
    )
}

export {TodoItem};