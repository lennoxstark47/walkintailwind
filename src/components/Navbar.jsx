import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className='bg-gray-800'>
				<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
					<div className='relative flex items-center justify-between h-16'>
						<div className='absolute inset-y-0 left-0 flex items-center sm:hidden '>
							{/* <!-- Mobile menu button--> */}
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
								aria-controls='mobile-menu'
								aria-expanded='false'>
								<span className='sr-only'>
									Open main menu
								</span>
								{!isOpen ? (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								) : (
									<svg
										className='hidden h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
						<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
							<div className='flex-shrink-0 flex items-center'>
								<img
									className='block lg:hidden h-8 w-auto'
									src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
									alt='Workflow'
								/>
								<img
									className='hidden lg:block h-8 w-auto'
									src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
									alt='Workflow'
								/>
							</div>
							<div className='hidden sm:block sm:ml-6'>
								<div className='flex space-x-1'>
									{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
									<a
										href='/'
										className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
										aria-current='page'>
										Create
									</a>

									<a
										href='#'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Search
									</a>

									<a
										href='#'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Search By Date
									</a>

									<a
										href='/cxlist'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										View All Customers
									</a>
									<a
										href='#'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Converted
									</a>
									<a
										href='#'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Non-Converted
									</a>
								</div>
							</div>
						</div>
						<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
							{/* <!-- Profile dropdown --> */}
						</div>
					</div>
				</div>

				{/* <!-- Mobile menu, show/hide based on menu state. --> */}
				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'>
					{(ref) => (
						<div
							className='sm:hidden'
							id='mobile-menu'>
							<div
								ref={ref}
								className='px-2 pt-2 pb-3 space-y-1'>
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
								<a
									href='#'
									className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
									aria-current='page'>
									Create
								</a>

								<a
									href='#'
									className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
									Search
								</a>

								<a
									href='#'
									className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
									Search By Date
								</a>

								<a
									href='#'
									className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
									View All Customers
								</a>
								<a
									href='#'
									className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
									Converted
								</a>
								<a
									href='#'
									className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
									Non-converted
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}
