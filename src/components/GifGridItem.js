import PropTypes from 'prop-types';
import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn" >
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}