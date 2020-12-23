import React, { createContext, useState } from 'react'

const TesteContext = ({ children }) => {

    const [pokeAll, setPokeAll] = useState([
        { id: 1, name: 'bulbasaur'}
    ])

    const savePokeAll = poke =>{
        const newPoke = {
            id: poke.id,
            name: poke.name
        }
        setPokeAll([...pokeAll, newPoke])
    }

    return (
        <TesteContext.Provider value={{pokeAll, savePokeAll}}>

        </TesteContext.Provider>
    );
}

export default TesteContext
