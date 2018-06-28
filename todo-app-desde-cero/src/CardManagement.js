import React, {Component} from 'react';
import Card from './Card'
import axios from 'axios'
import {connect} from 'react-redux'
import {deleteRemoteCard, cardList} from './actions'

class CardManagement extends Component {

    constructor(props) {

        super(props)
        this.getRemoteCards()
    }

    componentDidMount() {

      this.props.retrievedCardList()
    }
     titleInput = ''
     descriptionInput = ''
    
      state = { 
        title: 'Hola curso',
        titleInput: '',
        descriptionInput: '',
        cards: []
      }
    
      editCard(cardId) {
        this.props.history.push(`/saveCard/${cardId}`)
      }
    
      deleteCard(cardId) {
    
        let cardsSinEliminada = this.state.cards.filter(card => card.id !== cardId)
    
        this.setState(
          {
            cards: cardsSinEliminada
          }
        )
      }
    
      getCards () {
    
          return this.props.reduxCards.map((card, index) => {
            return (
              <Card 
                key = {card.id}
                card = {card}
                handleEditCard = {() => this.editCard(card.id)}
                handleDeleteCard = {() => this.deleteReduxCardById(card.id)}
              />
            )
        })
      }
    
      buscarPorTitulo(value) {
    
        let cardsPorTitulo = this.state.cards.filter(card => card.title.toLowerCase() === value.toLowerCase())
    
        if(cardsPorTitulo.length > 0) {
    
          this.setState({
            cards: cardsPorTitulo
          })
        } else {
    
          this.setState({
            cards: this.cardsIniciales
          })
        }
    
      }
    
      getRemoteCards() {
    
        axios.get("http://localhost:4000/cards")
          .then(response => {
    
              const {data} = response
              this.setState({
                cards: data
              })
          })
          .catch(error => {
            console.log(error)
          })
      }
    
      getRemoteCardById(cardId) {
    
        axios.get(`http://localhost:4000/cards/${cardId}`)
          .then(response => {
            // response.data  
            const {data} = response
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    
      getCardByTitle(title) {
    
        axios.get(`http://localhost:4000/cards/?title=${title}`)
          .then(response => {
    
            const {data} = response
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    
      getCardByDescription(description) {
    
        axios.get(`http://localhost:4000/cards/?description=${description}`)
          .then(response => {
    
            const {data} = response
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    
      updateTitleForRemoteCard(cardId, title) {
    
          axios.patch(`http://localhost:4000/cards/${cardId}`, {title: title})
            .then(response => {
              const {data} = response
              console.log(data)
            })
            .catch(error => {
              console.log(error)
            })
      }
    
      updateRemoteCard(cardId, card) {
    
        axios.put(`http://localhost:4000/cards/${cardId}`, card)
            .then(response => {
              const {data} = response
              console.log(data)
            })
            .catch(error => {
              console.log(error)
            })
      }
    
      deleteRemoteCard(cardId) {
    
        axios.delete(`http://localhost:4000/cards/${cardId}`)
            .then(response => {
              this.deleteCard(cardId)
            })
            .catch(error => {
              console.log(error)
            })
      }

      deleteReduxCardById (cardId) {
        this.props.deleteCardById(cardId)
      }

    render () {
        return (

            <div className="content">
                <div className="container">
                    { this.getCards() }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    reduxCards: state.cardReducer
})

const mapDispatchToProps = (dispatch) => ({
  deleteCardById: cardId => dispatch(deleteRemoteCard(cardId)),
  retrievedCardList: () => dispatch(cardList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardManagement)