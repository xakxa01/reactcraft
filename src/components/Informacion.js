import React from 'react'
import { NavLink } from 'react-router-dom'
import { informacionText } from '../assets/images/images'

export default function Informacion() {

	const grass = 'https://raw.githubusercontent.com/danba340/minecraft-freecodecamp/start/src/images/dirt.jpg'

	const images = [
		'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
		'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		'https://seeklogo.com/images/T/three-js-logo-07A32307F1-seeklogo.com.png'
	]

	return (
		<div class="bg-repeat bg-center h-screen" style={{ backgroundImage: 'url(' + grass + ')' }}>
			<img
				className='pt-20 m-auto'
				src={informacionText}
				alt="informacionText"
				draggable={false}
			/>

			<h2 className='font-semibold text-center text-white text-4xl mt-32'>creado con:</h2>

			<div className='flex justify-center mt-7'>
				{images.map(link => (
					<img
						className='h-24 w-24 m-5'
						src={link}
						alt="react"
						draggable={false}
					/>
				))}
			</div>

			<div className='flex justify-center mt-24'>
				<NavLink
					to='/'
					className='text-center uppercase py-3 px-5 w-50 bg-gray-400 text-2xl my-1 hover:bg-green-600 font-semibold text-gray-800 border-4 border-gray-500 hover:text-white'
				>
					volver
				</NavLink>
			</div>

		</div>
	)
}
