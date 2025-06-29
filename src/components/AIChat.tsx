
import { useState } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Piyush's AI assistant. Ask me anything about his experience, skills, or projects!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response based on keywords
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue.toLowerCase());
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);

    setInputValue('');
  };

  const generateBotResponse = (input: string) => {
    if (input.includes('experience') || input.includes('work')) {
      return "Piyush has 8+ years of experience as a Lead Data Engineer, specializing in building scalable data platforms and MLOps solutions. He's currently leading data architecture at Apnatime Tech, supporting 100+ data analysts and engineers.";
    }
    
    if (input.includes('skills') || input.includes('technology')) {
      return "Piyush is expert in Apache Spark, Kafka, Python, Java, AWS, GCP, MongoDB, and many other technologies. He specializes in real-time streaming, data processing, and ML infrastructure.";
    }
    
    if (input.includes('project') || input.includes('achievement')) {
      return "Some key achievements include: architecting event ingestion platforms handling 10B+ events daily, improving recommendation CTR by 20% using MongoDB VectorSearch, and increasing user retention by 30% through ML pipelines.";
    }
    
    if (input.includes('contact') || input.includes('hire') || input.includes('reach')) {
      return "You can reach Piyush at piyush4porwal@gmail.com or connect on LinkedIn at https://linkedin.com/in/piyu5h. He's open to discussing data engineering opportunities!";
    }
    
    if (input.includes('education') || input.includes('study')) {
      return "Piyush holds a Bachelor of Computer Science Engineering from IPS Academy, Indore (2013-2017). He's also an active open-source contributor and tech speaker.";
    }
    
    return "That's a great question! Piyush has extensive experience in data engineering, MLOps, and building scalable systems. Feel free to ask about his specific skills, projects, or experience with particular technologies.";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-sm text-blue-100">Ask about Piyush's experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-2 rounded-full ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about experience, skills, projects..."
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
