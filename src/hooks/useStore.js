import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create((set) => {

	let cube = 'dirt'

	const
		addCube = (x, y, z) => {
			set((prev) => ({
				cubes: [
					...prev.cubes,
					{
						key: nanoid(),
						pos: [x, y, z],
						texture: cube
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

		activeTexture = (texture) => {
			cube = texture
		},

		saveWorld = () => { },

		resetWorld = () => { };

	const cubes = [{
		key: nanoid(),
		pos: [1, 1, 1],
		texture: 'dirt',
	}]

	return {
		texture: cube,
		cubes,
		addCube,
		removeCube,
		setTexture,
		saveWorld,
		resetWorld,
		activeTexture
	}
})

