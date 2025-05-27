'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PitchForm() {
  const [form, setForm] = useState({
    name: '',
    valuation: '',
    industry: '',
    country: '',
    city: '',
    has_investor: '',
    stage: '', // still available for UI but not sent to backend
    age: '', // still available for UI but not sent to backend
    raise: '', // still available for UI but not sent to backend
    description: '' // still available for UI but not sent to backend
  });

  const router = useRouter();

  const inputStyle: React.CSSProperties = {
    background: '#23272f',
    color: '#fafafa',
    border: '1px solid #444',
    borderRadius: '6px',
    padding: '0.75rem 1rem',
    marginBottom: '1.25rem',
    width: '100%',
    fontSize: '1rem',
    outline: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  };

  const labelStyle: React.CSSProperties = {
    color: '#e0e6ed',
    fontWeight: 600,
    marginBottom: '0.5rem',
    display: 'block',
    fontSize: '1.1rem'
  };

  const formBoxStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #23272f 80%, #2c2f36 100%)',
    padding: '2.5rem 2rem',
    borderRadius: '18px',
    boxShadow: '0 0 32px 0 #181c20',
    maxWidth: '520px',
    margin: '3rem auto',
    color: '#fafafa',
    border: '1px solid #333',
    fontFamily: 'Space Grotesk, sans-serif',
  };

  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #62C494 0%, #4AD39C 100%)',
    color: '#181c20',
    padding: '0.85rem 2.2rem',
    fontWeight: 700,
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    boxShadow: '0 2px 12px #4AD39C44',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background 0.2s, color 0.2s',
  };

  // ...rest of the component remains the same, but apply inputStyle, labelStyle, formBoxStyle, buttonStyle to the JSX elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, valuation, industry, country, city } = form;
    if (!name || !valuation || !industry || !country || !city) {
      alert("Please fill in all required fields.");
      return;
    }

    localStorage.setItem('startupForm', JSON.stringify(form));

    const res = await fetch('http://localhost:8000/api/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      name: form.name,
      valuation: Number(form.valuation),
      industry: form.industry,
      city: form.city,
      country: form.country,
      has_investor: form.has_investor || ''
    }),
    });

    const data = await res.json();
    localStorage.setItem('investorMatches', JSON.stringify(data.matches));
    router.push('/match');
  };

  const countryCities: Record<string, string[]> = {
    "United States": ["San Francisco", "New York", "Austin", "Seattle", "Los Angeles"],
    "China": ["Beijing", "Shanghai", "Shenzhen", "Hangzhou"],
    "India": ["Bangalore", "Mumbai", "Delhi", "Hyderabad"],
    "United Kingdom": ["London", "Manchester", "Bristol"],
    "Germany": ["Berlin", "Munich", "Hamburg"],
    "Canada": ["Toronto", "Vancouver", "Montreal"],
    "France": ["Paris", "Lyon", "Marseille"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"],
    "Singapore": ["Singapore"],
    "Brazil": ["Sao Paulo", "Rio de Janeiro"],
    "Israel": ["Tel Aviv", "Jerusalem"],
    "Other": ["Remote"]
  };

  return (
    <div style={formBoxStyle}>
      <h2 style={{ color: '#62C494', fontWeight: 800, fontSize: '2rem', marginBottom: '2rem', letterSpacing: '0.02em', textAlign: 'center' }}>
        🚀 PitchSense — Startup Pitch Form
      </h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-4"
        autoComplete="off"
      >
        <label htmlFor="name" style={labelStyle}>Startup Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
          placeholder="Enter your startup name"
        />

        <label htmlFor="industry" style={labelStyle}>Industry</label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={form.industry}
          onChange={handleChange}
          required
          style={inputStyle}
          placeholder="e.g. AI, Fintech, Healthtech"
        />

        <label htmlFor="valuation" style={labelStyle}>Valuation ($)</label>
        <input
          type="number"
          id="valuation"
          name="valuation"
          value={form.valuation}
          onChange={handleChange}
          required
          style={inputStyle}
          placeholder="e.g. 120 for $120M"
        />

        <label htmlFor="sector" style={labelStyle}>Sector</label>
        <select
          id="industry"
          name="industry"
          value={form.industry}
          onChange={handleChange}
          required
          style={{ ...inputStyle, color: form.industry ? '#fafafa' : '#888' }}
        >
          <option value="">🎲 Select Industry</option>
          <option value="Artificial intelligence">Artificial intelligence</option>
          <option value="Fintech">Fintech</option>
          <option value="Healthtech">Healthtech</option>
          <option value="Biotech">Biotech</option>
          <option value="Edtech">Edtech</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Supply chain & logistics">Supply chain & logistics</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="country" style={labelStyle}>Country</label>
        <select
          id="country"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
          style={{ ...inputStyle, color: form.country ? '#fafafa' : '#888' }}
        >
          <option value="">🌍 Select Country</option>
          {Object.keys(countryCities).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <label htmlFor="city" style={labelStyle}>City</label>
        <select
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          disabled={!form.country}
          style={{ ...inputStyle, color: form.city ? '#fafafa' : '#888' }}
        >
          <option value="">📍 Select City</option>
          {(countryCities[form.country] || []).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
          {form.country && <option value="Other">Other</option>}
        </select>

        <label htmlFor="stage" style={labelStyle}>Stage</label>
        <select
          id="stage"
          name="stage"
          value={form.stage}
          onChange={handleChange}
          required
          style={{ ...inputStyle, color: form.stage ? '#fafafa' : '#888' }}
        >
          <option value="">🚀 Select Stage</option>
          <option value="Pre-Seed">Pre-Seed</option>
          <option value="Seed">Seed</option>
          <option value="Angel">Angel</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
          <option value="Series C">Series C</option>
          <option value="Series D">Series D</option>
          <option value="Pre-IPO">Pre-IPO</option>
          <option value="IPO">IPO</option>
        </select>

        <label htmlFor="age" style={labelStyle}>Startup Age (years)</label>
        <select
          id="age"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
          style={{ ...inputStyle, color: form.age ? '#fafafa' : '#888' }}
        >
          <option value="">⏳ Select Age</option>
          <option value="0">Less than 1 year</option>
          <option value="1">1–3 years</option>
          <option value="3">3–6 years</option>
          <option value="6">6–10 years</option>
          <option value="10">10+ years</option>
        </select>

        <label htmlFor="raise" style={labelStyle}>Amount to Raise ($)</label>
        <input
          type="number"
          id="raise"
          name="raise"
          value={form.raise}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g. 500000"
        />

        <label htmlFor="description" style={labelStyle}>Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
          placeholder="Describe your startup, product, or vision..."
        />

        <button type="submit" style={buttonStyle}>Match Me With Investors</button>
      </form>
    </div>
  );
}
