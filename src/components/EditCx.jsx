import React, { Component } from 'react';
import axios from 'axios';
import Switch from '@mui/material/Switch';

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

	onRemarksChange = (event) => {
		this.setState({
			remarks: event.target.value,
		});
	};

	onToggle = (event) => {
		if (this.state.isConverted) {
			this.setState({ isConverted: false });
		} else {
			this.setState({ isConverted: true });
		}
	};

	onNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	onAddressChange = (event) => {
		this.setState({
			address: event.target.value,
		});
	};

	onPhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	onPinChange = (event) => {
		this.setState({
			pin: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const updatedCx = {
			remarks: this.state.remarks,
			isConverted: this.state.isConverted,
			name: this.state.name,
			address: this.state.address,
			phone: this.state.phone,
			pin: this.state.pin,
		};

		axios
			.put(
				'https://secure-dusk-73088.herokuapp.com/api/customer/' +
					this.props.match.params.id,
				updatedCx
			)
			.then((res) => {
				if (!res) {
					console.log('error');
				} else {
					window.location = '/success';
				}
				console.log(res.data);
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
						<p className='mr-4 text-gray-700 font-bold text-lg inline-block mb-2 '>
							{this.state.name}
						</p>
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
								value={this.state.phone}
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onPhoneChange}
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								Address
							</label>
							<input
								value={this.state.address}
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onAddressChange}
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								PIN
							</label>
							<input
								value={this.state.pin}
								type='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
								onChange={this.onPinChange}
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								Remarks
							</label>
							<textarea
								value={this.state.remarks}
								onChange={this.onRemarksChange}
								typeof='text'
								className='mr-4 bg-white w-full text-gray-500 py-2 px-4 lg:w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
							/>
							<div style={{ marginLeft: '5px' }}>
								{/* <button
										type='button'
										className='btn btn-primary'
										onClick={this.onToggle}>
										Convert
									</button> */}
								<span>Convert</span>
								<Switch
									checked={this.state.isConverted}
									onChange={this.onToggle}
									inputProps={{
										'aria-label': 'controlled',
									}}
								/>
							</div>
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
