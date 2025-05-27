"use client";
import { useState, useEffect } from "react";
import { apiGet } from "../lib/api";

export default function InvestorMatchPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await apiGet("/api/match-investors");
      console.log("API Response:", res);
      
      if (res.status === "success" && Array.isArray(res.data)) {
        setMatches(res.data);
        // Save to localStorage for future use
        localStorage.setItem("investorMatches", JSON.stringify(res.data));
      } else {
        setError("Unexpected response format");
      }
    } catch (err: any) {
      console.error("API error:", err);
      setError(err.message || "Error matching investors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">Investor Matches</h1>
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#62C494] border-r-transparent"></div>
            <p className="mt-4 text-[#fafafa]">Finding your ideal investors...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-6 p-3 bg-[#ffeded] border border-[#ffbdbd] rounded-md text-[#c00] text-center">
            {error}
          </div>
        )}
        
        {!loading && !error && matches.length > 0 && (
          <div className="space-y-6">
            {matches.map((investor, index) => (
              <div key={index} className="bg-[#23272f] border border-[#444] rounded-lg p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-[#fafafa]">{investor.name}</h2>
                    <p className="text-[#999]">{investor.firm}</p>
                  </div>
                  <div className="bg-[#181c20] px-3 py-1 rounded-full text-[#62C494] font-semibold">
                    {investor.match_score}% Match
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-[#999]">Investment Range</p>
                    <p className="text-[#e0e6ed]">{investor.investment_range}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#999]">Location</p>
                    <p className="text-[#e0e6ed]">{investor.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#999]">Sectors</p>
                    <p className="text-[#e0e6ed]">{Array.isArray(investor.sectors) ? investor.sectors.join(", ") : investor.sectors}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#999]">Portfolio Companies</p>
                    <p className="text-[#e0e6ed]">{Array.isArray(investor.portfolio) ? investor.portfolio.join(", ") : investor.portfolio}</p>
                  </div>
                </div>
                
                <div className="mt-5 flex justify-end">
                  <a 
                    href={`/email?investor=${encodeURIComponent(JSON.stringify(investor))}`}
                    className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] px-4 py-2 rounded-md font-medium text-sm transition-all"
                  >
                    Generate Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && !error && matches.length === 0 && (
          <div className="text-center py-8 text-[#fafafa]">
            <p>No investor matches found. Generate a pitch first to get investor matches.</p>
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
