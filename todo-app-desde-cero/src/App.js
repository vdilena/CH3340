import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import Avatar from './Avatar'

const guid = () => {
  function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

class App extends Component {

  avatarPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAMFBMVEX////NzMzQz8/x8PDKycn7+/vT0tL5+fn09PTS0dHq6urX1tba2dnu7u7i4uLe3d1ZF/sBAAAFGklEQVR4nO2d25qrIAyFBwVRQXj/t91ap9N22ukuEA5L81/10vXRhEWA8PXFMAzDMAzDMAzDMAzDoKGU0v2y9Hr9UftbiqDHxXkzyR8m490y6trflRM9O9tJKX4hZWfdfFTlizfiSfKPdGH8UvsLMzBPfym+Mc21v5IW7f4e58cxd8f5r6vZfCT6ItzMB8nto/9Y9EW4H2t/MQWfBPUjRwhxGzTU3wNua391IvrzqH7QbaAzW29iRG+Yvva3x9MHh/WNCVa36uJVC9GBTmRpqlF1K5umWgiLqNulqhbC1dYQzpKuWnRwazI9EMgWA9r0HebD/0L62jrC6ClEb2DN3slZ/AqUOycbbKzhJhtsqOFO8eK/AfLmM51qIWBqDum29B4YizoS/sdXy4JSWltIrMoVieJQHa1skAWJ8pSqhfAYwa1IViE3BhDZpBltnbkxZGvS0F6DG2P1ybJZ9vFl06oWAkP2WSewk8qO3u97jQGRfU5z+kUtu7aeDznnCuyssk9aZjip7DFxP/+RDqWWNpL6FZgSoib1KzBntWj9CopbofUrQFvclBM3yrStnKdNaR5BOO0G2A7ANhjBuaxnmh9v2jn7SvNzN+nW9o3GN7mpSwxXGp+8abe2b0xt/8t74hr5Fdn2CZY5l+y2g5u2sHInu+0pLFNGa72OeFLZxDsDN0xtZW/J4tE2htrK3nJS2RmWXzttx/ZJJ7CTujSamzHPtH5XJs+/vPH/+GnLDCctKpEf4dhAOMZBn8wbT+PfUNzufABkp3chTWs47QpG5y1JUW2yHqrFlNIk7txqgGT2AIVvad6lPENRTGy8cPgKknwOksPv6AnS+QCTxH+gOMACc2zljvQiKtD5jRsEe594GW0N7uRDeUBXt+9IDu62q6V/kRzciKG9OvNEwyKbL6m8JnE1MtX+/kjS/CmgM93RaW3iAL3KTsoqDNKr7KScp4c5Pf+ChOox3lL7RvxmQfsbAu+INuaoafybmF6+B+jmG3e9F+QS7xtiwhs7sHfm4FmsAw/sC+Hr7g5ynf0Lls2yWTbLZtnosGyWzbJZNstGh2WzbJZ9UNnhz6AdoKYUs0WAvDWwE1koh66m6XmI3PyTA9QR23tGl3R6xTjEEE8UjSl89CQ90zqkNz3VYp+fXY5DSrtgbAyNM3V717n9Ie9d3Mud75DGte3bFporIs9Mttmj5Sr8Nd4g5S0+1azW3J3pEvMVueb1tpSPc3bR38IbSm+bMykg+iK8GQ+zGNJurv+nM7XTmxpdqXG+RwpXMcrH2dYQvQu3daJcLS52VUmkfHDFfatypSP6FZ1xJYWP2brKhGML/dfjSyZ5KFGIWSN6akr0hpzyRrmabQkzFkFn8zl2l60/FgVDljKz9rXm6E+RwlMHeR03Fsrm3ghF68rO5HNWD0M24tTFsbwYmh2VEUr0hiH4p2dqQZ2X1AHXHiSoH5FpOb0l8x1GilXP0/OtDPH3TahfnS1L9Bu3cXe4WiH2Lhnt+1bliXtRK0d3v7JE9RJcGqgapdHFDHeWFpZliViK5ngEpzQRj+4gz9lXIubuvvY3UxB+GiDXUxkliehhkqvTeEnCeynmevynLMFPDdG+zliLYMOSq796WYK7uesDhPYa3KGyU7t+tUFw7zH05ddO8CLsCNN2xMR9hGk7YuI+xLQd3n0Ms1D8m2DZB1h2boTW0w5h0sKfEWPZyITKhq8f7oT2Sj1EIl9TOctm2SybZR9f9j9esF92LVSXDwAAAABJRU5ErkJggg==";

  constructor() {

    super()
    console.log("Pasa por el constructor!")
  }

  componentDidMount() {

    console.log("Pasa por el componentDiMOunt()")
  }

  componentWillMount() {

    console.log("Pasa por el componentWillMount()")
  }

  componentWillReceiveProps() {

    console.log("Pasa por componentWillReceiveProps()")
  }

  cardsIniciales = [
    {id:1, title: "Card 1", description: 'Descripcion card 1'},
    {id:2, title: "Card 2", description: 'Descripcion card 2'},
    {id:3, title: "Card 1", description: 'Descripcion card 3'},
    {id:4, title: "Card 4", description: 'Descripcion card 4'},
    {id:5, title: "Card 5", description: 'Descripcion card 5'},
    {id:6, title: "Card 6", description: 'Descripcion card 6'}
  ]

  // [...this.cardsIniciales] es igual a:
  /*
    [{id:1, title: "Card 1", description: 'Descripcion card 1'},{id:2, title: "Card 2", description: 'Descripcion card 2'},....,{id:6, title: "Card 6", description: 'Descripcion card 6'}]
  */

 titleInput = ''
 descriptionInput = ''

  state = { 
    title: 'Hola curso',
    titleInput: '',
    descriptionInput: '',
    cards: [...this.cardsIniciales]
  }

  editCard() {
    console.log("Editando Card")
  }

  deleteCard(cardId) {
    //console.log("Borrando Card " + cardId)
    //console.log(`Borrando Card ${cardId}`)
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
            handleDeleteCard = {() => this.deleteCard(card.id)}
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
        <button onClick={() => this.saveCard()}>Save Card</button>
      </div>
    )

  }

  saveCard = () => {

    const newCards = [
      ...this.state.cards,
      {
        id: guid(),
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

  render() {

    console.log("Pasa por render()")

    return (
      <div className="App">
        <div className= "app-header">
          <Avatar 
            url={this.avatarPlaceholder}
            alias= "vdilena"
          />
        </div>
        <div className="content">
          {this.createCard()}
          <div className="container">
            {/*<input onChange={(event) => this.buscarPorTitulo(event.target.value)} /> */}
              { this.getCards() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
