import { useStore } from "../hooks/useStore";
import Cube from "./Cube";

export default function Cubes() {
  const { cubes } = useStore();

  return cubes.map(({ key, pos, texture }) => (
    <Cube key={key} texture={texture} position={pos} />
  ));
}
