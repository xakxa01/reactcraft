import { useBox } from "@react-three/cannon";
import * as textures from '../assets/images/textures'

export default function Cube({ texture, position }) {
	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))

	const activeTexture = textures[texture + 'Texture']

	return <mesh ref={ref}>
		<boxBufferGeometry />

		<meshStandardMaterial
			attach="material"
			map={activeTexture}
		/>
	</mesh>
}
