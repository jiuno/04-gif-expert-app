import React from 'react'
import PropTypes from 'prop-types'



export const GifGridItem = ({id, title, url}) => {
    
    // console.log(url);
    
    return (
        <div className="card animate__animated animate__bounceIn ">
            <img src={url} alt={title} ></img>
            <hr></hr>
            <h3> {title} </h3>
        </div>
    )
}

GifGridItem.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    

}
