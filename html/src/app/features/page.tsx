import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI 수면 분석',
    description: '최신 AI 기술을 활용하여 당신의 수면 패턴을 분석하고 개선 방안을 제시합니다.',
    icon: '🤖'
  },
  {
    title: '맞춤 온도 조절',
    description: '개인별 최적의 수면 온도를 자동으로 조절하여 편안한 수면 환경을 제공합니다.',
    icon: '🌡️'
  },
  {
    title: '스마트 알람',
    description: '수면 주기에 맞춰 최적의 기상 시간을 추천하고 알람을 설정합니다.',
    icon: '⏰'
  },
  {
    title: '건강 모니터링',
    description: '수면 중 생체 신호를 모니터링하여 건강 상태를 체크합니다.',
    icon: '❤️'
  },
  {
    title: '메타버스 연계',
    description: '가상 현실에서 최적의 수면 환경을 체험할 수 있습니다.',
    icon: '🌌'
  },
  {
    title: 'IoT 연동',
    description: '스마트 홈 기기들과 연동하여 통합된 수면 환경을 제공합니다.',
    icon: '🏠'
  }
];

export default function Features() {
  return (
    <main className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          제품 소개
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-4">{feature.title}</h2>
              <p className="text-blue-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 