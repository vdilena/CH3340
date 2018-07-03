import React from 'react'

const Product = (props) => {

    const hideDeleteButton = (props.product.customers && props.product.customers.length > 0) ? true : false
    const hideSale = props.isProductsByCustomer === true ? true : false

    let customerToSell = ''

    const handleChangeSelect = (value) => {
      customerToSell = parseInt(value, 10) 
    }

    return (
        <div className="itemBox" key={props.product.id}>
          <h2 className="title">{props.product.name}</h2>
          <div className = "actions">
            <button onClick={props.handleEditProduct}>Edit</button>
            <button hidden = { hideDeleteButton} onClick={props.handleDeleteProduct}>Delete</button>
          </div>
          <div className="saleBox" hidden = { hideSale}>
            <h3 className="title">Sell to:</h3>
            <select onChange={(event) => handleChangeSelect(event.target.value)}>
                <option value=''>-- Choose an Option --</option>
                { 
                  props.customers.map((customer, index) => {

                    return <option key={index} value= {customer.id}>{customer.name}</option>
                  }) 
                }
            </select>
            <div>
              <button onClick={() => props.handleProductSale(customerToSell)}>Sale</button>
            </div>
          </div>
        </div>
      )
}

export default Product