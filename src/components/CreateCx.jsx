import React, { Component } from 'react';

export default class CreateCx extends Component {
	render() {
		return (
			<div className='min-h-screen items-center'>
				<div className='container mx-auto rounded-lg max-w-md shadow-lg hover:shadow-lg transition duration-300'>
					<div className='py-12  p-10 rounded-lg mt-5 h-full bg-gray-300'>
						<div className='mb-6'>
							<label className='mr-4 text-gray-700 font-bold inline-block mb-2 '>
								Name
							</label>
							<input
								type='text'
								className='mr-4 bg-gray-100 text-gray-100 py-2 px-4 w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								Phone
							</label>
							<input
								type='text'
								className='mr-4 bg-gray-100 text-gray-100 py-2 px-4 w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								Address
							</label>
							<input
								type='text'
								className='mr-4 bg-gray-100 text-gray-100 py-2 px-4 w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
							/>
							<label className='mr-4 mt-3 text-gray-700 font-bold inline-block mb-2 '>
								PIN
							</label>
							<input
								type='text'
								className='mr-4 bg-gray-100 text-gray-100 py-2 px-4 w-96 border-transparent focus:ring-2 focus:ring-indigo-400 rounded'
							/>
							<button className='w-96 mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
