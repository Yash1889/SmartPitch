"use client";
import { useState } from "react";
import { apiPost } from "../lib/api";

export default function GenerateEmailPage() {
  const [investor, setInvestor] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      // For demo: accept investor name as string, backend expects full object
      const res = await apiPost("/api/generate-email", { name: investor });
      setResult(res.data || "No email generated.");
    } catch (err: any) {
      setError(err.message || "Error generating email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">Generate Investor Email</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" placeholder="Investor Name or ID" value={investor} onChange={e => setInvestor(e.target.value)} required />
          <button type="submit" className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] font-bold py-3 rounded-md transition-all mt-2" disabled={loading}>
            {loading ? "Generating..." : "Generate Email"}
          </button>
        </form>
        {result && (
          <div className="mt-8 p-4 bg-[#23272f] border border-[#444] rounded-lg text-[#fafafa]">
            <h2 className="text-xl font-semibold mb-2 text-[#4AD39C]">Generated Email:</h2>
            <pre className="whitespace-pre-wrap break-words text-[#e0e6ed]">{result}</pre>
          </div>
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
