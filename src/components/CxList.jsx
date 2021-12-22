import React, { Component } from 'react';
import axios from 'axios';

export default class CxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			customers: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get(
				'https://secure-dusk-73088.herokuapp.com/api/customer/list'
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					customers: res.data,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	customerList(props) {
		return this.state.customers.map(
			(customer) => {
				return (
					<tr key={customer._id}>
						<td className='px-6 py-4 whitespace-nowrap'>
							<div className='flex items-center'>
								<div className='text-sm font-medium text-gray-900'>
									{customer.createdAt.substring(
										0,
										10
									)}
								</div>
							</div>
						</td>
						<td className='px-6 py-4 whitespace-nowrap'>
							<div className='flex items-center'>
								<div className='text-sm text-gray-900'>
									{customer.name}
								</div>
							</div>
						</td>
						<td className='px-6 py-4 whitespace-nowrap'>
							<div className='text-sm text-gray-900'>
								{customer.phone}
							</div>
						</td>
						<td className='px-6 py-4 whitespace-nowrap'>
							<div className='flex items-center'>
								<div className='text-sm text-gray-900'>
									{customer.address}
								</div>
							</div>
						</td>
						{/* <td className='px-6 py-4 whitespace-nowrap'>
							<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
								Active
							</span>
						</td> */}
						<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
							{customer.pin}
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
							{customer.remarks}
						</td>
						{customer.isConverted ? (
							<td>
								<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
									Converted
								</span>
							</td>
						) : (
							<td>
								<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
									Not-Converted
								</span>
							</td>
						)}
						<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
							<a
								href='#'
								className='text-indigo-600 hover:text-indigo-900'>
								Edit
							</a>
						</td>
					</tr>
				);
			}
		);
	}

	render() {
		return (
			<div className='flex flex-col'>
				{this.state.loading ? (
					<p>Loading Data....</p>
				) : (
					<div className='-my-2 overflow-x-auto md:w-screen sm:w-screen min-w-screen '>
						<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
							<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
								<table className='min-w-full divide-y divide-gray-200'>
									<thead className='bg-gray-200 shadow-lg'>
										<tr>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Date
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Name
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Phone
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Address
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												PIN
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Remarks
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
												Converted
											</th>
											<th
												scope='col'
												className='relative px-6 py-3'>
												<span className='sr-only'>
													Edit
												</span>
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-200'>
										{this.customerList()}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
