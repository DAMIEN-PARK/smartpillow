'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 페이지 로딩 시뮬레이션
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          {/* 배경 그래디언트 효과 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                당신이 주무실때<br />
                AI가 깨어있겠습니다
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                수면이 데이터가 되다
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/features"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">📖</span> 제품 알아보기
                </Link>
                <Link 
                  href="/research"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">🔬</span> 연구 내용 보기
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💤</div>
                    <h3 className="text-2xl font-bold mb-2">스마트 베개</h3>
                    <p className="text-gray-300">AI 기반 수면 분석 및 최적화</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기능 소개 섹션 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">주요 기능</h2>
            <p className="text-xl text-gray-400">Somverse의 혁신적인 기술을 소개합니다</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "AI 수면 분석",
                description: "AI 알고리즘을 통해 수면 패턴을 분석하고 최적화 방안을 제시합니다."
              },
              {
                icon: "🌡️",
                title: "온도 조절 기능",
                description: "사용자의 체온과 선호도에 맞게 베개 온도를 자동으로 조절합니다."
              },
              {
                icon: "🎵",
                title: "맞춤형 사운드",
                description: "개인화된 수면 유도 사운드로 더 빠르고 깊은 수면을 경험하세요."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 메타버스 체험 섹션 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-4xl font-bold mb-6">메타버스 체험</h2>
              <p className="text-xl text-gray-300 mb-6">
                가상 공간에서 Somverse의 스마트 베개를 미리 경험해보세요. 3D로 구현된 수면 환경에서 다양한 기능을 체험할 수 있습니다.
              </p>
              <Link 
                href="/metaverse"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition-colors inline-flex items-center"
              >
                <span className="mr-2">🌐</span> 메타버스 입장하기
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-black/50 rounded-full p-4">
                  <div className="text-6xl">🌙</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 연구 및 개발 섹션 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">연구 & 개발</h2>
            <p className="text-xl text-gray-400">최신 기술과 연구로 더 나은 수면을 제공합니다</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">수면 데이터 분석</h3>
              <p className="text-gray-300 mb-4">
                수천 명의 수면 데이터를 분석하여 최적의 수면 환경을 연구합니다.
              </p>
              <Link 
                href="/research"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                자세히 보기 <span className="ml-2">→</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">AI 알고리즘 개발</h3>
              <p className="text-gray-300 mb-4">
                개인화된 수면 솔루션을 제공하기 위한 AI 알고리즘을 지속적으로 개발합니다.
              </p>
              <Link 
                href="/research"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center"
              >
                자세히 보기 <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">더 나은 수면을 경험하세요</h2>
            <p className="text-xl text-gray-300 mb-8">
              Somverse와 함께 수면의 질을 높이고 더 건강한 삶을 시작하세요.
            </p>
            <Link 
              href="/features"
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-bold transition-transform hover:scale-105"
            >
              지금 시작하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 