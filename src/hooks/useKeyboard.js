import { useCallback, useEffect, useState } from 'react'

function actionByKey(key) {
	const keyActionMap = {
		KeyW: 'moveForward',
		KeyS: 'moveBackward',
		KeyA: 'moveLeft',
		KeyD: 'moveRight',
		Space: 'jump',
		Digit1: 'dirt',
		Digit2: 'glass',
		Digit3: 'grass',
		Digit4: 'log',
		Digit5: 'wood',
	}
	return keyActionMap[key]
}

export const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		dirt: false,
		glass: false,
		grass: false,
		log: false,
		wood: false,
	})

	const handleKeyDown = useCallback((e) => {
		// console.log("e", e)
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = useCallback((e) => {

		// console.log("e", e)
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: false
				})
			})
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyDown, handleKeyUp])

	// console.log("actions", actions)
	return actions;
}
