'use client';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';

// Earth component to be rendered inside Canvas
function EarthMesh({ scrollYProgress }) {
  const meshRef = useRef();
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/assets/color.jpg',
    '/assets/normal.png',
    '/assets/occlusion.jpg'
  ]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001 * delta * 60; // Constant rotation
    }
  });

  return (
    <motion.mesh 
      ref={meshRef}
      scale={2.5} 
      rotation-y={scrollYProgress}
    >
      <sphereGeometry args={[1, 64, 64]}/>
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
    </motion.mesh>
  );
}

export default function Earth() {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start']
  });

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -.25]} />
      <EarthMesh scrollYProgress={scrollYProgress} />
    </Canvas>
  )
}