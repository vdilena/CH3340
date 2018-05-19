import React, {Component} from 'react';

class CardStateFul extends Component {

    render () {

        return (
            <div className="card">
                <h2 className="title">{this.props.card.title}</h2>
                <div className="description">{this.props.card.description}</div>
                <div className="actions">
                    <button onClick={this.props.handleEditCard}>Edit</button>
                    <button onClick={this.props.handleDeleteCard}>Delete</button>
                </div>
            </div>
        )
    }
}

export default CardStateFul