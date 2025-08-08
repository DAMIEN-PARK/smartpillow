'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Scene() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-64 h-64 relative"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* 침대 프레임 */}
        <div className="absolute inset-0 bg-amber-800 rounded-lg shadow-xl transform-gpu">
          {/* 매트리스 */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-inner">
            {/* 베개 */}
            <div className="absolute top-4 left-4 w-20 h-12 bg-gray-100 rounded-lg shadow-md"></div>
            {/* 이불 */}
            <div className="absolute bottom-4 right-4 left-4 h-24 bg-blue-200 rounded-lg shadow-md"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 