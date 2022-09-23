import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function TodoSearch (){
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text >TODOSearch</InputGroup.Text>
            <Form.Control placeholder="Cebolla"></Form.Control>
        </InputGroup>
    )
};


export {TodoSearch};