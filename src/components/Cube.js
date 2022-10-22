import { useBox } from "@react-three/cannon";
import * as textures from '../assets/images/textures'
import { useStore } from "../hooks/useStore";

export default function Cube({ texture, position }) {
	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))

	const { removeCube, addCube } = useStore();

	const activeTexture = textures[texture + 'Texture']

	const putFaceCube = (e) => {
		e.stopPropagation()
		const clickedFace = Math.floor(e.faceIndex / 2)
		const { x, y, z } = ref.current.position

		if (e.button === 2) removeCube(x, y, z)
		else if (clickedFace === 0) addCube(x + 1, y, z)
		else if (clickedFace === 1) addCube(x - 1, y, z)
		else if (clickedFace === 2) addCube(x, y + 1, z)
		else if (clickedFace === 3) addCube(x, y - 1, z)
		else if (clickedFace === 4) addCube(x, y, z + 1)
		else if (clickedFace === 5) addCube(x, y, z - 1)
	}

	return <mesh onClick={putFaceCube} ref={ref}>
		<boxBufferGeometry attach="geometry" />

		<meshStandardMaterial
			attach="material"
			map={activeTexture}
		/>
	</mesh>
}
