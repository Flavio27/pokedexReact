import React from 'react'
import styled from 'styled-components'

const Name = styled.span`
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;

`
const Number = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #9c9c9c;
`
const NameAndNumber = styled.div`
    margin-bottom: 10px;
`



function PokemonName(props) {
    return (
        <NameAndNumber>
            <Number>Nº {props.pokeNumber}</Number>
            <Name>{props.pokeName}</Name>
        </NameAndNumber>

    )
}

export default PokemonName
