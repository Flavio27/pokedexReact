import React from 'react'

function PokeAbilities(props) {
    return (
        <div>
            <h2 style={{ color: "black" }}>Pokémon abilities: </h2>
            {
                <h3>{props.abilities.map(abilities => abilities.ability.name).join(', ')}</h3>
              
            }
        </div>
    )
}

export default PokeAbilities
