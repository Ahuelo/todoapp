import React from "react";
import Button from "react-bootstrap/Button"

function TodoCreateButton (){
    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg">+</Button>
        </div>
    )
}

export {TodoCreateButton};