import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge  from 'react-bootstrap/Badge';
import './TodoItem.css';
import { FaCheck } from "react-icons/fa";
import { GoFlame } from "react-icons/go";

function TodoItem (props) {
/*     const onComplete = () =>{
        alert(`Ya completaste el TODO "${props.text}"`);
    } */
/*     const onDelete = () =>{
        alert(`No has completado el TODO "${props.text}"`);
    } */

    return (
        <div className="overf">
        <ListGroup.Item as='li' 
        action 
        className={`d-flex justify-content-between align-items-start itemHover ${props.completed && 'itemCompleted'}`}
        >
            <Badge pill 
            className={`badgeIconV`}
            onClick={props.onComplete}
            bg="secondary"
            text="light"><FaCheck className={`FaCheckInverse`}/></Badge>

            <p className={`textItem ${props.completed && 'textItemCompleted'}`}>{props.text}</p>
            
        </ListGroup.Item>
        <Badge pill 
            className={`badgeIconX`}
            onClick={props.onDelete}
            bg="warning"
            ><GoFlame/></Badge>
        
        </div>
    )
}

export {TodoItem};

/* d-flex justify-content-between align-items-start itemComplete */