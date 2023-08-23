import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import BoxContainer from "./BoxContainer";
import HeroText from "./HeroText";
import LoadingText from "./LoadingText";
import HeadAqua from "../../loaders/HeadAqua.tsx";
import HeadGreen from "../../loaders/HeadGreen.tsx";
import HeadOrange from "../../loaders/HeadOrange.tsx";
import HeadPink from "../../loaders/HeadPink.tsx";
import HeadWhite from "../../loaders/HeadWhite.tsx";
import HeadYellow from "../../loaders/HeadYellow.tsx";

export default function Hero() {
    return (
        <div>
            <Canvas 
            style={{
                backgroundColor: 'yellow',
                height: '100vh',
                // position: 'absolute',
                // zIndex: 2,
                }}>
                {/* <OrbitControls/> */}
            <Physics>
            {/* <OrthographicCamera 
                position={[0, 0, 35]}
                > */}
                        <ambientLight color="white" intensity={2} />
                        <spotLight color="white" position={[0,10,30]} intensity={1000}/>
                        <spotLight color="white" position={[0,0,30]} intensity={1000}/>
                        <spotLight color="white" position={[0,-10,30]} intensity={1000}/>
                        <spotLight color="white" position={[10,-10,30]} intensity={1000}/>
                        <spotLight color="white" position={[-10,-10,30]} intensity={1000}/>
                    <HeadAqua boundary={1} count={200}/>
                    <HeadGreen boundary={1} count={200}/>
                    <HeadOrange boundary={1} count={200}/>
                    <HeadPink boundary={1} count={200}/>
                    <HeadWhite boundary={1} count={200}/>
                    <HeadYellow boundary={1} count={200}/>
                    <HeroText />
                    <LoadingText/>
                    <BoxContainer/>
                {/* </OrthographicCamera> */}
            </Physics>
            </Canvas>
        </div>
    )
}