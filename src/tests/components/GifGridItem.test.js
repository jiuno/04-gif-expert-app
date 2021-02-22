// import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../Components/GifGridItem'

describe('Pruebas para GifGridItem', () => {

    const title= 'Un titulo';

    const url='https://www.paginaweb.com';

    const wrapper = shallow(<GifGridItem title={title} url={url} /> );

    
    test('debe renderizar el componente', () => {

        expect( wrapper).toMatchSnapshot();
        
    });
    test('debe mostrar un parrafo con `title`.', () => {
        const h3 = wrapper.find('h3');      
          
        expect(h3.text().trim()).toBe( title );
    
    });

    test('Debe tener la img src y el alt al `url` suministrado en los props.', () => {
        
        const img = wrapper.find('img');

        expect( img.props().src ).toBe(url);
        expect( img.props().alt).toBe(title);
    })

    test('El div debe tener la clase `card animate__animated animate__bounceIn`', () => {
        
        const div = wrapper.find('div');

        expect(div.hasClass('card animate__animated animate__bounceIn')).toBe(true);
    })
    
    
        

    
})
