import React, {Component} from 'react';
import Card from './Card'
import axios from 'axios'

class CardManagement extends Component {

    constructor() {

        super()
        this.getRemoteCards()
      }
    
     titleInput = ''
     descriptionInput = ''
    
      state = { 
        title: 'Hola curso',
        titleInput: '',
        descriptionInput: '',
        cards: []
      }
    
      editCard() {
        console.log("Editando Card")
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
    
          return this.state.cards.map((card, index) => {
            return (
              <Card 
                key = {card.id}
                card = {card}
                handleEditCard = {() => this.editCard()}
                handleDeleteCard = {() => this.deleteRemoteCard(card.id)}
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
    
      createCard() {
    
        return (
          <div className="form">
            <input placeholder = "Title" 
              onChange={(event) => this.addTitle(event.target.value)} 
              ref={(input) => this.titleInput = input} />
            <input placeholder= "Description" 
              onChange={(event) => this.addDescription(event.target.value)} 
              ref={(input) => this.descriptionInput = input} />
            <button onClick={() => this.saveRemoteCard()}>Save Card</button>
          </div>
        )
    
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
    
      saveRemoteCard() {
    
        let card = {
          title: this.state.titleInput,
          description: this.state.descriptionInput
        }
    
        axios.post("http://localhost:4000/cards", card)
          .then(response => {
            const {data} = response
            this.setState({
              titleInput: card.title,
              descriptionInput: card.description
            })
    
            this.saveCard(data.id)
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

    render () {
        return (

            <div className="content">
                {this.createCard()}
                <div className="container">
                    { this.getCards() }
                </div>
            </div>
        )
    }

}

export default CardManagement