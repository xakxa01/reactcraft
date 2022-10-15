import React from 'react'
import { NavLink } from 'react-router-dom'
import { background, reactCraftLogo } from '../assets/images/images'

export default function Menu() {

	const links = [
		{
			title: 'jugar',
			link: '/jugar',
		},
		{
			title: 'informacion',
			link: '/informacion',
		},
	]

	return (
		<div className="w-screen h-screen">
			<img
				className='w-screen h-screen'
				src={background}
				alt="background" />

			<div className='absolute w-screen h-screen top-0'>
				<img
					className='m-auto pt-20'
					src={reactCraftLogo}
					alt="logo"
					draggable={false}
				/>


				<div className='flex flex-col justify-center items-center mt-20'>
					{links.map(item => (
						<NavLink
							to={item.link}
							className='text-center uppercase py-5 px-10 w-80 bg-gray-400 text-4xl my-1 hover:bg-green-600 font-semibold text-gray-800 border-4 border-gray-500 hover:text-white'
						>
							{item.title}
						</NavLink>
					))}
				</div>
			</div>

		</div>
	)
}
