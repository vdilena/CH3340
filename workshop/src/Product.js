import React from 'react'

const Product = (props) => {

    return (
        <div className="itemBox" key={props.product.id}>
          <h2 className="title">{props.product.name}</h2>
          <div className = "actions">
            <button onClick={props.handleEditProduct}>Edit</button>
            <button onClick={props.handleDeleteProduct}>Delete</button>
          </div>
        </div>
      )
}

export default Product