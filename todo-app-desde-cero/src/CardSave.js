import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addCard} from './actions'

class CardSave extends Component {

    constructor(props) {

        super(props)

        let cardId = props.match.params.cardId

        if(cardId) {

            axios.get(`http://localhost:4000/cards/${cardId}`)
                .then(response => {

                    const {data} = response

                    this.setState({
                        titleInput: data.title,
                        descriptionInput: data.description
                    })
                })
        }
    }

    state =  {
        titleInput : '',
        descriptionInput : ''
    }

    addTitle (title) {
    
        this.setState({
          titleInput: title
        })
    }
    
    addDescription (description) {
    
        this.setState({
          descriptionInput: description
        })
    }

    saveReduxCards() {

        this.props.addCard(this.state.titleInput, this.state.descriptionInput)
        this.props.history.push("/")
    }

    saveRemoteCard() {

        let cardId = this.props.match.params.cardId
    
        let card = {
          title: this.state.titleInput,
          description: this.state.descriptionInput
        }

        if(cardId) {

            axios.put(`http://localhost:4000/cards/${cardId}`, card)
                .then(response => {
                    this.props.history.push("/")
                })
                .catch(error => {
                    console.log(error)
                  })
        } else {
            
            axios.post("http://localhost:4000/cards", card)
                .then(() => {
                    
                    this.props.history.push("/")
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    saveCard = (newCardId) => {
    
        const newCards = [
          ...this.state.cards,
          {
            id: newCardId,
            title: this.state.titleInput,
            description: this.state.descriptionInput
          }
        ]
    
        this.setState(
          {
            cards: newCards
          }
        )
    
        this.titleInput.value = ''
        this.descriptionInput.value = ''
    
        this.titleInput.focus()
    }

    createCard() {
    
        return (
          <div className="form">
            <input placeholder = "Title" 
              onChange={(event) => this.addTitle(event.target.value)} 
              ref={(input) => this.titleInput = input}
              value = {this.state.titleInput} />
            <input placeholder= "Description" 
              onChange={(event) => this.addDescription(event.target.value)} 
              ref={(input) => this.descriptionInput = input} 
              value = {this.state.descriptionInput} />
            <button onClick={() => this.saveReduxCards()}>Save Card</button>
          </div>
        )
    
      }

    render () {

        return (

            <div className = "content">
                { this.createCard()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCard: (title, description) => dispatch(addCard(title, description))
})

export default connect(
    null, mapDispatchToProps
) (CardSave)