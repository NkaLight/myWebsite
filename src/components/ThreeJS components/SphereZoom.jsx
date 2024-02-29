import {useState, useRef} from "react"
import { useFrame } from "@react-three/fiber"


const Sphere = (props)=>{

    const ref = useRef()
    const [color, setColor] = useState(0)


    useFrame((state, delta)=>{
        ref.current.rotation.y += delta / 10
        setColor(prevState => prevState + 0.04)
    })
    
    return(
        <mesh position={[0, 0, 0]}  ref={ref}>
              <sphereGeometry args={[color < 5 ? color : 5, 32, 32, 6.2]}/>
              <meshBasicMaterial color={props.darkMode ? `rgba(40, 40, 40)` : `rgba(200, 200, 200)`} wireframe/>
        </mesh>
    )
}
export default Sphere