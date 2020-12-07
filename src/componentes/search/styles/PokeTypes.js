import React from 'react'
import ElementIcon from './ElementIcon'
import styled from 'styled-components'

const Elements = styled.span`
    font-weight: bold;
    margin-right: 10px;
`

const ElementDiv = styled.div`
    margin-bottom: 10px;
`
function PokeTypes(props) {
    return (
        <ElementDiv>
            {(props.pokeTypes.length > 1 ? (<Elements>Elements:</Elements>) : (<Elements>Element:</Elements>))}
            {props.pokeTypes.map(types => (<span key={types.type.name}><ElementIcon name={types.type.name} /></span>))}
        </ElementDiv>
    )
}

export default PokeTypes
