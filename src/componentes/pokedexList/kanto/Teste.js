import React, { useEffect, useState } from 'react'
import { LINK_POKEDEX_LIST } from '../../api'
import { POKE_IMG_API, POKE_IMG_1_TO_7_GEN } from '../../imgLinks'


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
`

const PokeName = styled.div`
    border-radius: 3px;
    background-color: #4d4d4d;
    color: #ffffff;
    font-weight: 900px;

`
const Number = styled.div`
    border-radius: 3px;
    background-color: #e6e6e6;
    font-weight: 900px;

`

function Teste() {
    const [pokeData, setPokeData] = useState([])


    async function SearchAll() {
        const responseKanto = await fetch(`${LINK_POKEDEX_LIST}/national`)
        const dataKanto = await responseKanto.json()
        setPokeData(dataKanto.pokemon_entries)
    }



    return (
        <div>
            <button onClick={SearchAll}>National</button>

            <Evolutions>
                {
                    pokeData.map(pokes => (
                        <PokeCard key={pokes.entry_number}>
                            <img src={`${POKE_IMG_1_TO_7_GEN}/${pokes.pokemon_species.name}.png`} />
                            <PokeName>{pokes.pokemon_species.name}</PokeName>
                        </PokeCard>
                    ))
                }
            </Evolutions>
        </div>
    )
}

export default Teste
