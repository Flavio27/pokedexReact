import React from 'react'

function ElementIcon(props) {
    let iconUrl = `${process.env.PUBLIC_URL}/assets/images/element_icon/${props.name}.png`
    return (
        <span>
            <span>{props.name} <img src={iconUrl}></img></span>
            
        </span>
    )
}

export default ElementIcon
