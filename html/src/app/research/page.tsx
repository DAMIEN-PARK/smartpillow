import { motion } from 'framer-motion';

const researchAreas = [
  {
    title: 'AI 수면 분석 연구',
    description: '머신러닝과 딥러닝을 활용한 수면 패턴 분석 기술 개발',
    progress: 80
  },
  {
    title: 'IoT 센서 기술',
    description: '정밀한 생체 신호 측정을 위한 센서 기술 연구',
    progress: 70
  },
  {
    title: '메타버스 연계 연구',
    description: '가상 현실 기반 수면 환경 최적화 연구',
    progress: 60
  }
];

export default function Research() {
  return (
    <main className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          연구 및 개발
        </motion.h1>

        <div className="space-y-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{area.title}</h2>
              <p className="text-blue-200 mb-6">{area.description}</p>
              <div className="w-full bg-gray-800 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${area.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  className="bg-blue-600 h-4 rounded-full"
                />
              </div>
              <div className="mt-2 text-right text-blue-200">{area.progress}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 