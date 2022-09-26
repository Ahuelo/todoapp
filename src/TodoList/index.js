import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

function TodoList (props){
    return (
        <section>
            <ListGroup as='ul' numbered>
                {props.children}
            </ListGroup>
        </section>
    );
};

export {TodoList};