"use client";
import { useState, useEffect } from "react";
import { apiPost } from "../lib/api";
import { getPitchData, updatePitchSection } from "../lib/pitchState";

export default function ImproveSectionPage() {
  const [section, setSection] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [improvedSection, setImprovedSection] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [originalSection, setOriginalSection] = useState("");
  const [improvedText, setImprovedText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [availableSections, setAvailableSections] = useState<string[]>([]);

  // Load existing pitch data on page load
  useEffect(() => {
    const existingPitch = getPitchData();
    if (existingPitch) {
      setAvailableSections(Object.keys(existingPitch).map(key => 
        key.replace(/_/g, ' ')
      ));
      
      // If there's a section in the URL, load it
      const urlParams = new URLSearchParams(window.location.search);
      const sectionParam = urlParams.get('section');
      if (sectionParam && existingPitch[sectionParam]) {
        setSection(sectionParam);
        setOriginalText(existingPitch[sectionParam].text || '');
      }
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setImprovedSection(null);
    setOriginalSection("");
    setImprovedText("");
    setOriginalText("");
    
    try {
      console.log("Submitting:", { section_name: section, user_input: input });
      const res = await apiPost("/api/improve-section", { section_name: section, user_input: input });
      
      console.log("API Response:", res);
      
      if (res.status === "success" && res.data) {
        setResult(res.data);
        
        // Extract the improved section from the complete pitch data
        const sectionKey = section.toLowerCase().replace(/ /g, '_');
        let foundSection = false;
        
        // Try exact match first
        if (res.data[sectionKey]) {
          const sectionData = res.data[sectionKey];
          setImprovedSection({
            key: sectionKey,
            data: sectionData
          });
          setOriginalSection(sectionKey.replace(/_/g, ' '));
          if (sectionData.text) {
            setImprovedText(sectionData.text);
            
            // Update the pitch data in localStorage
            updatePitchSection(sectionKey, sectionData);
          }
          if (sectionData.original) setOriginalText(sectionData.original);
          foundSection = true;
        } 
        
        // Try partial match if exact match failed
        if (!foundSection) {
          const keys = Object.keys(res.data);
          for (const key of keys) {
            if (key.toLowerCase().includes(sectionKey) || sectionKey.includes(key.toLowerCase())) {
              const sectionData = res.data[key];
              setImprovedSection({
                key: key,
                data: sectionData
              });
              setOriginalSection(key.replace(/_/g, ' '));
              if (sectionData.text) {
                setImprovedText(sectionData.text);
                
                // Update the pitch data in localStorage
                updatePitchSection(key, sectionData);
              }
              if (sectionData.original) setOriginalText(sectionData.original);
              foundSection = true;
              break;
            }
          }
        }
        
        // If still no match found, use first section with text/original properties
        if (!foundSection) {
          const keys = Object.keys(res.data);
          for (const key of keys) {
            const sectionData = res.data[key];
            if (sectionData && typeof sectionData === 'object' && (sectionData.text || sectionData.original)) {
              setImprovedSection({
                key: key,
                data: sectionData
              });
              setOriginalSection(key.replace(/_/g, ' '));
              if (sectionData.text) {
                setImprovedText(sectionData.text);
                
                // Update the pitch data in localStorage
                updatePitchSection(key, sectionData);
              }
              if (sectionData.original) setOriginalText(sectionData.original);
              foundSection = true;
              break;
            }
          }
        }
        
        if (!foundSection) {
          setError("Could not find any improved section in the response");
        }
      } else {
        setError("Unexpected response format");
      }
    } catch (err: any) {
      console.error("API error:", err);
      setError(err.message || "Error improving section.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#23272f] to-[#2c2f36] py-12 px-4">
      <div className="bg-[#181c20] p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#62C494] mb-6 text-center">Improve Pitch Section</h1>
        
        {availableSections.length > 0 && (
          <div className="mb-4 p-3 bg-[#23272f] border border-[#444] rounded-lg">
            <h3 className="text-sm font-semibold text-[#4AD39C] mb-1">Available Sections:</h3>
            <div className="flex flex-wrap gap-2">
              {availableSections.map(secName => (
                <button 
                  key={secName}
                  onClick={() => setSection(secName)}
                  className={`text-xs px-3 py-1 rounded ${
                    section === secName 
                      ? 'bg-[#62C494] text-[#181c20]' 
                      : 'bg-[#2c2f36] text-[#e0e6ed]'
                  }`}
                >
                  {secName}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input 
            className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3" 
            placeholder="Section Name (e.g. problem, solution, market)" 
            value={section} 
            onChange={e => setSection(e.target.value)} 
            required 
          />
          <textarea 
            className="bg-[#23272f] text-[#fafafa] border border-[#444] rounded-md px-4 py-3 min-h-[120px]" 
            placeholder="Your input or current section text" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            required 
          />
          <button 
            type="submit" 
            className="bg-[#62C494] hover:bg-[#4AD39C] text-[#181c20] font-bold py-3 rounded-md transition-all mt-2" 
            disabled={loading}
          >
            {loading ? "Improving..." : "Improve Section"}
          </button>
        </form>
        
        {improvedText && (
          <div className="mt-8 p-4 bg-[#23272f] border border-[#444] rounded-lg text-[#fafafa]">
            <h2 className="text-xl font-semibold mb-2 text-[#4AD39C]">Improved {originalSection || section}:</h2>
            <div className="text-[#e0e6ed]">
              <p className="whitespace-pre-wrap">{improvedText}</p>
              
              {originalText && (
                <div className="mt-4 pt-4 border-t border-[#444]">
                  <h3 className="text-sm font-semibold text-[#999] mb-2">Original:</h3>
                  <p className="text-[#999] text-sm">{originalText}</p>
                </div>
              )}
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#444] flex justify-between">
              <a 
                href="/generate-pitch" 
                className="text-[#62C494] hover:text-[#4AD39C] text-sm"
              >
                ← Back to Pitch
              </a>
              
              <button 
                onClick={() => {
                  // Copy to clipboard
                  navigator.clipboard.writeText(improvedText);
                  alert("Copied to clipboard!");
                }}
                className="text-[#62C494] hover:text-[#4AD39C] text-sm"
              >
                Copy Text
              </button>
            </div>
          </div>
        )}
        
        {result && !improvedText && (
          <div className="mt-8 p-4 bg-[#23272f] border border-[#444] rounded-lg text-[#fafafa]">
            <h2 className="text-xl font-semibold mb-2 text-[#4AD39C]">Result:</h2>
            <pre className="whitespace-pre-wrap break-words text-[#e0e6ed] text-sm overflow-auto max-h-96">
              {JSON.stringify(result, null, 2)}
            </pre>
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
