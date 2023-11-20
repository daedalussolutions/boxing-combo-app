import React, { useState } from 'react';
import styled from 'styled-components';
import { getCombo } from '../functions/comboFunctions.js';

const ComboTypeSelector = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [generatedCombo, setGeneratedCombo] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const combo = getCombo(selectedOption);
        setGeneratedCombo(combo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="offensive"
                            checked={selectedOption === 'offensive'}
                            onChange={handleOptionChange}
                        />
                        Offensive
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="defensive"
                            checked={selectedOption === 'defensive'}
                            onChange={handleOptionChange}
                        />
                        Defensive
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="balanced"
                            checked={selectedOption === 'balanced'}
                            onChange={handleOptionChange}
                        />
                        Balanced
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="reactive"
                            checked={selectedOption === 'reactive'}
                            onChange={handleOptionChange}
                        />
                        Reactive
                    </label>
                </div>
                <div>
                    <button type="submit">Generate Combo</button>
                </div>
            </form>
            <div className='generated-combo-container'>
                {generatedCombo && (
                    <div>
                        <h2>Generated Combo:</h2>
                        <ul>
                            {generatedCombo.map((punch, index) => (
                                <li key={index}>{punch}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

    );
};
export default ComboTypeSelector;