import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge  from 'react-bootstrap/Badge';
import './TodoItem.css';

function TodoItem (props) {
    return (
        <ListGroup.Item as='li' action className={`d-flex justify-content-between align-items-start itemHover ${props.completed && 'itemCompleted'}`}>
            <p className={`${props.completed && 'textItemCompleted'}`}>{props.text}</p>
            <Badge pill className={`badgeIcon`}>X</Badge>
        </ListGroup.Item>
    )
}

export {TodoItem};

/* d-flex justify-content-between align-items-start itemComplete */