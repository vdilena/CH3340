import React from 'react';

const Card = (props) => (
    <div className="card">
        <h2 className="title">{props.card.title}</h2>
        <div className="description">{props.card.description}</div>
        <div className="actions">
            <button onClick={props.handleEditCard}>Edit</button>
            <button onClick={props.handleDeleteCard}>Delete</button>
        </div>
    </div>
)

export default Card