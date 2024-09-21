import React, {useRef} from "react";

const loading = (props) =>{
    const ref = useRef();
    return(
        <>
            <mesh key={index} position={[0, 0, 0]} ref={ref}>
                <sphereGeometry args={[32, 32, 32]} />
                <meshBasicMaterial color={props.darkMode ? `rgba(40, 40, 40)` : `rgba(195, 195, 195)`} wireframe />
            </mesh>
        </>
    )
}