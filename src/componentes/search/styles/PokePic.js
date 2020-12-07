import React from 'react'
import {POKE_PIC_DRAW} from '../../imgLinks'
let pokePicture = ''



function PokePic(props) {

    let imgStyle = {
        width: '250px',
        height: '250px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background/Type_Background_${props.element}.png)`,
        borderRadius: '50%',
        position: 'center'
    }

        let pokePicture = `${POKE_PIC_DRAW}/${props.id}.png`
      

    return (
   
            <img src={pokePicture} style={imgStyle}/>      

    )
}

export default PokePic
