// 챗봇 HTML 코드
const chatbotHTML = `
    <div class="fixed bottom-8 right-8 z-50">
        <div class="relative">
            <!-- 챗봇 버튼 -->
            <button class="w-16 h-16 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>
            
            <!-- 챗봇 창 -->
            <div class="hidden absolute bottom-20 right-0 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700">
                <div class="p-4 border-b border-gray-700 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-bold">SOMVERSE AI 챗봇</h3>
                        <p class="text-xs text-blue-400">RAG 기반 검색 지원</p>
                    </div>
                    <button class="text-gray-400 hover:text-white" id="closeChat">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="h-96 overflow-y-auto p-4 space-y-4" id="chatMessages">
                    <div class="flex items-start space-x-2">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span class="text-white font-bold">AI</span>
                        </div>
                        <div class="bg-gray-800 p-3 rounded-lg">
                            <p class="text-sm">안녕하세요! SOMVERSE AI 챗봇입니다. RAG(Retrieval-Augmented Generation) 기술을 활용하여 수면 관련 질문에 답변해 드립니다.</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 border-t border-gray-700">
                    <div class="flex space-x-2">
                        <input type="text" id="chatInputField" placeholder="수면 관련 질문을 입력하세요..." class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500">
                        <button id="sendMessage" class="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                            전송
                        </button>
                    </div>
                    <div class="mt-2 text-xs text-gray-500">
                        RAG 기술로 문서 기반 정확한 답변을 제공합니다
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// 챗봇 초기화 함수
function initChatbot() {
    // 챗봇 HTML 추가
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // 챗봇 토글 기능
    const chatButton = document.querySelector('.fixed.bottom-8 button');
    const chatWindow = document.querySelector('.fixed.bottom-8 .hidden');
    const closeButton = document.getElementById('closeChat');
    const sendButton = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInputField');
    const chatMessages = document.getElementById('chatMessages');
    
    // 챗봇 열기/닫기
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
    });
    
    closeButton.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });
    
    // 메시지 전송 기능
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // 사용자 메시지 추가
            const userMessageHTML = `
                <div class="flex items-start space-x-2 justify-end">
                    <div class="bg-blue-600 p-3 rounded-lg">
                        <p class="text-sm">${message}</p>
                    </div>
                    <div class="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span class="text-white font-bold">나</span>
                    </div>
                </div>
            `;
            chatMessages.insertAdjacentHTML('beforeend', userMessageHTML);
            
            // 입력 필드 초기화
            chatInput.value = '';
            
            // 자동 스크롤
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // AI 응답 (간단한 시뮬레이션)
            setTimeout(() => {
                const botResponse = getRAGResponse(message);
                const botMessageHTML = `
                    <div class="flex items-start space-x-2">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span class="text-white font-bold">AI</span>
                        </div>
                        <div class="bg-gray-800 p-3 rounded-lg">
                            <p class="text-sm">${botResponse}</p>
                        </div>
                    </div>
                `;
                chatMessages.insertAdjacentHTML('beforeend', botMessageHTML);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }
    
    // 메시지 전송 이벤트
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// RAG 기반 응답 생성 (간단한 시뮬레이션)
function getRAGResponse(query) {
    const responses = {
        '수면': '수면은 건강한 삶의 필수 요소입니다. SOMVERSE는 RAG 기술을 활용하여 수면 데이터를 분석하고 최적의 수면 환경을 추천해 드립니다.',
        '베개': 'SOMVERSE 스마트 베개는 수면 중 머리 위치와 움직임을 추적하고, 최적의 자세를 유지할 수 있도록 지원합니다. RAG 기술로 사용자 데이터를 분석하여 개인화된 수면 솔루션을 제공합니다.',
        'rag': 'RAG(Retrieval-Augmented Generation)는 정보 검색과 텍스트 생성을 결합한 AI 기술입니다. SOMVERSE는 RAG를 활용하여 수면 데이터베이스에서 관련 정보를 검색하고 정확한 응답을 생성합니다.',
        '메타버스': 'SOMVERSE 메타버스는 수면 경험을 디지털 세계로 확장합니다. 사용자는 가상 공간에서 수면 데이터를 시각화하고 다른 사용자와 경험을 공유할 수 있습니다.'
    };
    
    // 간단한 키워드 기반 응답
    for (const key in responses) {
        if (query.toLowerCase().includes(key)) {
            return responses[key];
        }
    }
    
    // 기본 응답
    return '더 자세한 질문을 해주시면 RAG 기술을 활용하여 정확한 정보를 검색해 드리겠습니다. 수면, 스마트 베개, 메타버스 등에 관해 물어보세요.';
}

// 페이지 로드 시 챗봇 초기화
document.addEventListener('DOMContentLoaded', initChatbot); 