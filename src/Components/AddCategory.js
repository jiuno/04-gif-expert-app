import React, { useState } from 'react';
import PropTypes from 'prop-types';


export  const AddCategory = ({SetCategories}) => {
    
        const  [InputValue, setInputValue] = useState('');

        const handleInputChange = (e) => {
            
            setInputValue(e.target.value)

            console.log('HandleInputChange llamado');

        }
        
        const handleSubmit = (e) => {
            e.preventDefault();
            if (InputValue.trim().length >= 2) {
                SetCategories((cats) => [InputValue, ...cats]); //Esto es categories ahora
                setInputValue(''); 
                console.log('HandleSubmit llamado')
                
            }


            // console.log('Submit hecho');

        }
        return (
            <form onSubmit= {handleSubmit}>
                <h3>Vas a enviar { InputValue }</h3> {/*Esto es temporal*/}
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

