import React, {Component} from 'react';
import Product from './Product'
import axios from 'axios'

class ProductManagement extends Component {

  constructor() {

    super()
    this.getRemoteProducts()
  }

  state = { 
    products: []
  }

  editProduct(productId) {
    this.props.history.push(`/saveProduct/${productId}`)
  }

  deleteProduct(productId) {

    let productsSinEliminada = this.state.products.filter(product => product.id !== productId)

    this.setState(
      {
        products: productsSinEliminada
      }
    )
  }

  getProducts () {

      return this.state.products.map((product, index) => {
        return (
          <Product 
            key = {product.id}
            product = {product}
            handleEditProduct = {() => this.editProduct(product.id)}
            handleDeleteProduct = {() => this.deleteRemoteProduct(product.id)}
          />
        )
    })
  }

  getRemoteProducts() {

    axios
      .get("http://localhost:4000/products")
      .then(response => {
        const {data} = response

        this.setState({
          products: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getRemoteProduct(productId) {

    axios
      .get(`http://localhost:4000/products/${productId}`)
      .then(response => {
          const {data} = response
          console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteRemoteProduct(productId) {

    axios
      .delete(`http://localhost:4000/products/${productId}`)
      .then(response => {

        this.deleteProduct(productId)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (

        <div className="content">
          <div className="container">
              { this.getProducts() }
          </div>
        </div>
    )
  }
}

export default ProductManagement