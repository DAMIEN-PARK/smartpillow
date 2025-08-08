'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import PillowModel from './PillowModel';
import { Suspense } from 'react';
import { Lobby } from './Lobby';

export function Scene() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 5, 20]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <Suspense fallback={null}>
          <PillowModel />
          <Lobby />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={4}
          maxDistance={10}
        />
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-sm">
        마우스로 드래그하여 모델을 회전할 수 있습니다
      </div>
    </div>
  );
} 