import React from 'react'
import './Title.scss'

const Title = ({ level = 1, children, className = '' }) => {
    const Tag = `h${level}`
    return <Tag className={`title ${className}`}>
        {children}
    </Tag>
}

export default Title