import React, {Component} from 'react';
	import axios from 'axios'

	class CustomerSave extends Component {

		state = { 
			nameInput: ''
		}

		constructor(props) {

			super(props)

			if(props.match.params.customerId) {

				axios.get(`http://localhost:4000/customers/${props.match.params.customerId}`)
					.then(response => {
						const {data} = response
						this.setState({
							nameInput: data.name,
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

		saveCustomer() {

			let customer = {
			  name: this.state.nameInput
			}

			let customerId = this.props.match.params.customerId

			if(customerId) {

				axios
				  .put(`http://localhost:4000/customers/${customerId}`, customer)
				  .then(response => {
		
						this.props.history.push("/")
				  })
				  .catch(error => {
					console.log(error)
				  })
			
			} else {

				axios
				  .post("http://localhost:4000/customers",customer)
				  .then(response => {
		
						this.props.history.push("/")
				  })
				  .catch(error => {
					console.log(error)
				  })
			}
		
		}

		render() {

			return (

				<div className="content">
					<div className="form">
						<input placeholder = "Name" 
							onChange={(event) => this.addName(event.target.value)} value={this.state.nameInput} />
						<button onClick={() => this.saveCustomer()}>Save Customer</button>
					</div>
				</div>
			)
		}

	}

	export default CustomerSave