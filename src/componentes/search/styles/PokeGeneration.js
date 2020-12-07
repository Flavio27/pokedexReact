import React from 'react'
import styled from 'styled-components'

const DivGeneration = styled.div`
    margin-top: 50%;
    margin: 50px;
    border-radius: 5px;
`
function PokeGeneration(props) {
    return (
        <DivGeneration>
            <h2 style={{ color: "black" }}>Pokémon: {props.generation}</h2>
        </DivGeneration>
    )
}

export default PokeGeneration
