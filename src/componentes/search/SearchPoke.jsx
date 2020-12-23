
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LINK_API_POKE, LINK_API_POKE_SPECIES } from '../api'
import { BALLS_IMG, POKE_PIC_DRAW } from '../imgLinks'
import PokePic from './styles/PokePic'
import PokeGender from './styles/PokeGender'
import PokemonName from './styles/PokemonName'
import PokeMeasures from './styles/PokeMeasures'
import PokeAbilities from './styles/PokeAbilities'
import PokeTypes from './styles/PokeTypes'
import PokeFullStatus from './styles/PokeFullStatus'
import PokeGeneration from './styles/PokeGeneration'
import PokeEvolutions from './styles/PokeEvolutions'
import NormalEvoChain from './styles/NormalEvoChain'
import PokeText from './styles/PokeText'
import './styles/pokeLayout/Information.css'
import TextField from '@material-ui/core/TextField';
import { InputName, PokeballIcon, PokeballDiv, PokeballNumber, BallsDiv, BallsArea, BallsDivCenter, CardsDiv, YourTeam,  PokeCard, PokeNameCard, PokeNumberCard, } from './styles/SearchSytle'
import Button from '@material-ui/core/Button';
import MitOrLend from './styles/MitOrLend'
import ModalBalls, { handleOpen } from './styles/ModalBalls'
let pokeballName = 'pokeball'
let testando


export let catchNameCard

