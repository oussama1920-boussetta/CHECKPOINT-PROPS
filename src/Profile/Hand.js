import React from 'react'

function Alert() {
    function handleClick(e) {
        e.preventDefault();
        alert("Mohamed Oussama Boussetta")
    }

    return (
        <button  onClick={handleClick}>
            Clique ici
        </button>
    );
}
export default Alert;