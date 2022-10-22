import { useEffect } from "react";
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore";

export default function TextureSelector() {

	const blocks = [
		'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Dirt.png',
		'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Glass_JE4_BE2.png',
		'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/Plains_Grass_Block.png',
		'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e9/Oak_Log_%28UD%29_JE5_BE3.png',
		'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/94/Oak_Planks_JE5.png'
	]

	const { dirt, grass, glass, wood, log } = useKeyboard();
	const { setTexture, activeTexture } = useStore();

	useEffect(() => {
		const textures = { dirt, grass, glass, wood, log };
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)

		if (pressedTexture) {
			setTexture(pressedTexture[0])
		}

	}, [dirt, grass, glass, wood, log, setTexture]);

	return (
		<div className='absolute w-screen h-screen top-0 left-0 flex justify-center items-end'>
			{blocks.map((img, index) => (
				<div className="bg-gray-300 p-2 border-gray-500 border-2 m-1 mb-2 rounded-lg relative">
					<span className="absolute top-0 left-0 text-xs p-1">{index + 1}</span>

					<img
						className="w-16 h-16"
						src={img}

						alt='block' />
				</div>
			))}
		</div>
	)
}
