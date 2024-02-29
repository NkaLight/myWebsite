import { Canvas}  from "@react-three/fiber"
import Sphere from "./ThreeJS components/SphereZoom"
import OrbitingSpheres from "./ThreeJS components/OrbitingSpheres"
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
  }
}

export default  Three