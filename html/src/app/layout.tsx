import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOMVERSE - 새로운 메타버스의 시작',
  description: 'SOMVERSE는 새로운 디지털 경험의 시작입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="text-xl font-bold text-white">
                <a href="/" className="hover:text-blue-400 transition-colors">Somverse</a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/features" className="text-gray-300 hover:text-white transition-colors">제품 소개</a>
                <a href="/research" className="text-gray-300 hover:text-white transition-colors">연구 & 개발</a>
                <a href="/mvp" className="text-gray-300 hover:text-white transition-colors">MVP 체험</a>
                <a href="/metaverse" className="text-gray-300 hover:text-white transition-colors">메타버스</a>
                <a href="/community" className="text-gray-300 hover:text-white transition-colors">커뮤니티</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <Script src="/chatbot.js" strategy="afterInteractive" />
        <footer className="bg-black text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Somverse</h3>
                <p className="text-sm">AI 기반 스마트 수면 혁신</p>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">제품</h4>
                <ul className="space-y-2">
                  <li><a href="/features" className="hover:text-white transition-colors">스마트 베개</a></li>
                  <li><a href="/research" className="hover:text-white transition-colors">연구 & 개발</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">체험</h4>
                <ul className="space-y-2">
                  <li><a href="/mvp" className="hover:text-white transition-colors">MVP 체험</a></li>
                  <li><a href="/metaverse" className="hover:text-white transition-colors">메타버스</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">고객지원</h4>
                <ul className="space-y-2">
                  <li><a href="/community" className="hover:text-white transition-colors">커뮤니티</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">문의하기</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              © 2024 Somverse. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 