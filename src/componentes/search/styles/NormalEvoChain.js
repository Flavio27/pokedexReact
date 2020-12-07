import React from 'react'
import { POKE_PIC_3D } from '../../imgLinks'
import styled from 'styled-components'
import { catchNameCard } from '../SearchPoke'

const PokeName = styled.div`
    border-radius: 3px;
    background-color: #4d4d4d;
    color: #ffffff;
    font-weight: 900px;
    margin: auto;
    width: 150px;

`

const ArrowDown = styled.div`
    font-size: 40px;
`

const DivPoke = styled.div`
    cursor: pointer; 
`


function NormalEvoChain(props) {
    if (props.firstEvo.length > 1 && props.firstEvolutions.length <= 1 && props.secondEvolutions.length <= 1) {
        return (
            <span>
                <DivPoke onClick={() => catchNameCard(props.firstEvo)}>
                    <img src={`${POKE_PIC_3D}/${props.firstEvo}.png`} alt={props.firstEvo}/>
                    <PokeName>{props.firstEvo}</PokeName>
                </DivPoke>
                    
                {(props.secondEvo.length > 0 ? (
                    <DivPoke onClick={() => catchNameCard(props.secondEvo)}>
                        <ArrowDown>↓</ArrowDown>
                        <img src={`${POKE_PIC_3D}/${props.secondEvo}.png`} alt={props.secondEvo}/>
                        <PokeName>{props.secondEvo}</PokeName>
                    </DivPoke>
                    ) : (''))}


            </span>
        )

    } else {
        return ('')
    }
}

export default NormalEvoChain
