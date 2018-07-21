import React, {Component} from 'react';
import axios from 'axios'

	class ProductSave extends Component {

		state = { 
			nameInput: '',
			stockInput: '',
			categorySelect: '',
			categories: []
		}

		constructor(props) {

			super(props)

			axios.get("http://localhost:4000/categories")
			.then(response => {

				const {data} = response
				this.setState({
					categories: data
				})

			})
			.catch(error => {
				console.log(error)
			})

			if(props.match.params.productId) {

				axios.get(`http://localhost:4000/products/${props.match.params.productId}`)
					.then(response => {
						const {data} = response
						this.setState({
							nameInput: data.name,
							stockInput: data.stock,
							categorySelect: data.CategoryId
						})
					})
					.catch(error => {
						console.log(error)
					})
			}
		}
		
		addName (name) {

			this.setState({
			  nameInput: name
			})
		}

		addStock (stock) {

			this.setState({
			  stockInput: stock
			})
		}

		addCategory (category) {

			this.setState({
			  categorySelect: category
			})
		}

		getCategories () {

				return this.state.categories.map((category, index) => {
					return (
						<option key = {index} value = {category.id}>{category.name}</option>
					)
				})
		}

		saveProduct() {

			let product = {
				name: this.state.nameInput,
				stock: this.state.stockInput,
				category: this.state.categorySelect
			}

			let productId = this.props.match.params.productId

			if(productId) {

				axios
				  .put(`http://localhost:4000/products/${productId}`, product)
				  .then(response => {
		
						this.props.history.push("/products")
				  })
				  .catch(error => {
					console.log(error)
				  })
			
			} else {

				axios
				  .post("http://localhost:4000/products",product)
				  .then(response => {
		
						this.props.history.push("/products")
				  })
				  .catch(error => {
					console.log(error)
				  })
			}
		
		}

		handleChange(event) {
			this.setState({categorySelect: event.target.value});
		}

		render() {

			return (

				<div className="content">
					<div className="form">
						<input placeholder = "Name" 
							onChange={(event) => this.addName(event.target.value)} value={this.state.nameInput} />
						<input placeholder = "Stock" 
							onChange={(event) => this.addStock(event.target.value)} value={this.state.stockInput} />
						<select value={this.state.categorySelect} onChange={(event) => this.handleChange(event)}>
							<option value=''>-- Choose an Option --</option>
							{this.getCategories()}
						</select>
						<button onClick={() => this.saveProduct()}>Save Product</button>
					</div>
				</div>
			)
		}

	}

	export default ProductSave