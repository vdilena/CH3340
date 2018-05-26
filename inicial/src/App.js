import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
//import Card from './Card'
import CardStateFul from './CardStateFul'

class App extends Component {

    static defaultProps = {
        name: 'Jose'
    }

    titleInput = ''
    descriptionInput = ''

    state = {
        title: 'Camada #3340',
        cards: [
            {id: 1, title: 'Mi Card #1', description: 'My description Card #1'},
            {id: 2, title: 'Mi Card #2', description: 'My description Card #2'},
            {id: 3, title: 'Mi Card #3', description: 'My description Card #3'},
            {id: 4, title: 'Mi Card #4', description: 'My description Card #4'},
            {id: 5, title: 'Mi Card #5', description: 'My description Card #5'},
        ]
    };

    editCard() {
        console.log('EDIT BUTTON CLICKED');
    }

    deleteCard(cardId) {

        let cardsSinEliminada = this.state.cards.filter(card => card.id !== cardId)

        this.setState({
            cards: cardsSinEliminada
        })
        
    }

    // MySetState(newState) {
    //     this.state = {
    //         ...this.state,
    //         ...newState
    //     };
    //     this.render();
    // }

    getCards() {
        return this.state.cards.map((card, index) => {
            return (
                < CardStateFul 
                    key={card.id} 
                    card={card} 
                    handleEditCard = {() => this.editCard()}
                    handleDeleteCard = {() => this.deleteCard(card.id)}
                />
            )
        });
    }

    addCard() {
        console.log('ADD CARD', this);
        const newCard = {
            id: 9999,
            title: 'New Card Title',
            description: 'New Card Description',
        };

        // const newCards = [...this.state.cards];
        // newCards.push(newCard);

        const newCards = [
            ...this.state.cards,
            newCard
        ];

        this.setState({
            cards: newCards
        });
    }

    addNewCardButton() {
        return (
            <button className="addCard" onClick={() => this.addCard()}>Add Card</button>
        );
    }
    
    changeTitle (title) {

        this.titleInput = title
        console.log('changeTitle: ' + this.titleInput)

        this.setState({
            title: this.titleInput
        })
    }

    changeDescription (description) {

        this.descriptionInput = description
        console.log('changeDescription: ' + this.descriptionInput)
        this.setState({
            title: this.descriptionInput
        })
    }

    render() {
        //React.createElement('div', {className:'App'}, 'head')
        const getTitle = () => this.state.title
        return (
            <div className="container">
                <span>{getTitle()}</span>
                <div className="App">
                    {this.getCards()}
                </div>
                {this.addNewCardButton()}
                <input onChange = {(event) => this.changeTitle(event.target.value)} />
                <input onChange = {(event) => this.changeDescription(event.target.value)} />
            </div>
        );
    }
}

/*App.defaultProps = {
    name: 'Stranger'
};*/

App.propTypes = {
    name: PropTypes.string
};
  

export default App;
