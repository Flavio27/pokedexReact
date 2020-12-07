import React from 'react'
import PokeStatus from './PokeStatus'
import styled from 'styled-components'

const StatusFull = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    

`

function PokeFullStatus(props) {

    return (
        <StatusFull>
            <h2>Pokémon status</h2 >
            {
                props.pokestats.map(stats =>
                    (<StatusFull key={stats.stat.name}>
                        <PokeStatus statusName={stats.stat.name} number={stats.base_stat} />
                    </StatusFull>
                    ))
            }
            <h3>Experience Base: {props.baseExperience}</h3>
        </StatusFull>
    )
}

export default PokeFullStatus
