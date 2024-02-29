import { Canvas}  from "@react-three/fiber"
import Sphere from "./ThreeJS components/SphereZoom"
import Glsl from "./ThreeJS components/Glsl"
import { OrbitControls } from "@react-three/drei"


const Three = (props)=>{
  //const controlRef = useRef()
  return(
    <div className="animation-container">
      <Canvas shadows={true}>
        <ambientLight position={[10, 10, 10]}/>
          <Animation
            animationId={props.animationId}
            darkMode={props.darkMode}
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
    />
    )
  }else if(props.animationId === "example"){
    return(
      <Glsl
      />
    )
  }
}

export default  Three