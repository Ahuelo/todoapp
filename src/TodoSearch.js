import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const onSearchValueChange = (search) =>{
    console.log(search.target.value)
}

function TodoSearch (){
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text >TODOSearch</InputGroup.Text>
            <Form.Control 
            placeholder="Cebolla"
            onChange={onSearchValueChange}></Form.Control>
        </InputGroup>
    )
};


export {TodoSearch};