"use client";
import { useState, useEffect } from "react";
import { apiPost } from "../lib/api";

export default function EmailPage() {
  const [investor, setInvestor] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Get investor from URL query params
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const investorParam = params.get("investor");
      
      if (investorParam) {
        try {
          const investorData = JSON.parse(investorParam);
          setInvestor(investorData);
          generateEmail(investorData);
        } catch (e) {
          console.error("Error parsing investor data:", e);
          setError("Invalid investor data. Please go back and try again.");
        }
      } else {
        setError("No investor data provided. Please go back and select an investor.");
      }
    }
  }, []);

  const generateEmail = async (investorData: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await apiPost("/api/generate-email", investorData);
      
      if (res.status === "success" && res.data) {
        setEmail(res.data);
      } else {
        setError("Unexpected response format");
      }
    } catch (err: any) {
      console.error("API error:", err);
      setError(err.message || "Error generating email.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">Investor Email</h1>
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#62C494] border-r-transparent"></div>
            <p className="mt-4 text-[#fafafa]">Generating email...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-6 p-3 bg-[#ffeded] border border-[#ffbdbd] rounded-md text-[#c00] text-center">
            {error}
          </div>
        )}
        
        {!loading && !error && investor && email && (
          <div className="space-y-6">
            <div className="bg-[#23272f] border border-[#444] rounded-lg p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-[#fafafa]">Email to: {investor.name}</h2>
                  <p className="text-[#999]">{investor.firm}</p>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className={`px-3 py-1 rounded-md text-sm ${
                    copied ? 'bg-[#4AD39C] text-[#181c20]' : 'bg-[#2c2f36] text-[#e0e6ed] hover:bg-[#444]'
                  } transition-all`}
                >
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
              
              <div className="bg-[#1e2228] p-5 rounded-md">
                <pre className="whitespace-pre-wrap text-[#e0e6ed] font-mono text-sm">
                  {email}
                </pre>
              </div>
            </div>
            
            <div className="flex justify-between">
              <a 
                href="/match"
                className="bg-[#2c2f36] hover:bg-[#444] text-[#e0e6ed] px-4 py-2 rounded-md font-medium text-sm transition-all"
              >
                ← Back to Investors
              </a>
              
              <button 
                onClick={copyToClipboard}
                className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] px-4 py-2 rounded-md font-medium text-sm transition-all"
              >
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        )}
        
        {!loading && !error && (!investor || !email) && (
          <div className="text-center py-8 text-[#fafafa]">
            <p>No investor selected. Please go back and select an investor.</p>
            <a 
              href="/match"
              className="inline-block mt-4 bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] px-4 py-2 rounded-md font-medium text-sm transition-all"
            >
              Back to Investors
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
