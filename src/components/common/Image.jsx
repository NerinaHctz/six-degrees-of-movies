import React from 'react'
import './Image.scss'

const Image = ({ src, alt, className = '', defaultSrc }) => {
    const handleError = (e) => {
        e.target.src = defaultSrc
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={handleError}
        />
    )
}

export default Image