import { shallow } from "enzyme";
import {AddCategory} from '../../Components/AddCategory'
import React from 'react';



describe('Pruebas para <AddCategory />', () => {
    
    const SetCategories = () => {} //Solo es para poder enviar un objeto que es una funcion y cumplir el Proptype.

    const wrapper = shallow(<AddCategory SetCategories={SetCategories} />)

    test('Debe renderizar <AddCategory', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', {target : {value}});

        const testh3 = wrapper.find('h3');

        expect( testh3.text().trim()).toBe(`Vas a enviar ${value}`);
    })
    
    
})
