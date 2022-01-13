import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
export default class SearchByDate extends Component {
	constructor() {
		super();
		this.state = {
			min: new Date(),
			max: new Date(),
			custArray: [],
			loading: false,
		};
	}
	onMinChange = (date) => {
		this.setState({
			min: date,
		});
	};

	onMaxChange = (date) => {
		this.setState({
			max: date,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const dateRange = {
			min: this.state.min,
			max: this.state.max,
		};

		axios
			.post(
				'https://secure-dusk-73088.herokuapp.com/api/customer/getByDate',
				dateRange
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					custArray: res.data,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
		this.setState({
			min: new Date(),
			max: new Date(),
		});
	};

	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					height: '350px',
					marginTop: '10px',
				}}>
				<div className='p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
					<form className='space-y-6' action='#'>
						<h3 className='text-xl font-medium text-gray-900 dark:text-white'>
							Search By Date Range
						</h3>
						<div>
							<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
								Start Date
							</label>
							{/* <input
								type='email'
								name='email'
								id='email'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
								placeholder='name@company.com'
								required
							/> */}
							<DatePicker
								selected={this.state.min}
								dateFormat='yyyy/MM/dd'
							/>
						</div>
						<div>
							<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
								End Date
							</label>
							{/* <input
								type='password'
								name='password'
								id='password'
								placeholder='••••••••'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
								required
							/> */}
							<DatePicker
								selected={this.state.max}
								dateFormat='yyyy/MM/dd'
							/>
						</div>

						<button
							type='submit'
							className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}
}
