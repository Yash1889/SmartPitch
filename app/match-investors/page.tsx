"use client";
import { useState } from "react";
import { apiGet } from "../lib/api";

export default function MatchInvestorsPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiGet("/api/match-investors");
      setMatches(res.data || []);
    } catch (err: any) {
      setError(err.message || "Error fetching matches.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">All Investor Matches</h1>
        <button onClick={handleFetch} className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] font-bold py-3 rounded-md transition-all mb-6" disabled={loading}>
          {loading ? "Fetching..." : "Get Matches"}
        </button>
        {matches.length > 0 && (
          <ul className="space-y-4">
            {matches.map((m, i) => (
              <li key={i} className="bg-[#23272f] border border-[#444] rounded-lg p-4 text-[#fafafa]">
                <div className="font-bold text-[#4AD39C]">{m.name}</div>
                <div className="text-[#e0e6ed]">Industry: {m.industry} | Stage: {m.stage} | Location: {m.location}</div>
                <div className="text-[#b6e3c6] mt-2">Reason: {m.reason}</div>
              </li>
            ))}
          </ul>
        )}
        {error && (
          <div className="mt-6 p-3 bg-[#ffeded] border border-[#ffbdbd] rounded-md text-[#c00] text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
