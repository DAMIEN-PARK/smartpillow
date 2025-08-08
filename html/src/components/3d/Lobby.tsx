'use client';

import React, { useState } from 'react';
import { Html, Text } from '@react-three/drei';

export function Lobby() {
  const [showChatbot, setShowChatbot] = useState(false);
  
  return (
    <group position={[0, 2, 0]}>
      {/* 네온 로고 */}
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.5}
        color="#00ffff"
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#5d00ff"
      >
        Somverse
      </Text>
      
      {/* AI 챗봇 버튼 */}
      <mesh 
        position={[0, -0.5, 0]}
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <planeGeometry args={[2, 0.5]} />
        <meshBasicMaterial color="#5d00ff" transparent opacity={0.8} />
        <Html position={[0, 0, 0.1]} center>
          <div className="text-white font-bold px-4 py-2 cursor-pointer">
            AI 챗봇 {showChatbot ? '닫기' : '열기'}
          </div>
        </Html>
      </mesh>
      
      {/* 챗봇 인터페이스 */}
      {showChatbot && (
        <Html position={[0, -2, 0]} center>
          <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">AI 스마트 베개 도우미</h3>
              <button 
                onClick={() => setShowChatbot(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="bg-gray-800 rounded p-3 mb-3 text-sm">
              안녕하세요! Somverse AI 도우미입니다. 스마트 베개에 대해 어떤 질문이 있으신가요?
            </div>
            <div className="flex">
              <input 
                type="text" 
                placeholder="질문을 입력하세요..."
                className="bg-gray-700 text-white px-3 py-2 rounded-l flex-grow text-sm"
              />
              <button className="bg-blue-600 px-3 py-2 rounded-r text-sm">전송</button>
            </div>
            <div className="mt-3 text-xs text-gray-400">
              자주 묻는 질문: 수면 분석은 어떻게 작동하나요?
            </div>
          </div>
        </Html>
      )}
    </group>
  );
} 