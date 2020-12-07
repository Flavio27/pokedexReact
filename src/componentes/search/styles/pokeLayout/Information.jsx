import React from 'react'
import './Information.css'

function Information(props) {
    return (
        <div className="body">
            {props.children}
        </div>
    )
}

export default Information
