import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const WireframeCity = () => {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  // Create city grid - multiple boxes at different heights
  const buildings = useMemo(() => {
    const buildingData = [];
    const gridSize = 20;
    const spacing = 3;
    
    for (let x = -gridSize; x < gridSize; x += spacing) {
      for (let z = -gridSize; z < gridSize; z += spacing) {
        const height = Math.random() * 8 + 2;
        buildingData.push({
          position: [x, height / 2, z] as [number, number, number],
          height,
          phase: Math.random() * Math.PI * 2, // Random phase for pulsing
        });
      }
    }
    return buildingData;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    timeRef.current += 0.01;
    
    // Rotate the entire city slowly
    groupRef.current.rotation.y = timeRef.current * 0.1;
    
    // Pulse effect on individual buildings
    groupRef.current.children.forEach((child, i) => {
      const building = buildings[i];
      if (building) {
        const pulse = Math.sin(timeRef.current * 2 + building.phase) * 0.15 + 1;
        child.scale.y = pulse;
        
        // Opacity pulse
        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = 0.3 + Math.sin(timeRef.current * 2 + building.phase) * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {buildings.map((building, i) => (
        <mesh key={i} position={building.position}>
          <boxGeometry args={[2, building.height, 2]} />
          <meshBasicMaterial 
            color="#ffffff" 
            wireframe 
            transparent 
            opacity={0.3}
          />
        </mesh>
      ))}
      
      {/* Ground grid */}
      <gridHelper args={[100, 50, '#ffffff', '#ffffff']} position={[0, 0, 0]} />
    </group>
  );
};

export const WireframeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <Canvas
        camera={{ position: [0, 15, 25], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <WireframeCity />
      </Canvas>
    </div>
  );
};
