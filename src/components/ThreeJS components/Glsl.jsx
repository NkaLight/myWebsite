import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import glsl from "babel-plugin-glsl/macro"



//Shader logic here

const WaveShaderMaterial = shaderMaterial(
    //Unifrom
    {},
    //Vertex Shader
    glsl `
    void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
    //Fragment Shader
    glsl `
    void main(){
        gl_FragColor = vec4(0.0, 0.4, 1.0, 1.0);
    }`
);


extend ( {WaveShaderMaterial} );

const Glsl = ()=>{
    return(
        <mesh>
            <planeGeometry args={[3,5]}/>
            <WaveShaderMaterial/>
        </mesh>
    )
}
export default Glsl