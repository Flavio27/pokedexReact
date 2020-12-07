import React from 'react'

function PokeMeasures(props) {
    return (
        <div>
            <h2 style={{ color: "black" }}>Measures</h2>
            <h3>Weight: {props.weight} KG</h3>
            <h3>Height: {props.height} M</h3>
        </div>
    )
}

export default PokeMeasures
