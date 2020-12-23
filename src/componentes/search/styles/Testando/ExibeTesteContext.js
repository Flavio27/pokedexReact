import React from 'react'

ExibeTesteContext = ({ poke }) => {
    return (
        <div>
            {poke.id} - {poke.name}
        </div>
    )
}

export default ExibeTesteContext
