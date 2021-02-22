import React, { useState } from 'react';
import PropTypes from 'prop-types';


export  const AddCategory = ({SetCategories}) => {
    
        const  [InputValue, setInputValue] = useState('');

        const handleInputChange = (e) => {
            
            setInputValue(e.target.value)
        }
        
        const handleSubmit = (e) => {
            e.preventDefault();
            if (InputValue.trim().length >= 2) {
                SetCategories((cats) => [InputValue, ...cats]); //Esto es categories ahora
                setInputValue(''); 
                
            }


            // console.log('Submit hecho');

        }
        return (
            <form onSubmit= {handleSubmit}>
                <input
                type="text" 
                value={InputValue}
                onChange={handleInputChange}
                
                />
            </form>
        )
    }

AddCategory.propTypes = {
    SetCategories: PropTypes.func.isRequired
}

