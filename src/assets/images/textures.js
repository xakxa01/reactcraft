import { NearestFilter, TextureLoader } from 'three'

const
	dirtTexture = new TextureLoader().load('https://raw.githubusercontent.com/danba340/minecraft-freecodecamp/start/src/images/dirt.jpg'),
	glassTexture = new TextureLoader().load('https://raw.githubusercontent.com/danba340/minecraft-freecodecamp/start/src/images/glass.png'),
	grassTexture = new TextureLoader().load('https://raw.githubusercontent.com/danba340/minecraft-freecodecamp/start/src/images/grass.jpg'),
	logTexture = new TextureLoader().load('https://raw.githubusercontent.com/danba340/minecraft-freecodecamp/start/src/images/log.jpg'),
	woodTexture = new TextureLoader().load('https://raw.githubusercontent.com/danba340/minecraft-freecodecamp/start/src/images/wood.png');


const textureArray = [
	dirtTexture,
	glassTexture,
	grassTexture,
	logTexture,
	woodTexture
]

textureArray.map(texture => {
	return texture.magFilter = NearestFilter;
})

export {
	dirtTexture,
	glassTexture,
	grassTexture,
	logTexture,
	woodTexture,
};










