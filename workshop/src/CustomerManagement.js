import React, {Component} from 'react';
import Customer from './Customer'
import axios from 'axios'

class CustomerManagement extends Component {

  constructor() {

    super()
    this.getRemoteCustomers()
  }

  state = { 
    customers: []
  }

  editCustomer(customerId) {
    this.props.history.push(`/saveCustomer/${customerId}`)
  }

  deleteCustomer(customerId) {

    let customersSinEliminada = this.state.customers.filter(customer => customer.id !== customerId)

    this.setState(
      {
        customers: customersSinEliminada
      }
    )
  }

  getCustomers () {

      return this.state.customers.map((customer, index) => {
        return (
          <Customer 
            key = {customer.id}
            customer = {customer}
            handleEditCustomer = {() => this.editCustomer(customer.id)}
            handleDeleteCustomer = {() => this.deleteRemoteCustomer(customer.id)}
          />
        )
    })
  }

  getRemoteCustomers() {

    axios
      .get("http://localhost:4000/customers")
      .then(response => {
        const {data} = response

        this.setState({
          customers: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getRemoteCustomer(customerId) {

    axios
      .get(`http://localhost:4000/customers/${customerId}`)
      .then(response => {
          const {data} = response
          console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteRemoteCustomer(customerId) {

    axios
      .delete(`http://localhost:4000/customers/${customerId}`)
      .then(response => {

        this.deleteCustomer(customerId)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (

        <div className="content">
          <div className="container">
              { this.getCustomers() }
          </div>
        </div>
    )
  }
}

export default CustomerManagement