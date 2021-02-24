import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import {AddCategory} from '../../Components/AddCategory';



describe('Pruebas para <AddCategory />', () => {
    
    const SetCategories = jest.fn(); //Solo es para poder enviar un objeto que es una funcion y cumplir el Proptype.

    let wrapper = shallow(<AddCategory SetCategories={SetCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory SetCategories={SetCategories} />);

    });
    
    test('Debe renderizar <AddCategory', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', {target : {value}});

        const testh3 = wrapper.find('h3');

        expect( testh3.text().trim()).toBe(`Vas a enviar ${value}`);
    });

    test('No debe postear la info con submit', () => {
         
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});

        expect(SetCategories).not.toHaveBeenCalled();
        

    })

    test('debe de llamar SetCategories y limpiar la caja de texto', () => {
        
        const value = 'Something' 
        
        wrapper.find('input').simulate('change', {target : {value} });

        wrapper.find('form').simulate('submit', {preventDefault: () => {}});

        expect(SetCategories).toHaveBeenCalled();

        expect(wrapper.find('input').text()).toBe('');


    })
    
    
    

    
})
