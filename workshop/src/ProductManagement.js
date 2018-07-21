import React, {Component} from 'react';
import Product from './Product'
import axios from 'axios'

class ProductManagement extends Component {

  constructor(props) {

    super(props)
    this.getRemoteCustomers()
    this.getRemoteProducts()
  }

  state = { 
    products: [],
    productsLinkedWithProducts : [],
    customers: [], 
    isProductsByCustomer : false
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

  saleProductToCustomer(product, customerId) {

    axios
        .post("http://localhost:4000/product_customer",{customerId: customerId, productId: product.id })
        .then(response => {
  
          this.props.history.push("/")
        })
        .catch(error => {
          console.log(error)
        })
  }

  getProducts () {

      return this.state.products.map((product, index) => {
        return (
          <Product 
            key = {product.id}
            product = {product}
            customers = {this.state.customers}
            isProductsByCustomer = {this.state.isProductsByCustomer}
            handleEditProduct = {() => this.editProduct(product.id)}
            handleDeleteProduct = {() => this.deleteRemoteProduct(product.id)}
            handleProductSale = {(customerId) => this.saleProductToCustomer(product, customerId)}
          />
        )
    })
  }

  getRemoteProducts() {

    axios
      .get("http://localhost:4000/products")
      .then(response => {
        
        const {data} = response
        let productsToShow = data

        if(this.props.match.params.customerId) {

         axios
            .get(`http://localhost:4000/customers/${this.props.match.params.customerId}`)
            .then(response => {
              
              const {data} = response
              let productsByCustomer = productsToShow.filter(productToShow => {

                if(data.products.filter(product => product.id === productToShow.id).length > 0)
                  return productToShow

                return null
              })

              this.setState({
                products:  productsByCustomer,
                isProductsByCustomer: true
              })

              
            })
            .catch(error => {
              console.log(error)
            })

        }

        this.setState({
          products:  productsToShow
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getRemoteCustomers() {

    axios
      .get("http://localhost:4000/customers")
      .then(response => {
        const {data} = response

        this.setState({
          customers:  data
        })
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