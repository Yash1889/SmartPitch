"use client";
import { useState, useEffect } from "react";
import { apiPost } from "../lib/api";
import { savePitchData, getPitchData } from "../lib/pitchState";

export default function GeneratePitchPage() {
  const [form, setForm] = useState({
    startup_name: "",
    sector: "",
    raise_amount: "",
    location: "",
    country: "",
    city: "",
    product: "",
    traction: "",
    stage: "Seed" // Default value
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Load existing pitch data on page load
  useEffect(() => {
    const existingPitch = getPitchData();
    if (existingPitch) {
      setResult(existingPitch);
    }
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const res = await apiPost("/api/generate-pitch", {
        startup_name: form.startup_name,
        sector: form.sector,
        raise_amount: form.raise_amount,
        location: `${form.city}, ${form.country}`,
        stage: form.stage,
        product: form.product,
        traction: form.traction
      });
      
      console.log("API Response:", res);
      
      if (res.status === "success" && res.data) {
        setResult(res.data);
        // Save to local storage for persistence
        savePitchData(res.data);
      } else {
        setError("Unexpected response format");
      }
    } catch (err: any) {
      console.error("API error:", err);
      setError(err.message || "Error generating pitch.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">AI Pitch Generator</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="startup_name" placeholder="Startup Name" value={form.startup_name} onChange={handleChange} required />
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="sector" placeholder="Industry" value={form.sector} onChange={handleChange} required />
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="product" placeholder="Product Description" value={form.product} onChange={handleChange} required />
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="raise_amount" placeholder="Funding Target ($)" value={form.raise_amount} onChange={handleChange} required type="number" />
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
          <input className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="traction" placeholder="Current Traction" value={form.traction} onChange={handleChange} />
          <select className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" name="stage" value={form.stage} onChange={handleChange}>
            <option value="Pre-Seed">Pre-Seed</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
          </select>
          <button type="submit" className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] font-bold py-3 rounded-md transition-all mt-2" disabled={loading}>
            {loading ? "Generating..." : "Generate Pitch"}
          </button>
        </form>
        {result && (
          <div className="mt-8 p-4 bg-[#23272f] border border-[#444] rounded-lg text-[#fafafa]">
            <h2 className="text-xl font-semibold mb-2 text-[#4AD39C]">Your AI-Generated Pitch:</h2>
            <div className="space-y-4">
              {result.problem && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Problem:</h3>
                  <p className="text-[#e0e6ed]">{result.problem.text}</p>
                </div>
              )}
              {result.solution && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Solution:</h3>
                  <p className="text-[#e0e6ed]">{result.solution.text}</p>
                </div>
              )}
              {result.market && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Market:</h3>
                  <p className="text-[#e0e6ed]">{result.market.text}</p>
                </div>
              )}
              {result.business_model && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Business Model:</h3>
                  <p className="text-[#e0e6ed]">{result.business_model.text}</p>
                </div>
              )}
              {result.competition && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Competition:</h3>
                  <p className="text-[#e0e6ed]">{result.competition.text}</p>
                </div>
              )}
              {result.traction && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Traction:</h3>
                  <p className="text-[#e0e6ed]">{result.traction.text}</p>
                </div>
              )}
              {result.ask && (
                <div>
                  <h3 className="text-[#4AD39C] font-semibold">Ask:</h3>
                  <p className="text-[#e0e6ed]">{result.ask.text}</p>
                </div>
              )}
            </div>
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
