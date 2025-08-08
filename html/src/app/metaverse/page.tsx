'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

function PillowModel({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(false);
  
  // GLB 모델 로드
  useEffect(() => {
    // 모델 로딩 시도
    const loadModel = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 시뮬레이션
        setModelLoaded(true);
        console.log('모델 로드 성공');
      } catch (error) {
        console.error('모델 로드 실패:', error);
        setModelError(true);
      }
    };
    
    loadModel();
  }, []);
  
  // 모델 데이터 로드
  const { scene, nodes } = useGLTF('/models/pillow.glb');
  
  useEffect(() => {
    // 모델 디버깅
    if (scene && nodes) {
      console.log('Scene:', scene);
      console.log('Nodes:', nodes);
    }
  }, [scene, nodes]);
  
  if (modelError) {
    // 기본 모델 (GLB 로드 실패시)
    return (
      <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
        <mesh castShadow>
          <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
          <meshStandardMaterial color="#60A5FA" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
    );
  }
  
  return (
    <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {modelLoaded ? (
        <primitive object={scene} />
      ) : (
        // 로딩 중 표시할 임시 객체
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#1E3A8A" wireframe />
        </mesh>
      )}
    </group>
  );
}

function SleepEnvironment() {
  return (
    <>
      {/* 배경 환경 */}
      <mesh position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      
      {/* 가상 수면 영역 */}
      <group position={[0, -2, 0]}>
        {/* 침대 */}
        <mesh position={[0, -1, 0]} receiveShadow>
          <boxGeometry args={[7, 1, 12]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        
        {/* 매트리스 */}
        <mesh position={[0, -0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[6, 0.5, 11]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        
        {/* 베개 모델 */}
        <PillowModel position={[0, 0.5, -4]} scale={1.5} />
      </group>
      
      {/* 조명 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#60A5FA" />
      
      {/* 환경 */}
      <Environment preset="night" />
    </>
  );
}

export default function Metaverse() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 로딩 시뮬레이션
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="min-h-screen bg-black">
      {/* 로딩 화면 */}
      {loading && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mb-4"></div>
          <h2 className="text-2xl font-bold text-blue-500">메타버스 로딩 중...</h2>
        </div>
      )}
      
      <div className="h-screen relative">
        <div className="absolute inset-0 z-10">
          <div className="max-w-4xl mx-auto px-4 pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
            >
              메타버스 수면 체험
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-200 text-center mb-12"
            >
              가상 현실에서 최적의 수면 환경을 체험해보세요.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                VR 체험 시작
              </button>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                3D 사운드 설정
              </button>
            </motion.div>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-gray-400">
            <p>드래그: 시점 이동 | 스크롤: 확대/축소</p>
          </div>
        </div>
        <div className="absolute inset-0">
          <Canvas shadows camera={{ position: [0, 0, 10] }}>
            <PerspectiveCamera makeDefault position={[0, 3, 15]} fov={50} />
            <Suspense fallback={null}>
              <SleepEnvironment />
            </Suspense>
            <OrbitControls 
              enableZoom={true} 
              maxDistance={25}
              minDistance={5}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </main>
  );
}

// GLB 모델 미리 로드 (선택사항)
useGLTF.preload('/models/pillow.glb'); 