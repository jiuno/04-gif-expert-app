import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas para el componente <GifGrid />', () => {
    
    test('debe matchear con el snapshot', () => {

        const category = 'un string'; 
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot(); 

    })

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const category = 'un string'; 

        const gifs = [{
            id: 'Hola',
            url: 'https://localhost/sale/pimba.jpg',
            title: 'Tuqui'
        },{
            id:'Que tal',
            url: 'https://localhost/sale/pimba.jpg',
            title: 'Tuqui'    
        }]


        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        // expect(wrapper).toMatchSnapshot();
        
        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


       
        

    })
    
    

})
