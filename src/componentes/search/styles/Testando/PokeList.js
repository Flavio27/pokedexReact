import React, {createContext} from 'react'
import ExibeTesteContext from './ExibeTesteContext'
import TesteContext from './TesteContext'

const PokeList = () => {
    const context = createContext(TesteContext);
    
    const data = context.pokeall.map(poke =>(
        <ExibeTesteContext key={poke.id} poke={poke}></ExibeTesteContext>
    ))

    return (
        <div>
            {data}
        </div>
    )
}

export default PokeList
