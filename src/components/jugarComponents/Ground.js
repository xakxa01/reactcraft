import { usePlane } from '@react-three/cannon'
import { NearestFilter, RepeatWrapping } from 'three'
import { grassTexture } from '../../assets/images/textures'
import { useStore } from '../../hooks/useStore'

export default function Ground() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, 0, 0]
	}))

	const { addCube } = useStore()

	grassTexture.magFilter = NearestFilter;
	grassTexture.wrapS = RepeatWrapping;
	grassTexture.wrapT = RepeatWrapping;
	grassTexture.repeat.set(100, 100)

	const putCube = (e) => {
		e.stopPropagation();
		const position = Object.values(e.point)
		const [x, y, z] = position;
		addCube(x, y + 0.5, z)
	};

	return (
		<mesh
			onClick={putCube}
			ref={ref} >
			<planeGeometry
				attach='geometry'
				args={[100, 100]}
			/>

			<meshStandardMaterial
				attach='material'
				map={grassTexture}
			/>
		</mesh >
	)
}
