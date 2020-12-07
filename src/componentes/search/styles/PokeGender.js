import React from 'react'

let nameGender = ''
let femaleIcon = `${process.env.PUBLIC_URL}/assets/images/gender/female_icon.png`
let maleIcon = `${process.env.PUBLIC_URL}/assets/images/gender/male_icon.png`


let center = {
    textAlign: 'center'
}

function PokeGender(props) {

    if (props.gender === 1 || props.gender === 2 || props.gender === 4 || props.gender === 6) {
        nameGender = <div><img src={maleIcon} alt="male"/><img src={femaleIcon} alt="female"/></div>
    } else if (props.gender === 8) {
        nameGender = <img src={femaleIcon} alt="female"/>
    } else if (props.gender === 0) {
        nameGender = <img src={maleIcon} alt="male"/>
    } else if (props.gender === -1) {
        nameGender = `Unknown`
    }
    return (
        <div style={center}>
            <h3>Gender:</h3>
            <span>{nameGender}</span>
        </div>
        

    )
}

export default PokeGender
