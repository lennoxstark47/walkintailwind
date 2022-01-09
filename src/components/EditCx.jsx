import React, { Component } from 'react';
import axios from 'axios';

export default class EditCx extends Component {
	constructor(props) {
		super(props);
		this.state = {
			remarks: '',
			isConverted: null,
			name: '',
			phone: '',
			address: '',
			pin: '',
		};
	}

	componentDidMount() {
		axios
			.get(
				'https://secure-dusk-73088.herokuapp.com/api/customer/' +
					this.props.match.params.id
			)
			.then((res) => {
				this.setState({
					remarks: res.data.remarks,
					isConverted: res.data.isConverted,
					name: res.data.name,
					phone: res.data.phone,
					address: res.data.address,
					pin: res.data.pin,
				});
			});
	}

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
