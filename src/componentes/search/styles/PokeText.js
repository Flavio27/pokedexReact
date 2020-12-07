import React from 'react'
import styled from 'styled-components'

const DivText = styled.div`
    max-width: 400px;
    margin: auto;
    background-color: rgba(79, 91, 102, 0.7);
    border-radius: 5px;

`
const PokemonText = styled.p`
    margin: 50px;
    font-weight: 500;
    color: #ffffff;
`

function PokeText(props) {
    
    let englishTexts = props.pokeText.filter(function (texts) {
        return texts.language.name === 'en'

    });

    if (englishTexts[0]) {
        return (
            <DivText>
                <PokemonText>{englishTexts[0].flavor_text.replace('', ' ').toLowerCase()}</PokemonText>
            </DivText>
        )
    } else {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }

}

export default PokeText

