import React, { useState } from 'react';
import { generatePoem } from '../services/aiService';

const PoemGenerator: React.FC = () => {
    const [input, setInput] = useState('');
    const [poem, setPoem] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleGeneratePoem = async () => {
        const generatedPoem = await generatePoem(input);
        setPoem(generatedPoem);
    };

    return (
        <div>
            <h1>Poem Generator</h1>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a theme or topic"
            />
            <button onClick={handleGeneratePoem}>Generate Poem</button>
            {poem && (
                <div>
                    <h2>Your Poem:</h2>
                    <p>{poem}</p>
                </div>
            )}
        </div>
    );
};

export default PoemGenerator;