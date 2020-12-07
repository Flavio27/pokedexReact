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

const PokeNameRamif = styled.div`
    border-radius: 3px;
    background-color: #4d4d4d;
    color: #ffffff;
    font-weight: 900px;
    margin: 10px;
    width: 150px;
    
`

const Evolutions = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center; 
    align-items: center;
    justify-content: center;
`

const Ramification = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
`

const Centralize = styled.div`
    text-align: center;
`

const ArrowDown = styled.div`
    font-size: 40px;
`
const DivPoke = styled.div`
    cursor: pointer; 
`




function PokeEvolutions(props) {

    if (props.firstEvo.length > 1) {
        return (

            <div>
                <DivPoke onClick={() => catchNameCard(props.firstForm)}>
                    <div><h2>Evolution chain </h2></div>
                    {
                        props.firstEvo.length > 1 ?
                            (<div><img src={`${POKE_PIC_3D}/${props.firstForm}.png`} />
                                <PokeName>{props.firstForm}</PokeName>
                                <ArrowDown>↓</ArrowDown>
                            </div>) : ('')
                    }

                </DivPoke>

                <Evolutions name="More than one first-evolution">
                    {


                        props.firstEvos.map(evos => (
                            (evos.evolves_to.length > 0 ?
                                (
                                    <Ramification key={evos.species.name}>
                                        <br />
                                        <DivPoke>

                                            <img src={`${POKE_PIC_3D}/${evos.species.name}.png`} onClick={() => catchNameCard(evos.species.name)} />
                                            <PokeNameRamif>{evos.species.name}</PokeNameRamif>
                                            <ArrowDown>↓</ArrowDown>
                                            <img src={`${POKE_PIC_3D}/${evos.evolves_to[0].species.name}.png`} onClick={() => catchNameCard(evos.evolves_to[0].species.name)} />
                                            <PokeNameRamif>{evos.evolves_to[0].species.name}</PokeNameRamif>
                                        </DivPoke>
                                    </Ramification>
                                )
                                :
                                (<Centralize key={evos.species.name}>
                                    <DivPoke onClick={() => catchNameCard(evos.species.name)}>
                                        <img src={`${POKE_PIC_3D}/${evos.species.name}.png`} />
                                        <PokeNameRamif>{evos.species.name}</PokeNameRamif>
                                    </DivPoke>
                                </Centralize>))
                        ))
                    }
                </Evolutions>
                <div>
                    {
                        (props.firstEvos.length === 0 && props.secondEvos.length === 2 ?
                            (<DivPoke onClick={() => catchNameCard(props.firstEvo)}>
                                <img src={`${POKE_PIC_3D}/${props.firstEvo}.png`} />
                                <PokeName>{props.firstEvo}</PokeName>
                                <ArrowDown>↓</ArrowDown>
                            </DivPoke>) : (''))
                    }
                </div>
                <Evolutions name="More than one second-evolution">
                    {

                        props.secondEvos.map(evos => (
                            <DivPoke key={evos.species.name} onClick={() => catchNameCard(evos.species.name)}>
                                <img src={`${POKE_PIC_3D}/${evos.species.name}.png`} />
                                <PokeNameRamif>{evos.species.name}</PokeNameRamif>
                            </DivPoke>

                        ))
                    }
                </Evolutions>
            </div>
        )
    } else {
        return ('')
    }
}

export default PokeEvolutions
