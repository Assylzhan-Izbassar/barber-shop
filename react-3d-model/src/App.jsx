import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Chair from '../public/Chair'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5}/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Chair position={[0, -300, 0]}/>
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>
    </>
  )
}

export default App
