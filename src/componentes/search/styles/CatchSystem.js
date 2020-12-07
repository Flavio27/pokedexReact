import React from 'react'

function CatchSystem() {

    function luckyButton(ball) {

        let ballRate = 0

        if (ball === 'Pokeballs') {
            ballRate = 1
        } else if (ball === 'GreatBalls') {
            ballRate = 1.5
        } else if (ball === 'UltraBalls') {
            ballRate = 2
        }

        let pokemoRate = 0

        if (props.pokeExpBase < 100) { // first form average rate
            pokemoRate = 0.3
        } else if (props.pokeExpBase <= 150 && props.pokeExpBase >= 100) { // first evolution average rate 
            pokemoRate = 0.2
        } else if (props.pokeExpBase <= 250 && props.pokeExpBase >= 151) { // second evolution average rate
            pokemoRate = 0.1
        } else if (props.pokeExpBase <= 300 && props.pokeExpBase >= 251) { // legendary or mithycal average rate
            pokemoRate = 0.1/2
        }
        else if (props.pokeExpBase > 300) { // legendary or mithycal average rate
            pokemoRate = 0.1/3
        }

        let catchRate2 = 1 * (Math.random() < (pokemoRate * ballRate));
        if (catchRate2 > 0.50) {

            alert(`
            Congratulations you caught a ${props.pokeName}!
            Total balls failed to catch: Pokeballs: ${props.wastedPokeballs},
            GreatBalls: ${props.wastedGreatBalls},
             UltraBalls: ${props.wastedUltraballs} to catch`);
            props.setBalls({...balls, wastePokeBalls: 0, wasteGreatBalls: 0, wasteUltraBalls: 0})
            setPokeCatches([...pokeCatches, {...pokeCatches, 
                pokemonName: props.pokeName, 
                totalPoke: balls.wastePokeBalls,
                totalGreat: balls.wasteGreatBalls,
                totalUltra: balls.wasteUltraBalls,
                caugthBall: chosedBall
            }])
            console.log(pokeCatches)
        }

    }
    
    return (
        <div>
            
        </div>
    )
}

export default CatchSystem
