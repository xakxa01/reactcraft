import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create((set) => {

	const
		addCube = (x, y, z) => {
			set((prev) => ({
				cubes: [
					...prev.cubes,
					{
						key: nanoid(),
						pos: [x, y, z],
						texture: prev.texture
					}
				]
			}))
		},

		removeCube = () => { },

		setTexture = () => { },

		saveWorld = () => { },

		resetWorld = () => { };

	const cubes = [{
		key: nanoid(),
		pos: [10, 0.5, 10],
		texture: 'dirt',
	}]

	return {
		texture: 'dirt',
		cubes,
		addCube,
		removeCube,
		setTexture,
		saveWorld,
		resetWorld,
	}
})

