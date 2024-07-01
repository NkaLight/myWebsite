import {useState, useRef} from "react"
import { useFrame } from "@react-three/fiber"


const Sphere = (props)=>{

    const ref = useRef()
    const [color, setColor] = useState(0)


    useFrame((state, delta)=>{
        ref.current.rotation.y += delta / 4
        setColor(prevState => prevState + 0.035)
    })
    
    return(
        <>
            <mesh position={[0, 0, 0]}  ref={ref}>
                <sphereGeometry args={[color < props.size ? color : props.size, 32, 32, 6.2]}/>
                <meshBasicMaterial color={props.darkMode ? `rgba(20, 20, 20)` : `rgba(195, 195, 195)`} wireframe/>
            </mesh>
        </>
    )
}
export default Sphere