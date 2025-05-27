/**
 * API Helper functions for making requests to the backend
 */

// Base URL for API requests
const API_BASE_URL = 'http://localhost:8000';

/**
 * Make a GET request to the API
 * @param endpoint - The API endpoint to call
 * @param params - Optional query parameters
 * @returns The API response
 */
export const apiGet = async (endpoint: string, params?: Record<string, any>) => {
  try {
    // Construct URL with query parameters if provided
    let url = `${API_BASE_URL}${endpoint}`;
    if (params) {
      const queryParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        queryParams.append(key, params[key]);
      });
      url += `?${queryParams.toString()}`;
    }
    
    // Make the request
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Parse the response
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API GET Error:', error);
    throw error;
  }
};

/**
 * Make a POST request to the API
 * @param endpoint - The API endpoint to call
 * @param data - The data to send in the request body
 * @returns The API response
 */
export const apiPost = async (endpoint: string, data: Record<string, any>) => {
  try {
    // Handle special case for /api/match which should be redirected to match-investors
    if (endpoint === '/api/match') {
      endpoint = '/api/match-investors';
    }

    // Make the request
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    // Parse the response
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API POST Error:', error);
    throw error;
  }
};
