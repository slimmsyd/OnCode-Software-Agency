"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  includeContactButton?: boolean;
}

interface ServiceOption {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
}

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Project case studies information
  const projectInfo = {
    blockchain: {
      kinnected: {
        name: "Kinnected",
        description: "A blockchain-powered platform to unify and immortalize family legacies.",
        technologies: ["Arweave", "GraphQL API", "Knowledge Graph AI"],
        details: "Using Arweave for permanent, decentralized storage, Kinnected ensures photos, stories, and documents are preserved for generations. We developed a custom GraphQL API layered with a Knowledge Graph AI to map and query complex family relationships. The AI organizes fragmented data into interactive timelines and surfaces hidden connections.",
        url: "https://www.kinnected.life/"
      },
      other: [
        {
          name: "Creature Cubes",
          description: "Web3 NFT collection",
          url: "https://creaturecubes.art/"
        },
        {
          name: "Terrin Crypto Solutions",
          description: "Comprehensive support for users at all levels, covering privacy, security, and advanced blockchain applications.",
          url: "https://www.terrapincrypto.us/"
        }
      ]
    },
    ai: {
      streetEconomics: {
        name: "Street Economics",
        description: "A custom Discord analytics dashboard that tracks community interactions.",
        technologies: ["Discord Bot", "Analytics Dashboard", "AI Agents"],
        details: "We built a comprehensive analytics system that captures timestamps, channels, users, and messages to provide clear insights into community engagement. The dashboard shows peak activity times, the most popular channels, and top contributors in real-time, helping Street Economics boost engagement, focus efforts, reward members, and plan smarter.",
      },
      other: [
        {
          name: "Solomon Chat App",
          description: "AI-powered chat application for cryptocurrency consulting",
          url: "/casetudies/solomonAI"
        },
        {
          name: "Invoice Magi",
          description: "Agentic AI for Invoice Management",
          url: "https://www.invoicemagic.tech/"
        }
      ]
    }
  };

  const serviceOptions: ServiceOption[] = [
    {
      id: "mvp",
      name: "MVP Development",
      duration: "4-6 weeks",
      price: "Custom Quote",
      description: "Transform your idea into a market-ready MVP in weeks, not months."
    },
    {
      id: "webdev",
      name: "Custom Web App Development",
      duration: "6-12 weeks",
      price: "Custom Quote",
      description: "Scalable and robust web applications tailored to your unique business needs."
    },
    {
      id: "aidev",
      name: "AI Tool Development",
      duration: "3-8 weeks",
      price: "Custom Quote",
      description: "Leverage the latest AI technologies to develop intelligent solutions."
    },
    {
      id: "uiux",
      name: "UI/UX Design",
      duration: "2-4 weeks",
      price: "Custom Quote",
      description: "Intuitive interfaces that provide exceptional user experiences."
    }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content: "👋 Hi! I'm the OnCode AI assistant. How can I help with your software development needs?",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Webhook URLs for tracking conversations
  const webhookUrl1 = "https://hook.us2.make.com/kz8n27322r3opkg8cl659hfr7exfpkyq";
  const webhookUrl2 = "https://hook.us1.make.com/sij9fbffnrt7zacbv8nflikuw0s4dnc1";

  // Function to send data to webhooks
  const sendToWebhooks = async (userMessage: string, assistantMessage: string) => {
    try {
      console.log('Sending to webhooks:', { userMessage, assistantMessage });
      
      // Format data for Make.com webhook
      const webhookData = {
        data: {
          userMessage: userMessage || "empty",
          assistantMessage: assistantMessage || "empty",
          timestamp: new Date().toISOString(),
          source: 'OnCode Website Chat'
        }
      };
      
      console.log('Formatted webhook data:', JSON.stringify(webhookData, null, 2));
      
      // Send to first webhook
      // try {
      //   console.log('Sending to webhook 1:', webhookUrl1);
      //   const response1 = await fetch(webhookUrl1, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       userMessage,
      //       assistantMessage,
      //       timestamp: new Date().toISOString(),
      //       source: 'OnCode Website Chat'
      //     }),
      //   });
      
      //   if (!response1.ok) {
      //     console.error('Webhook 1 error:', response1.status, await response1.text());
      //   } else {
      //     console.log('Webhook 1 success:', await response1.text());
      //   }
      // } catch (error) {
      //   console.error('Error sending to webhook 1:', error);
      // }

      // Send to second webhook
      try {
        console.log('Sending to webhook 2:', webhookUrl2);
        console.log("Loggin the user Message", userMessage)
        console.log('Assistant message:', assistantMessage);
        const response2 = await fetch(webhookUrl2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        });
        
        if (!response2.ok) {
          console.error('Webhook 2 error:', response2.status, await response2.text());
        } else {
          console.log('Webhook 2 success:', await response2.text());
        }
      } catch (error) {
        console.error('Error sending to webhook 2:', error);
      }
    } catch (error) {
      console.error('Error in sendToWebhooks:', error);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add initial messages
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialMessage = "I can help you understand our services, discuss your project requirements, or connect you with our development team. We specialize in building MVPs rapidly with AI-powered workflows.";
      
      setMessages(prev => [...prev, 
        {
          type: "assistant",
          content: initialMessage,
          timestamp: new Date()
        }
      ]);
      
      // Send initial conversation to webhooks
      sendToWebhooks("", initialMessage);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to check if the message is about blockchain
  const isBlockchainQuestion = (text: string) => {
    const blockchainKeywords = ['blockchain', 'web3', 'crypto', 'nft', 'token', 'decentralized', 'arweave', 'ethereum', 'bitcoin', 'kinnected'];
    return blockchainKeywords.some(keyword => text.toLowerCase().includes(keyword));
  };

  // Function to check if the message is about AI/data analytics
  const isAIQuestion = (text: string) => {
    const aiKeywords = ['ai', 'artificial intelligence', 'machine learning', 'data analytics', 'analytics', 'dashboard', 'discord bot', 'street economics', 'automation', 'data'];
    return aiKeywords.some(keyword => text.toLowerCase().includes(keyword));
  };

  // Function to generate blockchain project response
  const generateBlockchainResponse = () => {
    const { kinnected, other } = projectInfo.blockchain;
    
    return `Yes, OnCode has extensive experience with blockchain development! Here are some of our notable projects:

• ${kinnected.name}: ${kinnected.description}
  ${kinnected.details}
  Technologies: ${kinnected.technologies.join(', ')}
  Website: ${kinnected.url}

• ${other[0].name}: ${other[0].description}
  Website: ${other[0].url}

• ${other[1].name}: ${other[1].description}
  Website: ${other[1].url}

We can help with various blockchain solutions including NFT collections, decentralized storage, smart contracts, and Web3 integrations. Would you like to discuss a specific blockchain project?`;
  };

  // Function to generate AI/data analytics project response
  const generateAIResponse = () => {
    const { streetEconomics, other } = projectInfo.ai;
    
    return `Absolutely! OnCode specializes in AI automation and data analytics. Here are some of our key projects:

• ${streetEconomics.name}: ${streetEconomics.description}
  ${streetEconomics.details}
  Technologies: ${streetEconomics.technologies.join(', ')}

• ${other[0].name}: ${other[0].description}
  Learn more: ${other[0].url}

• ${other[1].name}: ${other[1].description}
  Website: ${other[1].url}

Our AI expertise includes building custom analytics dashboards, developing AI agents for automation, creating chatbots, and implementing data processing pipelines. Would you like to discuss how we can help with your AI or data analytics project?`;
  };

  // Format message text with proper styling
  const formatMessageText = (text: string) => {
    // Format project names and labels as bold
    let formattedText = text
      // Bold project names after bullet points
      .replace(/• ([^:]+):/g, '• <strong>$1</strong>:')
      // Bold labels like "Technologies:", "Website:", etc.
      .replace(/(Technologies|Website|Learn more):/g, '<strong>$1</strong>:');
    
    return formattedText;
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessageText = message.trim();
    const userMessage = {
      type: "user" as const,
      content: userMessageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    // Check if the message is about blockchain
    if (isBlockchainQuestion(userMessageText)) {
      const blockchainResponseContent = generateBlockchainResponse();
      
      const blockchainResponse = {
        type: "assistant" as const,
        content: blockchainResponseContent,
        timestamp: new Date(),
        includeContactButton: true
      };
      
      setTimeout(async () => {
        setMessages((prev) => [...prev, blockchainResponse]);
        setIsLoading(false);
        
        // Send to webhooks
        await sendToWebhooks(userMessageText, blockchainResponseContent);
      }, 1000);
      return;
    }

    // Check if the message is about AI/data analytics
    if (isAIQuestion(userMessageText)) {
      const aiResponseContent = generateAIResponse();
      
      const aiResponse = {
        type: "assistant" as const,
        content: aiResponseContent,
        timestamp: new Date(),
        includeContactButton: true
      };
      
      setTimeout(async () => {
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
        
        // Send to webhooks
        await sendToWebhooks(userMessageText, aiResponseContent);
      }, 1000);
      return;
    }

    // Check if the message is about services/development
    const serviceKeywords = ['services', 'development', 'build', 'app', 'website', 'software', 'mvp'];
    const isServiceQuestion = serviceKeywords.some(keyword => 
      userMessageText.toLowerCase().includes(keyword)
    );

    if (isServiceQuestion) {
      const servicesMessageContent = `At OnCode, we offer several key services:

• Custom Web Application Development: Scalable and robust web apps tailored to your business needs.

• UI/UX Design: Intuitive interfaces that provide exceptional user experiences.

• AI Tool Solutions: Leveraging the latest AI technologies for intelligent solutions.

• MVP Development: Transform your idea into a market-ready product in weeks, not months.

Would you like to learn more about any specific service or discuss your project requirements?`;

      const servicesMessage = {
        type: "assistant" as const,
        content: servicesMessageContent,
        timestamp: new Date(),
        includeContactButton: true
      };
      
      setTimeout(async () => {
        setMessages((prev) => [...prev, servicesMessage]);
        setIsLoading(false);
        
        // Send to webhooks
        await sendToWebhooks(userMessageText, servicesMessageContent);
      }, 1000);
      return;
    }

    // Check if the message is about contact/consultation
    const contactKeywords = ['contact', 'consultation', 'talk to team', 'get in touch', 'start project', 'book'];
    const isContactRequest = contactKeywords.some(keyword => 
      userMessageText.toLowerCase().includes(keyword)
    );

    if (isContactRequest) {
      const contactMessageContent = `I'd be happy to help you get in touch with our development team. We can discuss your project requirements and provide a consultation.

After booking a call, you'll receive:
• A response within 24 hours
• A free MVP checklist to review before our call
• An evaluation to ensure your project is a good fit

Would you like to schedule a call with our team?`;

      const contactMessage = {
        type: "assistant" as const,
        content: contactMessageContent,
        timestamp: new Date(),
        includeContactButton: true
      };
      
      setTimeout(async () => {
        setMessages((prev) => [...prev, contactMessage]);
        setIsLoading(false);
        
        // Send to webhooks
        await sendToWebhooks(userMessageText, contactMessageContent);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('/api/chatBot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const responseText = data.message || "";
      const includeContactButton = responseText.toLowerCase().includes('contact') || 
                                 responseText.toLowerCase().includes('consultation') ||
                                 responseText.toLowerCase().includes('team') ||
                                 responseText.toLowerCase().includes('book a call');
      
      const assistantMessage = {
        type: "assistant" as const,
        content: responseText || "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly.",
        timestamp: new Date(),
        includeContactButton
      };

      setMessages((prev) => [...prev, assistantMessage]);
      
      // Send to webhooks
      await sendToWebhooks(userMessageText, responseText);
    } catch (error) {
      console.error('Error:', error);
      
      const errorMessageContent = "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly.";
      const errorMessage = {
        type: "assistant" as const,
        content: errorMessageContent,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      
      // Send error to webhooks
      await sendToWebhooks(userMessageText, errorMessageContent);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactButtonClick = async () => {
    // Track contact button clicks in webhook
    await sendToWebhooks("User clicked contact button", "Redirected to Calendly");
    window.open('https://calendly.com/0ncode-info/30min', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500/80 to-emerald-600/80 hover:from-emerald-400/90 hover:to-emerald-500/90 backdrop-blur-xl p-3.5 rounded-full transition-all duration-300 shadow-lg border border-white/20"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="w-2 h-2 rounded-full bg-white animate-pulse absolute top-3 right-3"></span>
          <svg 
            className="w-6 h-6 text-white drop-shadow-sm" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "550px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="fixed bottom-28 right-8 w-[380px] bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/10 flex flex-col"
            style={{ 
              maxHeight: "85vh",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 40px 0px rgba(16, 185, 129, 0.1)"
            }}
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex-shrink-0 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-xl flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white/90 tracking-wide">OnCode Assistant</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <p className="text-xs text-white/50 font-light">Development Expert</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isMinimized ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12H6" />
                      )}
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="p-5 space-y-5 overflow-y-auto flex-grow hide-scrollbar">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        msg.type === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 ${
                          msg.type === "user"
                            ? "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-white/90 rounded-2xl rounded-tr-sm backdrop-blur-xl border border-emerald-500/10"
                            : "bg-gradient-to-br from-white/10 to-white/5 text-white/90 rounded-2xl rounded-tl-sm backdrop-blur-xl border border-white/10"
                        }`}
                      >
                        <div 
                          className="text-sm leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: formatMessageText(msg.content) }}
                        />
                        <p className="text-[10px] mt-1.5 text-white/40">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      
                      {/* Contact Button */}
                      {msg.includeContactButton && msg.type === "assistant" && (
                        <button
                          onClick={handleContactButtonClick}
                          className="mt-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2.5 rounded-full text-sm hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-md flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Book a Call
                        </button>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 py-3 px-4 rounded-2xl flex items-center gap-2 backdrop-blur-xl border border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse delay-150"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse delay-300"></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-5 border-t border-white/10 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl flex-shrink-0">
                  <div className="flex items-center gap-3 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask about our services..."
                      className="flex-1 py-3 px-4 rounded-full bg-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 text-sm text-white/90 placeholder-white/30 backdrop-blur-xl border border-white/10"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading}
                      className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white transition-all duration-300 flex items-center justify-center min-w-[44px] min-h-[44px] shadow-md"
                      aria-label="Send message"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal (if needed) */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-xl rounded-3xl p-6 max-w-md w-full border border-white/10 shadow-2xl"
            style={{ 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 40px 0px rgba(16, 185, 129, 0.1)"
            }}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-medium text-white/90">Contact OnCode Team</h2>
              <button 
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-white/60 mb-6">Book a call with our team to discuss your project requirements.</p>
            
            <a 
              href="https://calendly.com/0ncode-info/30min" 
              target="_blank"
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-full flex justify-center items-center hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-md gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Open Calendly
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
} 