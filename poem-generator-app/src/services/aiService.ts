import axios from 'axios';

const AI_API_URL = 'https://api.example.com/ai'; // Replace with actual AI API URL

export const generatePoem = async (theme: string): Promise<string> => {
    try {
        const response = await axios.post(`${AI_API_URL}/generate-poem`, { theme });
        return response.data.poem;
    } catch (error) {
        console.error('Error generating poem:', error);
        throw new Error('Could not generate poem. Please try again later.');
    }
};

export const fetchAIResponse = async (query: string): Promise<string> => {
    try {
        const response = await axios.post(`${AI_API_URL}/query`, { query });
        return response.data.response;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        throw new Error('Could not fetch AI response. Please try again later.');
    }
};