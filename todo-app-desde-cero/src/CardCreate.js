import React, {Component} from 'react'

class CardCreate extends Component {

    titleInput;
	descriptionInput;

    render() {

        return (
            <div className="form">
                <input placeholder="Title" 
                    onChange={(event) => this.props.handleTitleChange(this.titleInput.value)}
                    ref={(el) => this.titleInput = el} />
                <input placeholder="Description" 
                    onChange={(event) => this.props.handleDescriptionChange(this.descriptionInput.value)}
                    ref={(el) => this.descriptionInput = el} />
                <button onClick={this.props.handleSaveCard}>Save Card</button>
            </div>
        )
    }
}

export default CardCreate