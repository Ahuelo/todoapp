import React from "react";
import Button from "react-bootstrap/Button"

const onClickButton = (msg) =>{
    alert(msg);
}

function TodoCreateButton (){
    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg"
            onClick={() =>onClickButton('Aquí va a quedar un modal')}
            >
                +
            </Button>
        </div>
    )
}

export {TodoCreateButton};