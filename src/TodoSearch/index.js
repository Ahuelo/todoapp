import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function TodoSearch ({searchValue , setSearchValue}){
    const onSearchValueChange = (search) =>{
        console.log(search.target.value);
        setSearchValue(search.target.value);
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text >TODOSearch</InputGroup.Text>
            <Form.Control 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}></Form.Control>
        </InputGroup>
    )
};


export {TodoSearch};