function SearchPoke() {

    //Pokemon
    const [pokeName, setpokeName] = useState('bulbasaur')
    const [pokeNameChange, setpokeNameChange] = useState('bulbasaur')

    const [pokeCatches, setPokeCatches] = useState([{ pokemonName: '', pokemonId: 0, totalPoke: 0, totalGreat: 0, totalUltra: 0 }])
    const [pokeExpBase, setPokeExpBase] = useState(64)
    const [balls, setBalls] = useState({
        ultraBalls: 100,
        greatBalls: 100,
        pokeBalls: 100,
        wastePokeBalls: 0,
        wasteGreatBalls: 0,
        wasteUltraBalls: 0,
        caugthBall: ''
    })
    const [chosedBall, setChosedBall] = useState('')
    const [caught, setcaught] = useState(false)

    const [pokeID, setPokeID] = useState(1)
    const [pokeimg, setPokeimg] = useState('')
    const [pokeData, setPokeData] = useState([{}])
    const [error, setError] = useState('')

    const [pokeTypes, setPokeTypes] = useState([{ type: { name: "grass" } }])
    const [pokeStats, setPokeStats] = useState([])
    const [pokeAbilities, setPokeAbilities] = useState([])
    const [pokeWeight, setPokeWeight] = useState(6)
    const [pokeHeight, setPokeHeight] = useState(0.7)
    const [pokeGender, setPokeGender] = useState(1)


    // Poke-Species
    const [pokeGen, setPokeGen] = useState('')
    const [pokeEvoChain, setPokeEvoChain] = useState('https://pokeapi.co/api/v2/evolution-chain/1/')
    const [pokeLegendary, setPokeLegendary] = useState(false)
    const [pokeMythical, setPokeMythical] = useState(false)
    const [pokeTexts, setPokeTexts] = useState([])

    // Poke-Chain
    const [normalForm, setNormalForm] = useState('')
    const [firstEvo, setFirstEvo] = useState('')
    const [secondEvo, setSecondEvo] = useState('')

    // More than one first-evolution
    const [firstEvos, setFirstEvos] = useState([])
    // More than one second-evolution
    const [secondEvos, setSecondEvos] = useState([])




    useEffect(async () => {

        //Pokemon Fetch
        const response = await fetch(`${LINK_API_POKE}/${pokeName}`)
        const dataPoke = await response.json()

        setPokeData(dataPoke)
        setPokeTypes(dataPoke.types)
        setPokeimg(dataPoke.sprites.front_default)
        setPokeStats(dataPoke.stats)
        setPokeID(dataPoke.id)
        setPokeAbilities(dataPoke.abilities)
        setPokeExpBase(dataPoke.base_experience)

        // Poke-Species Fetch
        const response_species = await fetch(`${LINK_API_POKE_SPECIES}/${pokeName}`)
        const dataPoke_species = await response_species.json()
        setPokeGen(dataPoke_species.generation.name)
        setPokeEvoChain(dataPoke_species.evolution_chain.url)
        setPokeLegendary(dataPoke_species.is_legendary)
        setPokeMythical(dataPoke_species.is_mythical)
        setPokeTexts(dataPoke_species.flavor_text_entries)

        const evoChain = await fetch(pokeEvoChain)
        const evolutions = await evoChain.json()

        if (evolutions.chain.evolves_to.length > 0) {

            setNormalForm(evolutions.chain.species.name)
            setFirstEvo(evolutions.chain.evolves_to[0].species.name)

            if (evolutions.chain.evolves_to[0].evolves_to.length > 0) {
                setSecondEvo(evolutions.chain.evolves_to[0].evolves_to[0].species.name)
            } else { }

        } else {
            setFirstEvo('This pokemon dont have evolution')
            setSecondEvo('')
            setNormalForm('')
        }

        catchNameCard = function catchName(props) {
            setpokeName(props)
        }


    }, [])

    /////////////////// click card change ////////////////////
    useEffect(async () => {

        //Pokemon Fetch
        const response = await fetch(`${LINK_API_POKE}/${pokeName}`)
        const dataPoke = await response.json()

        setPokeData(dataPoke)
        setPokeTypes(dataPoke.types)
        setPokeimg(dataPoke.sprites.front_default)
        setPokeStats(dataPoke.stats)
        setPokeID(dataPoke.id)
        setPokeAbilities(dataPoke.abilities)
        setPokeExpBase(dataPoke.base_experience)

        // Poke-Species Fetch
        const response_species = await fetch(`${LINK_API_POKE_SPECIES}/${pokeName}`)
        const dataPoke_species = await response_species.json()
        setPokeGen(dataPoke_species.generation.name)
        setPokeEvoChain(dataPoke_species.evolution_chain.url)
        setPokeLegendary(dataPoke_species.is_legendary)
        setPokeMythical(dataPoke_species.is_mythical)
        setPokeTexts(dataPoke_species.flavor_text_entries)

        catchNameCard = function catchName(props) {
            setpokeName(props)
        }

    }, [pokeName])


    async function Search() {

        //Pokemon Fetch
        const response = await fetch(`${LINK_API_POKE}/${pokeNameChange}`)
        if (response.status === 404) {
            setError('This Pókemon does not exist!')
        } else { setError('') }

        const dataPoke = await response.json()

        setPokeData(dataPoke)
        setpokeName(dataPoke.name)
        setPokeTypes(dataPoke.types)
        setPokeimg(dataPoke.sprites.front_default)
        setPokeStats(dataPoke.stats)
        setPokeID(dataPoke.id)
        setPokeAbilities(dataPoke.abilities)
        setPokeWeight(dataPoke.weight / 10)
        setPokeHeight(dataPoke.height / 10)
        setPokeExpBase(dataPoke.base_experience)

        // Poke-Species Fetch
        const response_species = await fetch(`${LINK_API_POKE_SPECIES}/${pokeNameChange}`)
        const dataPoke_species = await response_species.json()

        setPokeGen(dataPoke_species.generation.name)
        setPokeEvoChain(dataPoke_species.evolution_chain.url)
        setPokeGender(dataPoke_species.gender_rate)
        setPokeLegendary(dataPoke_species.is_legendary)
        setPokeMythical(dataPoke_species.is_mythical)
        setPokeTexts(dataPoke_species.flavor_text_entries)


    }


    useEffect(async () => {

        //Evolution-Chain Fetch

        const evoChain = await fetch(pokeEvoChain)
        const evolutions = await evoChain.json()

        if (evolutions.chain.evolves_to.length > 0) { // if have first-evolution

            setNormalForm(evolutions.chain.species.name)
            setFirstEvo(evolutions.chain.evolves_to[0].species.name)

            if (evolutions.chain.evolves_to.length > 1) { //if have more than one first-evolutions
                setFirstEvos(evolutions.chain.evolves_to)
            } else {
                setFirstEvos([])
            }

            if (evolutions.chain.evolves_to[0].evolves_to.length > 0) { // if have second-evolution
                if (evolutions.chain.evolves_to[0].evolves_to.length > 1) {
                    setSecondEvos(evolutions.chain.evolves_to[0].evolves_to)
                } else {
                    setSecondEvos([])
                }
                setSecondEvo(evolutions.chain.evolves_to[0].evolves_to[0].species.name)

            } else {
                setSecondEvos([])
                setSecondEvo('')
            }
        } else {
            setFirstEvo('')
            setSecondEvo('')
            setNormalForm('')
            setFirstEvos([])
            setSecondEvos([])
        }
    }, [pokeEvoChain])


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

        if (pokeExpBase < 100) { // first form average rate
            pokemoRate = 0.3
        } else if (pokeExpBase <= 150 && pokeExpBase >= 100) { // first evolution average rate 
            pokemoRate = 0.2
        } else if (pokeExpBase <= 250 && pokeExpBase >= 151) { // second evolution average rate
            ballRate = ballRate / 2
            pokemoRate = 0.1
        } else if (pokeExpBase <= 300 && pokeExpBase >= 251) { // legendary or mithycal average rate
            ballRate = ballRate / 2
            pokemoRate = 0.1 / 2
        }
        else if (pokeExpBase > 300) { // legendary or mithycal average rate
            ballRate = ballRate / 2
            pokemoRate = 0.1 / 3
        }

        let catchRate2 = 1 * (Math.random() < (pokemoRate * ballRate));
        if (catchRate2 > 0.50) {
            alert(`Congratulations you caught a ${pokeName}! Total balls failed to catch: Pokeballs: ${balls.wastePokeBalls}, GreatBalls: ${balls.wasteGreatBalls}, UltraBalls: ${balls.wasteUltraBalls} to catch`);
            setBalls({ ...balls, wastePokeBalls: 0, wasteGreatBalls: 0, wasteUltraBalls: 0 })
            setPokeCatches([...pokeCatches, {
                ...pokeCatches,
                pokemonName: pokeName,
                pokemonId: pokeID,
                totalPoke: balls.wastePokeBalls,
                totalGreat: balls.wasteGreatBalls,
                totalUltra: balls.wasteUltraBalls,
                caugthBall: chosedBall
            }])
            console.log(pokeCatches)


        }
    }

    function ThrowPokeball() {
        console.log(pokeStats)
        setChosedBall('Pokeballs')
        if (balls.pokeBalls >= 1) {
            if (pokeExpBase > 250) {
                alert(`Only UltraBalls can catch a ${pokeName}`)
            } else {
                setBalls({ ...balls, pokeBalls: balls.pokeBalls - 1, wastePokeBalls: balls.wastePokeBalls + 1 })
                luckyButton(chosedBall)
            }
        } else {
            alert(`Yours ${chosedBall} is over!`)
        }


    }
    function ThrowGreatBall() {
        setChosedBall('GreatBalls')
        if (balls.greatBalls >= 1) {
            if (pokeExpBase > 250) {
                alert(`Only UltraBalls can catch a ${pokeName}`)
            } else {
                setBalls({ ...balls, greatBalls: balls.greatBalls - 1, wasteGreatBalls: balls.wasteGreatBalls + 1 }) //total greatballs, total wasted
                luckyButton(chosedBall)
            }

        } else {
            alert(`Yours ${chosedBall} is over!`)
        }

    }
    function ThrowUltraBall() {
        setChosedBall('UltraBalls')
        if (balls.ultraBalls >= 1) {
            setBalls({ ...balls, ultraBalls: balls.ultraBalls - 1, wasteUltraBalls: balls.wasteUltraBalls + 1 })
            luckyButton(chosedBall)
        } else {
            alert(`Yours ${chosedBall} is over!`)
        }

    }

    return (
        <React.Fragment>

            <InputName>
                <TextField label="Pokémon Name / Number" id="outlined-size-small" defaultValue="Small" variant="outlined" size="small" value={pokeNameChange} onChange={e => setpokeNameChange(e.target.value.toLowerCase())} />
                <Button variant="contained" onClick={Search} style={{ marginLeft: "10px" }} color="secondary">Search</Button>
                <p style={{ color: "red" }}>{error.length > 0 ? (error) : ('')}</p>
            </InputName>

            <div className="body">
                <div className="left-side">
                    <PokemonName pokeName={pokeData.name} pokeNumber={pokeID} />
                    <PokeTypes pokeTypes={pokeTypes} />
                    <PokePic id={pokeID} element={pokeTypes[0].type.name} />
                    <PokeGender gender={pokeGender} />
                    <MitOrLend legen={pokeLegendary} mytic={pokeMythical} />
                    <PokeText pokeText={pokeTexts} />

                </div>
                <div className="mid-side">
                    <div className="moreStatus">
                        <PokeFullStatus pokestats={pokeStats} baseExperience={pokeExpBase} />
                    </div>
                    <div className="moreInfo">
                        <PokeMeasures weight={pokeWeight} height={pokeHeight} />
                        <PokeAbilities abilities={pokeAbilities} />
                        <PokeGeneration generation={pokeGen} />
                    </div>
                    <br></br>
                </div>

                {
                    (firstEvo.length > 1 ? (
                        <div className="right-side">
                            <PokeEvolutions firstForm={normalForm} firstEvos={firstEvos} secondEvos={secondEvos} firstEvo={firstEvo} />
                            <NormalEvoChain firstEvolutions={firstEvos} secondEvolutions={secondEvos} normalForm={normalForm} firstEvo={firstEvo} secondEvo={secondEvo} />
                        </div>
                    ) : (''))
                }

            </div>
            <BallsArea>
                <h2>Your Balls</h2>
                <BallsDiv>
                    <BallsDivCenter>
                        <PokeballIcon onClick={e => ThrowPokeball()}>
                            <PokeballDiv>
                                <img src={`${BALLS_IMG}/pokeballs.png`}></img>
                                <PokeballNumber>{balls.pokeBalls}</PokeballNumber>
                            </PokeballDiv>
                        </PokeballIcon>
                        <PokeballIcon onClick={e => ThrowGreatBall()}>
                            <PokeballDiv>
                                <img src={`${BALLS_IMG}/greatballs.png`}></img>
                                <PokeballNumber>{balls.greatBalls}</PokeballNumber>
                            </PokeballDiv>
                        </PokeballIcon>
                        <PokeballIcon onClick={e => ThrowUltraBall()}>
                            <PokeballDiv>
                                <img src={`${BALLS_IMG}/ultraballs.png`}></img>
                                <PokeballNumber>{balls.ultraBalls}</PokeballNumber>
                            </PokeballDiv>
                        </PokeballIcon>
                    </BallsDivCenter>
                </BallsDiv>
            </BallsArea>
            {/* <div>
                <br />
                PokeballsWasted - {balls.wastePokeBalls} -
                PokeballsWasted - {balls.wasteGreatBalls} -
                PokeballsWasted - {balls.wasteUltraBalls} -

            </div> */}
            <CardsDiv>
            {pokeCatches.length > 1 &&
                <YourTeam>Your Pokemons</YourTeam>
            }
                {
                    pokeCatches.map(catchs => (

                        <React.Fragment>

                            {catchs.pokemonName.length > 1 &&
                                <React.Fragment>
                                    <PokeCard key={catchs.id} onClick={() => catchNameCard(catchs.pokemonName)}>
                                        <img src={`${BALLS_IMG}/${catchs.caugthBall}.png`} alt={catchs.pokemonName} style={{ "height": "25px", "width": "25px" }} />
                                        <img src={`${POKE_PIC_DRAW}/${catchs.pokemonId}.png`} alt={catchs.pokemonName} style={{ "height": "140px", "width": "140px" }} />
                                        <PokeNameCard>{catchs.pokemonName}</PokeNameCard>
                                    </PokeCard>
                                </React.Fragment>
                            }
                        </React.Fragment>
                    ))
                }
                
            </CardsDiv>
        </React.Fragment>
    )
}

export default SearchPoke
