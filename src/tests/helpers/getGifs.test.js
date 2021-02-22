// import React from 'react';
// import {shallow} from 'enzyme';
import {getGifs} from '../../helpers/getGifs'

describe('Pruebas para getGifs Fetch', () => {
    
test('Debe traer 10 elementos', async() => {

    const gifs =  await getGifs('Dragon Ball Z');

    expect( gifs.length ).toBe( 10 );
    
})

test('Al no enviar nada no debe traer nada', async() => {

    const gifs =  await getGifs('');

    expect( gifs.length ).toBe( 0 );
    
})


})
