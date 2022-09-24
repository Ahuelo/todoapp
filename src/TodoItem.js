import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge  from 'react-bootstrap/Badge';
import './TodoItem.css';

function TodoItem (props) {
    const onComplete = () =>{
        alert(`Ya completaste el TODO "${props.text}"`);
    }
    const onDelete = () =>{
        alert(`No has completado el TODO "${props.text}"`);
    }

    return (
        <div className="overf">
        <ListGroup.Item as='li' 
        action 
        className={`d-flex justify-content-between align-items-start itemHover ${props.completed && 'itemCompleted'}`}
        onClick={onComplete}>
            <p className={`${props.completed && 'textItemCompleted'}`}>{props.text}</p>
            
        </ListGroup.Item>
        <Badge pill 
            className={`badgeIcon `}
            onClick={onDelete}
            >X</Badge>
        </div>
    )
}

export {TodoItem};

/* d-flex justify-content-between align-items-start itemComplete */