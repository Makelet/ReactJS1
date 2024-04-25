import React from 'react';
import './Card.css';
const Card = (props) => {
    return (
    <>
        <div className="card">
            <img src={props.image} alt="" width={300}/>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    </>
    );
}

export default Card;
