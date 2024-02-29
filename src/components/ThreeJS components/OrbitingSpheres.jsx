import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const OrbitingSpheres = (props) => {
  // The array contains refs I will use in the array of spheres
  const refs = useRef([]);

  // Initialize state to store positions and velocities of each sphere
  const [spheres, setSpheres] = useState(
    Array.from({ length: props.count }, () => ({
      position: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10],
      velocity: [(Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.0]
    }))
  );

  // the positions get updated in each frame.
  useFrame(() => {
    setSpheres(prevSpheres => prevSpheres.map((sphere, index) => ({
      position: [
        sphere.position[0] + sphere.velocity[0],
        sphere.position[1] + sphere.velocity[1],
        sphere.position[2] + sphere.velocity[2]
      ],
      velocity: sphere.velocity
    })));
  });

  return (
    <>
      {spheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position} ref={ref => (refs.current[index] = ref)}>
          <sphereGeometry args={[props.size, 32, 32]} />
          <meshBasicMaterial color={props.darkMode ? `rgba(40, 40, 40)` : `rgba(200, 200, 200)`} wireframe />
        </mesh>
      ))}
    </>
  );
};

export default OrbitingSpheres;
