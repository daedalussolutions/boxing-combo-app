import React, { useState} from 'react';
import styled from 'styled-components';

const ComboTypeSelector = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // You can perform any additional logic with the selected option here
      console.log('Selected option:', selectedOption);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="offensive"
              checked={selectedOption === 'option1'}
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
              checked={selectedOption === 'option2'}
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
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
            Balanced
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="defensive"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
            Reactive
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };


export default ComboTypeSelector;