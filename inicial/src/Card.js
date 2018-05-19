import React from 'react';

const Card = (props) => (
    <div>
        <h2 className="title">{props.card.title}</h2>
        <div className="description">{props.card.description}</div>
    </div>
)

export default Card