import React from 'react'
import styled from 'styled-components'

const PokemonType = styled.div`
text-align: center;

`
const Pokemon = styled.h2`
    color: #ffff80;
    text-align: center;
    text-shadow: 2px 2px 10px #000000;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    
`


function MitOrLend(props) {

    let legendary = ''
    let mythical = ''

    if (props.legen === true) {
        legendary =
            <PokemonType>
                <Pokemon>Pókemon Legendary!</Pokemon>
            </PokemonType>
    } else { legendary = '' }


    if (props.mytic === true) {
        mythical =
            <PokemonType>
                <Pokemon>Pókemon Mythical!</Pokemon>
            </PokemonType>
    } else { mythical = '' }


    return (
        <React.Fragment>
            {legendary}
            {mythical}
        </React.Fragment>
    )
}

export default MitOrLend
