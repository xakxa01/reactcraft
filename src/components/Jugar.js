import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./jugarComponents/Ground";
import Player from "./jugarComponents/Player";
import MenuInGame from "./MenuInGame";
import { toast, Toaster } from "react-hot-toast";
import Cubes from "./Cubes";
import TextureSelector from "./TextureSelector";

export default function Jugar() {
  useEffect(() => {
    toast("presiona ESC para ver el menu");
  }, []);

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />

        <ambientLight intensity={0.5} />

        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>

      <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
        <p className="text-gray-300">+</p>
      </div>

      <TextureSelector />

      <MenuInGame />

      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
}
