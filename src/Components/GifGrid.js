import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
        <h3> {category} </h3>

        <div className="Card-Grid">
           
                {loading && <p className="animate__animated animate__heartBeat">Loading...</p> }
                { images.map( (img) =>  (
                <GifGridItem 
                { ...img} //Manda props.img con todas sus propiedades, no solo id, title y url.
                key={img.id}
                />))}

        </div>
        </>
    )
}
