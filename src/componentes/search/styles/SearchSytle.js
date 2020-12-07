import styled from 'styled-components'

export const InputName = styled.div`
    height: 70px;
    margin-top: 10px;
    text-align: center;
    min-width: 300px; 
    margin: 20px;
`

// Pokeballs Icons 
export const BallsDiv = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
`
export const PokeballIcon = styled.span`
    display: flex;
    cursor: pointer;
`
export const PokeballDiv = styled.div`
    text-align: center;
    width: 50px;
    height: 65px;
`
export const PokeballNumber = styled.h4`
    font-size: 15px;
    text-align: center;
    margin-top: -5px;
`

//Pokemon caught team
export const CardsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: left;
`

export const PokeCard = styled.div`
    text-align: center;
    height: 180px;
    width: 150px;
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

export const PokeNameCard = styled.div`
    border-radius: 3px;
    background-color: #4d4d4d;
    color: #ffffff;
    font-weight: 900px;

`
export const PokeNumberCard = styled.div`
    border-radius: 3px;
    background-color: #e6e6e6;
    font-weight: 900px;

`