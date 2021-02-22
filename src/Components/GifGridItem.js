import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    // console.log(url);
    
    return (
        <div className="card animate__animated animate__bounceIn ">
            <img src={url} alt="GIF" ></img>
            <hr></hr>
            <h3> {title} </h3>
        </div>
    )
}
