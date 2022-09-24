import React from "react";

function TodoCounter ({total, completed}){
    return (
        <h2 className="text-center pt-4">Has Completado {completed} de {total} TODOs</h2>
    )
};


export  {TodoCounter};