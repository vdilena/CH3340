import React from 'react'

const Customer = (props) => {

  const hideButton = (props.customer.products && props.customer.products.length > 0) ? true : false

    return (
        <div className="itemBox" key={props.customer.id}>
          <h2 className="title">{props.customer.name}</h2>
          <div className = "actions">
            <button onClick={props.handleEditCustomer}>Edit</button>
            <button hidden = { hideButton} onClick={props.handleDeleteCustomer}>Delete</button>
            <button hidden = { !hideButton} onClick={props.handleViewProducts}>View Products</button>
          </div>
        </div>
      )
}

export default Customer