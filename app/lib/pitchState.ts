// Simple state manager for pitch data
export type PitchData = {
  [key: string]: {
    text: string;
    confidence?: number;
    original?: string;
  };
};

// Get the current pitch data from localStorage
export const getPitchData = (): PitchData | null => {
  if (typeof window === 'undefined') return null;
  
  const storedData = localStorage.getItem('pitchData');
  if (!storedData) return null;
  
  try {
    return JSON.parse(storedData);
  } catch (e) {
    console.error('Error parsing stored pitch data', e);
    return null;
  }
};

// Save pitch data to localStorage
export const savePitchData = (data: PitchData): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pitchData', JSON.stringify(data));
};

// Update a specific section of the pitch
export const updatePitchSection = (sectionName: string, data: any): PitchData => {
  const currentData = getPitchData() || {};
  const updatedData = {
    ...currentData,
    [sectionName]: data
  };
  savePitchData(updatedData);
  return updatedData;
};
