import React, { useState } from 'react';
import '../App.css'
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
        <div className='combo-generator-container'>
            <div className='combo-selector-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            id="offensive"
                            name="offensive"
                            type="radio"
                            value="offensive"
                            checked={selectedOption === 'offensive'}
                            onChange={handleOptionChange}
                        />
                        <label for="offensive" className="offensive-label">
                            Offensive
                        </label>
                    </div>
                    <div>
                        <input
                            id="defensive"
                            name="defensive"
                            type="radio"
                            value="defensive"
                            checked={selectedOption === 'defensive'}
                            onChange={handleOptionChange}
                        />
                        <label for="defensive" className="defensive-label">
                            Defensive
                        </label>
                    </div>
                    <div>
                        <input
                            id="balanced"
                            name="balanced"
                            type="radio"
                            value="balanced"
                            checked={selectedOption === 'balanced'}
                            onChange={handleOptionChange}
                        />
                        <label for="balanced" className="balanced-label">
                            Balanced
                        </label>
                    </div>
                    <div>
                        <input
                            id="reactive"
                            name="reactive"
                            type="radio"
                            value="reactive"
                            checked={selectedOption === 'reactive'}
                            onChange={handleOptionChange}
                        />
                        <label for="reactive" className="reactive-label">
                            Reactive
                        </label>
                    </div>
                    <div>
                        <button type="submit">GO!</button>
                    </div>
                </form>
            </div>
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