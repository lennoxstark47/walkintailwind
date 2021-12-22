import axios from 'axios';
import React, { Component } from 'react';

export default class CreateCx extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			phone: '',
			address: '',
			pin: '',
			success: false, //always a boolean value
		};
	}

	onNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	onPhoneChange = (event) => {
		this.setState({ phone: event.target.value });
	};

	onAddressChange = (event) => {
		this.setState({
			address: event.target.value,
		});
	};

	onPinChange = (event) => {
		this.setState({
			pin: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const newCustomer = {
			name: this.state.name,
			address: this.state.address,
			phone: this.state.phone,
			pin: this.state.pin,
		};

		console.log(newCustomer);

		axios
			.post(
				'https://secure-dusk-73088.herokuapp.com/api/customer/add',
				newCustomer
			)
			.then((res) => {
				if (res) {
					window.location = '/success';
				} else {
					window.location = '/fail';
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className='min-h-screen  items-center'>
				<div className='container mx-auto w-5/6  rounded-lg max-w-md shadow-lg hover:shadow-lg transition duration-300'>
					<div className='py-12  p-10  rounded-lg mt-5 h-full  bg-violet-200'>
						<div className='mb-6'>
							<label className='mr-4 text-gray-700 font-bold inline-block mb-2 '>
								Name
							</label>
							<input
								value={this.state.name}
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onNameChange}
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								Phone
							</label>
							<input
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onPhoneChange}
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								Address
							</label>
							<input
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onAddressChange}
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								PIN
							</label>
							<input
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onPinChange}
							/>
							<button
								onClick={this.handleSubmit}
								className='lg:w-96 w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
