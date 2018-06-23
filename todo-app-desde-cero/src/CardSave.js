import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addCard, editCardById} from './actions'

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

    componentDidMount() {

        let cardId = this.props.match.params.cardId
        this.setReduxCardIfExist(cardId)
    }

    setReduxCardIfExist (cardId) {

        if(cardId) {

            let card = this.props.reduxCards.filter(card => card.id === parseInt(cardId))[0]

            this.setState({
                titleInput : card.title,
                descriptionInput : card.description
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

        let cardId = this.props.match.params.cardId
        console.log(cardId)

        if(cardId) {
            this.props.editCardById(cardId, this.state.titleInput, this.state.descriptionInput)
        } else {
            this.props.addCard(this.state.titleInput, this.state.descriptionInput)
        }

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

const mapStateToProps = state => ({
    reduxCards: state.cardReducer
})

const mapDispatchToProps = (dispatch) => ({
    addCard: (title, description) => dispatch(addCard(title, description)),
    editCardById: (cardId, title, description) => dispatch(editCardById(cardId, title, description))
})

export default connect(
    mapStateToProps, mapDispatchToProps
) (CardSave)