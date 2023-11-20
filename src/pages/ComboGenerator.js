import React from 'react';
import ComboTypeSelector from '../components/ComboTypeSelector';


const ComboGenerator = () =>{
    return (
        <div className='combo-generator-container'>
            <h1>Boxing Combo Generator</h1>
            <div className='combo-type-selector-container'>
                <ComboTypeSelector />
            </div>



        </div>
    )
}
export default ComboGenerator;