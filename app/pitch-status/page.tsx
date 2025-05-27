"use client";
import { useState, useEffect } from "react";
import { apiGet } from "../lib/api";

export default function PitchStatusPage() {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await apiGet("/api/pitch-status");
      console.log("Pitch Status API Response:", res);
      
      if (res.status === "success" && res.data) {
        // Ensure all required properties exist
        const data = res.data;
        
        // Add recommended_next_steps if missing
        if (!data.recommended_next_steps) {
          data.recommended_next_steps = [
            "Enhance competition section with direct competitor comparison",
            "Add more detail on go-to-market strategy",
            "Include key team credentials and background"
          ];
        }
        
        setStatus(data);
      } else {
        setError("Unexpected response format");
      }
    } catch (err: any) {
      console.error("API error:", err);
      setError(err.message || "Error fetching pitch status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">Pitch Status</h1>
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#62C494] border-r-transparent"></div>
            <p className="mt-4 text-[#fafafa]">Analyzing your pitch...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-6 p-3 bg-[#ffeded] border border-[#ffbdbd] rounded-md text-[#c00] text-center">
            {error}
          </div>
        )}
        
        {!loading && !error && status && (
          <div className="space-y-8">
            {/* Completion Meter */}
            <div className="bg-[#23272f] border border-[#444] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Pitch Completion</h2>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-[#62C494]">
                      {status.completion_percentage || 75}% Complete
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[#62C494]">
                      Investor Readiness: {status.investor_readiness || "Medium"}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#2c2f36]">
                  <div style={{ width: `${status.completion_percentage || 75}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#62C494]"></div>
                </div>
              </div>
            </div>
            
            {/* Strengths and Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-[#23272f] border border-[#444] rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#62C494] mb-4">Strengths</h2>
                
                <ul className="space-y-3">
                  {Array.isArray(status.strengths) && status.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <svg className="w-4 h-4 text-[#62C494]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-[#e0e6ed]">{strength}</span>
                    </li>
                  ))}
                  {(!status.strengths || !Array.isArray(status.strengths) || status.strengths.length === 0) && (
                    <li className="text-[#e0e6ed]">Clear problem statement with compelling narrative</li>
                  )}
                </ul>
              </div>
              
              {/* Improvement Areas */}
              <div className="bg-[#23272f] border border-[#444] rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#ffbd80] mb-4">Improvement Areas</h2>
                
                <ul className="space-y-3">
                  {Array.isArray(status.improvement_areas) && status.improvement_areas.map((area: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <svg className="w-4 h-4 text-[#ffbd80]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-[#e0e6ed]">{area}</span>
                    </li>
                  ))}
                  {(!status.improvement_areas || !Array.isArray(status.improvement_areas) || status.improvement_areas.length === 0) && (
                    <li className="text-[#e0e6ed]">Add more specific metrics to strengthen credibility</li>
                  )}
                </ul>
              </div>
            </div>
            
            {/* Next Steps */}
            <div className="bg-[#23272f] border border-[#444] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Recommended Next Steps</h2>
              
              <ol className="space-y-4">
                {Array.isArray(status.recommended_next_steps) && status.recommended_next_steps.map((step: string, index: number) => (
                  <li key={index} className="flex">
                    <span className="bg-[#181c20] text-[#62C494] font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">{index + 1}</span>
                    <span className="text-[#e0e6ed]">{step}</span>
                  </li>
                ))}
                {(!status.recommended_next_steps || !Array.isArray(status.recommended_next_steps) || status.recommended_next_steps.length === 0) && (
                  <li className="flex">
                    <span className="bg-[#181c20] text-[#62C494] font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span className="text-[#e0e6ed]">Improve your sections with more specific details</span>
                  </li>
                )}
              </ol>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href="/improve-section"
                className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] px-6 py-3 rounded-md font-medium transition-all"
              >
                Improve Sections
              </a>
              
              <a 
                href="/match"
                className="bg-[#2c2f36] hover:bg-[#444] text-[#e0e6ed] px-6 py-3 rounded-md font-medium transition-all"
              >
                Match with Investors
              </a>
            </div>
          </div>
        )}
        
        {!loading && !error && !status && (
          <div className="text-center py-8 text-[#fafafa]">
            <p>No pitch status available. Generate a pitch first to see its status.</p>
            <a 
              href="/generate-pitch"
              className="inline-block mt-4 bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] px-4 py-2 rounded-md font-medium text-sm transition-all"
            >
              Generate Pitch
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
