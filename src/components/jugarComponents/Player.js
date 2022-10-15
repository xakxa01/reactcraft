import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { useKeyboard } from '../../hooks/useKeyboard';
import FVP from './FVP';

export default function Player() {

	const { jump, moveBackward, moveForward, moveLeft, moveRight } = useKeyboard();

	const { camera } = useThree();
	const [ref, api] = useSphere(() => ({
		mass: 4,
		type: 'Dynamic',
		position: [0, 1, 0]
	}));

	const vel = useRef([0, 0, 0])
	useEffect(() => {
		api.velocity.subscribe((v) => vel.current = v)
	}, [api.velocity]);

	const pos = useRef([0, 0, 0])
	useEffect(() => {
		api.position.subscribe((p) => pos.current = p)
	}, [api.position]);

	useFrame(() => {
		camera.position.copy(new Vector3(
			pos.current[0],
			pos.current[1],
			pos.current[2],
		))

		const direction = new Vector3();

		const frontVector = new Vector3(
			0,
			0,
			(moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
		)

		const sideVector = new Vector3(
			(moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
			0,
			0,
		)

		direction
			.subVectors(frontVector, sideVector)
			.normalize()
			.multiplyScalar(4)
			.applyEuler(camera.rotation)

		api.velocity.set(direction.x, vel.current[1], direction.z)

		if (jump) api.velocity.set(vel.current[0], 4, vel.current[0])
	})

	return (
		<>
			<FVP />
			<mesh ref={ref}></mesh>
		</>
	)
}
