import React,{Suspense,useState,useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from "@react-three/drei";
import { Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from'../Loader';


const Computers = ({ismobile}) => {


  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
     <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
       <pointLight intensity={1} />
       <primitive object={computer.scene}
       scale={ismobile ? 0.7 : 0.75}
       position={ismobile ? [0, -3 , -2.2] : [0, -3.25, -1.5 ]}
       rotation={[-0.01,-0.2,-0.1]}/>
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
     </mesh>
  )
}
const ComputersCanvas = () =>{
  const [ismobile, setismobile] = useState(false);
useEffect(() => {
 //add listener for changes in the screen
 const mediaquery = window.matchMedia('("max-width:500px")');

 //adding initial
 setismobile(mediaquery.matches)
 //add function that handle changes
 const handlechangemediaQuery = (event) =>{
  setismobile(event.mediaquery)
 }

 // we are adding an event listener on the mediaquery
 mediaquery.addEventListener('change',handlechangemediaQuery);

  return () => {
 //in this return we removing the eventListener
 mediaquery.removeEventListener('change',handlechangemediaQuery);
  }
}, [ ])
  return (
  <Canvas
    frameloop="demand"
    shadows
    camera={{position:[20, 3, 5], fov:25}}
    gl={{ preserveDrawingBuffer: true }}
    >
     <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers ismobile={ismobile}/>
      </Suspense>
      <Preload all />
  </Canvas>
  )
}

export default ComputersCanvas