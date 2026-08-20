import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Edges } from '@react-three/drei'
import type { Group } from 'three'

function PointerParallaxGroup() {
  const groupRef = useRef<Group>(null)
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, delta) => {
    const g = groupRef.current
    if (!g) return
    g.rotation.x += (target.current.y * 0.25 - g.rotation.x) * delta * 2
    g.rotation.y += (target.current.x * 0.35 - g.rotation.y) * delta * 2
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.4}>
        <mesh position={[2.7, 1.5, 0]}>
          <torusKnotGeometry args={[1, 0.28, 120, 18]} />
          <meshToonMaterial color="#ffd500" />
          <Edges color="#111111" threshold={15} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1.1} floatIntensity={1.8}>
        <mesh position={[-3.1, 1.7, -1]}>
          <icosahedronGeometry args={[1.1, 0]} />
          <meshToonMaterial color="#ff4d4d" />
          <Edges color="#111111" threshold={15} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-2.8, -1.8, 0.5]}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshToonMaterial color="#2d6cdf" />
          <Edges color="#111111" threshold={15} />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[3.2, -1.7, -0.5]}>
          <octahedronGeometry args={[0.95, 0]} />
          <meshToonMaterial color="#00c853" />
          <Edges color="#111111" threshold={15} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6}>
        <mesh position={[0.2, 2.9, -2]}>
          <torusGeometry args={[0.6, 0.22, 24, 48]} />
          <meshToonMaterial color="#ff7a2f" />
          <Edges color="#111111" threshold={15} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.3}>
        <mesh position={[-0.4, -2.7, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshToonMaterial color="#ff8fc8" />
          <Edges color="#111111" threshold={15} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 8, 6]} intensity={2.4} />
      <directionalLight position={[-6, -4, 4]} intensity={1.2} color="#ffd500" />
      <PointerParallaxGroup />
    </>
  )
}