import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Chair from '../public/Chair'
import { Picker } from '../public/Chair'

function App() {
  return (
    <>
      <Picker />
      <Canvas camera={{ position: [0, 250, 500] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={[5, 20, 30]} />
        <OrbitControls
          target={[0, 1, 0]}
          enableDamping={true}
          dampingFactor={0.1}
          rotateSpeed={0.8}
          maxPolarAngle={Math.PI}
        />
        <Suspense fallback={null}>
          <Chair position={[0, -150, 0]} />
          <Environment files='studio_light.hdr' />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
