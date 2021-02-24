import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';



describe('Pruebas para <GifExpertApp />', () => {
    
    test('Debe renderizar <GifExpertApp />', () => {
    
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar una lista de categorias', () => {
        
        const categories = ['Mia', 'Nina'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        


    })
    
    
})



