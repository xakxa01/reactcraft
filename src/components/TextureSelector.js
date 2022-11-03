import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore";

export default function TextureSelector() {

	const blocks = [
		{
			url: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Dirt.png',
			active: 'dirt'
		},
		{
			url: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Glass_JE4_BE2.png',
			active: 'glass'
		},

		{
			url: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/Plains_Grass_Block.png',
			active: 'grass'
		},
		{
			url: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e9/Oak_Log_%28UD%29_JE5_BE3.png',
			active: 'log'
		},
		{
			url: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/94/Oak_Planks_JE5.png',
			active: 'wood'
		}
	]

	const { dirt, grass, glass, wood, log } = useKeyboard();
	const { setTexture, activeTexture } = useStore();
	const [activeSelect, setActiveSelect] = useState()

	useEffect(() => {
		let textures = { dirt, grass, glass, wood, log };
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)

		if (pressedTexture) {
			activeTexture(pressedTexture[0])
			setActiveSelect(pressedTexture[0])
		}

	}, [dirt, grass, glass, wood, log, setTexture, activeTexture]);

	return (
		<div className='absolute w-screen h-screen top-0 left-0 flex justify-center items-end'>
			{blocks.map((el, index) => (
				<div className={`bg-gray-300 p-2 border-gray-500 border-2 m-1 mb-2 rounded-lg relative transition-all 
				${el.active === activeSelect && 'border-blue-500 scale-90'} `}>
					<span className="absolute top-0 left-0 text-xs p-1">{index + 1}</span>

					<img
						className="w-16 h-16"
						src={el.url}
						alt='block'
					/>
				</div>
			))}
		</div>
	)
}
