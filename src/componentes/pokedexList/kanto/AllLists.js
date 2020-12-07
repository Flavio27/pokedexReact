import React, { useEffect, useState } from 'react'
import { LINK_POKEDEX_LIST } from '../../../api'
import { POKE_IMG_API, POKE_IMG_1_TO_7_GEN } from '../../../imgLinks'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


import styled from 'styled-components'



const Evolutions = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center; 
    align-items: center;
    justify-content: center;
`

const PokeCard = styled.div`
    text-align: center;
    margin: 15px;
    background-color: #F2F2F2;
    border-radius: 10px;
    transform: scale(1.0);
    transition: all ease 0.2s;
    opacity: 0.9;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        opacity: 1.0;
    }
`

const PokeName = styled.div`
    border-radius: 3px;
    background-color: #4d4d4d;
    color: #ffffff;
    font-weight: 900px;

`
const PokeNumber = styled.div`
    border-radius: 3px;
    background-color: #e6e6e6;
    font-weight: 900px;

`


function AllLists() {
    const [pokeData, setPokeData] = useState([])
    const [filterInit, setFilterInit] = useState()
    const [filterEnd, setFilterEnd] = useState()
    const [totalPoke, setTotalPoke] = useState()


    const [changeLink, setChangeLink] = useState(false)
    const [genName, setGenName] = useState('')



    async function SearchNational() {
        const response = await fetch(`${LINK_POKEDEX_LIST}/national`)
        const data = await response.json()
        setPokeData(data.pokemon_entries)
    }


    async function SearchGeneration(init, end) {
        SearchNational()
        setFilterInit(init)
        setFilterEnd(end)
        setChangeLink(false)
        if (init > 809) {
            setChangeLink(true)
        }
        setTotalPoke(end - init)

        if (init === 0) { setGenName('Generation 1') }
        else if (init === 152) { setGenName('Generation 2') }
        else if (init === 252) { setGenName('Generation 3') }
        else if (init === 387) { setGenName('Generation 4') }
        else if (init === 494) { setGenName('Generation 5') }
        else if (init === 650) { setGenName('Generation 6') }
        else if (init === 722) { setGenName('Generation 7') }
        else if (init === 810) { setGenName('Generation 8') }
    }


    return (
        <div>

            <ButtonGroup size="large" color="dark" aria-label="large outlined primary button group">
                <Button onClick={() => SearchGeneration(0, 151)}>Generation 1</Button>
                <Button onClick={() => SearchGeneration(152, 251)}>Generation 2</Button>
                <Button onClick={() => SearchGeneration(252, 386)}>Generation 3</Button>
                <Button onClick={() => SearchGeneration(387, 493)}>Generation 4</Button>
                <Button onClick={() => SearchGeneration(494, 649)}>Generation 5</Button>
                <Button onClick={() => SearchGeneration(650, 721)}>Generation 6</Button>
                <Button onClick={() => SearchGeneration(722, 809)}>Generation 7</Button>
                <Button onClick={() => SearchGeneration(810, 898)}>Generation 8</Button>
            </ButtonGroup>

            {/* <button onClick={SearchNational}>National</button> */}
            {
                (totalPoke > 0 ? (
                    <div>
                        <h1>{genName}</h1>
                        <h1>Total Pokémon: {totalPoke}</h1>
                    </div>) : (''))
            }

            <Evolutions>
                {
                    (changeLink === false ? (
                        pokeData.map(pokes => (
                            (pokes.entry_number >= filterInit && pokes.entry_number <= filterEnd ? (
                                <PokeCard key={pokes.entry_number}>
                                    <PokeNumber>{pokes.entry_number}</PokeNumber>
                                    <img src={`${POKE_IMG_1_TO_7_GEN}/${pokes.pokemon_species.name}.png`} />
                                    <PokeName>{pokes.pokemon_species.name}</PokeName>
                                </PokeCard>
                            ) : (''))
                        ))
                    ) : (
                            pokeData.map(pokes => (
                                (pokes.entry_number >= filterInit && pokes.entry_number <= filterEnd ? (
                                    <PokeCard key={pokes.entry_number}>
                                        <PokeNumber>{pokes.entry_number}</PokeNumber>
                                        <img src={`${POKE_IMG_API}/${pokes.entry_number}.png`} />
                                        <PokeName>{pokes.pokemon_species.name}</PokeName>
                                    </PokeCard>
                                ) : (''))
                            ))
                        ))

                }
            </Evolutions>
        </div>
    )
}

export default AllLists
