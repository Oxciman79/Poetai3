import React, { useState } from 'react';
import { fetchAIResponse } from '../services/aiService';

const AiAssistant: React.FC = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const aiResponse = await fetchAIResponse(query);
        setResponse(aiResponse);
    };

    return (
        <div>
            <h2>AI Assistant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                />
                <button type="submit">Ask</button>
            </form>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default AiAssistant;