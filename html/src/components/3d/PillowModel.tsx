'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

function Pillow() {
  const [modelLoaded, setModelLoaded] = useState(false);
  
  // 간단한 로딩 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setModelLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // 실제 모델 대신 단순화된 베개 형태 사용
  return (
    <group>
      {/* 베개 본체 */}
      <mesh castShadow>
        <boxGeometry args={[3, 0.5, 1.5]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.1} roughness={0.5} />
      </mesh>
      
      {/* AI 센서 표시 (시각적 효과) */}
      {modelLoaded && (
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </mesh>
      )}
    </group>
  );
}

export default function PillowModel() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 1, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} castShadow />
        <Suspense fallback={null}>
          <Pillow />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
} 