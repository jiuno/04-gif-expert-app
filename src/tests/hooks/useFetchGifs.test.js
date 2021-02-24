import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas para useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        const category = 'categoria';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) )
        const { data, loading } = result.current;
        await waitForNextUpdate(); 

        // console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);


    })


    test('debe de retornar un arreglo de imagenes y loading en false', async() => {
        
        const category = 'categoria';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) )
        await waitForNextUpdate();
        const { data, loading } = result.current; 

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
    
    
})
