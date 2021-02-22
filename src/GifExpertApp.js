import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


const GifExpertApp = () =>  {

    const [Categories, setCategories] = useState(['']);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory SetCategories={setCategories}/>
            <hr />

            <button onClick = { () => setCategories( cats => ( ['Pokemon', ...cats ]))}>Agregar Pokemon</button>

            <ol>
                {Categories.map( (category) => 
                <GifGrid 
                key={category}
                category={ category } />)}
            </ol>
        
        </>      
            )
    
};

export default GifExpertApp;