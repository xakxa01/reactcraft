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

		removeCube = (x, y, z) => {
			set((prev) => ({
				cubes: prev.cubes.filter(cube => {
					const [X, Y, Z] = cube.pos;

					return X !== x || Y !== y || Z !== z
				})
			}))
		},

		setTexture = (texture) => {
			set(() => texture)
		},

		activeTexture = () => { },

		saveWorld = () => { },

		resetWorld = () => { };

	const cubes = [{
		key: nanoid(),
		pos: [1, 1, 1],
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
		activeTexture
	}
})

