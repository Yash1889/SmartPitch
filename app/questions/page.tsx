"use client";
import { useState, useEffect } from "react";
import { apiGet } from "../lib/api";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await apiGet("/api/get-questions");
      
      if (res.status === "success" && Array.isArray(res.data)) {
        setQuestions(res.data);
      } else {
        setError("Unexpected response format");
      }
    } catch (err: any) {
      console.error("API error:", err);
      setError(err.message || "Error fetching questions.");
    } finally {
      setLoading(false);
    }
  };

  const toggleQuestion = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  // Sample answers for demonstration purposes
  const getAnswer = (question: string) => {
    const answers: { [key: string]: string } = {
      "What problem does your product solve?": "Start by defining the specific problem your product addresses. Include statistics or data points that highlight the scope or severity of the problem. Explain who experiences this problem and how it impacts them.",
      "Who are your target customers?": "Clearly define your target market segments. Include demographic information, psychographic details, and behavioral patterns. Quantify the size of these segments and explain why they are your focus.",
      "How is your solution different?": "Articulate your unique value proposition and key differentiators. Compare your solution to existing alternatives, highlighting technological advantages, better user experience, or other competitive edges.",
      "What is your go-to-market strategy?": "Outline your acquisition channels, pricing strategy, and marketing approach. Explain how you plan to reach early customers and scale distribution. Include any partnerships or strategic relationships that will help you enter the market.",
      "What is your current traction?": "Share metrics that demonstrate progress and validation: user/customer numbers, revenue figures, growth rates, pilot results, or key partnerships. Use specific numbers rather than general statements.",
      "Who are your key competitors?": "Identify both direct competitors (similar solutions) and indirect competitors (alternative ways to solve the problem). Explain how you position against them and why customers would choose you instead.",
      "How will you use the funding?": "Break down how you'll allocate the investment across key areas: product development, team expansion, marketing, etc. Connect these investments to specific milestones and explain the expected ROI.",
    };
    
    // Find a matching answer based on the start of the question
    for (const key in answers) {
      if (question.toLowerCase().includes(key.toLowerCase().slice(0, 15))) {
        return answers[key];
      }
    }
    
    return "Focus on being specific, quantifiable, and credible when answering this question. Use data points and concrete examples whenever possible. Tailor your response to highlight your startup's unique strengths and vision.";
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-[#0f1116] to-[#181c20]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-[#62C494]">Clarifying</span> Questions
          </h1>
          <p className="text-lg text-gray-300">
            Prepare for investor meetings with these essential questions and strategic answers
          </p>
        </motion.div>
        
        {loading && (
          <div className="flex justify-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#62C494] border-r-transparent"></div>
          </div>
        )}
        
        {error && (
          <div className="max-w-4xl mx-auto p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center text-white">
            {error}
          </div>
        )}
        
        {!loading && !error && questions.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {questions.map((question, index) => (
              <motion.div 
                key={index}
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <div 
                  className={`bg-[#1f2229] rounded-lg transition-all cursor-pointer overflow-hidden ${
                    expandedQuestion === index ? 'shadow-xl' : 'shadow'
                  }`}
                >
                  <div 
                    className="p-5 flex justify-between items-center"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="text-lg md:text-xl font-medium">{question}</h3>
                    <div className={`text-[#62C494] transform transition-transform duration-300 ${expandedQuestion === index ? 'rotate-180' : 'rotate-0'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {expandedQuestion === index && (
                    <div className="p-5 pt-0 border-t border-[#333] bg-[#181c20]">
                      <div className="prose prose-sm prose-invert max-w-none">
                        <p className="text-gray-300">{getAnswer(question)}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#333] flex justify-between items-center">
                        <span className="text-sm text-gray-400">Pro tip: Customize this answer for your specific startup</span>
                        <button 
                          className="bg-[#62C494]/20 hover:bg-[#62C494]/30 text-[#62C494] px-3 py-1 rounded-md text-sm flex items-center"
                          onClick={() => navigator.clipboard.writeText(getAnswer(question))}
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                          </svg>
                          Copy
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {!loading && !error && questions.length === 0 && (
          <div className="max-w-4xl mx-auto p-8 bg-[#1f2229] rounded-lg text-center">
            <p className="text-xl text-gray-300">No questions available at the moment.</p>
          </div>
        )}
        
        <motion.div 
          className="max-w-4xl mx-auto mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <p className="text-gray-400 mb-6">
            Prepare thoroughly for these questions to make the best impression on potential investors
          </p>
          <Link href="/generate-pitch" className="bg-[#62C494] hover:bg-[#4AD39C] text-[#0f1116] font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all transform hover:scale-105">
            Generate Your Pitch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
