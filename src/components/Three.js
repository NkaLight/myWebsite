import { Canvas}  from "@react-three/fiber"
import Sphere from "./ThreeJS animations/SphereZoom"
import OrbitingSpheres from "./ThreeJS animations/OrbitingSpheres"
import { OrbitControls } from "@react-three/drei"
import { useRef, useEffect } from "react"


const Three = (props)=>{
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.classList.add('active');
    setTimeout(() => {
      //containerRef.current.classList.remove('active');
    }, 300);

    // You can access the new animationId from props.animationId
  }, []);
  return(
    <div ref={containerRef} className="animation-container">
      <Canvas shadows={true}>
        <ambientLight position={[10, 10, 10]}/>
          <Animation
            animationId={props.animationId}
            darkMode={props.darkMode}
            size={props.size}
            count={props.count}
          />
          <OrbitControls enableZoom={false} enableRotate={true}/>
      </Canvas>
    </div>
    
  )
}
//Child components logic here

const Animation = (props)=>{
  if(props.animationId === 'sphereZoom'){
    return(
    <Sphere
      darkMode={props.darkMode}
      size={props.size}
    />
    )
  }else if(props.animationId === "orbitingSpheres"){
    return(
      <OrbitingSpheres
        darkMode={props.darkMode}
        size={props.size}
        count={props.count}
      />
    )
  }else if(props.animationId === "loading"){
    return(
      <div>
        <h1>LOADING....</h1>
      </div>
    )
  }
}

export default  Three