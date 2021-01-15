import React from "react";
// import Photo from "./images/oussama.jpg"



function Fullname(props) {
    return (
        <div>

            <h1>{props.name} </h1>
            <h3>{props.bio}</h3>
            <h4>{props.profession}</h4>


        </div>
    )
}



export default Fullname;





