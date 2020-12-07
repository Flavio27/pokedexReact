import React from 'react'



function PokeStatus(props) {

    let statsBar = {
        width: '200px',
        height: '20px',
        border: 'solid 1px black',
        borderRadius: '10px',

    }

    let statsBarColor = {
        width: `${props.number}%`,
        height: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(39, 112, 247, 0.534)',


    }
    let statsBarColor100More = {
        width: `100%`,
        height: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(253, 71, 71, 0.534)',
        textAlign: 'center'

    }


    let statsNumber = {
        color: 'white'
    }

    const StatName = {
    fontSize: '20px',
    textAlign: 'left',
    paddingLeft: '5px',
}

const EachState = {
    margin: '10px'
}


return (
    <span style={EachState}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/status/${props.statusName}.png`} alt={props.statusName}/>
        <span style={StatName}>{props.statusName}</span>
        <div style={statsBar}>
            {
                (props.number > 100 ? (
                    <div style={statsBarColor100More}>
                        <span style={statsNumber}>{props.number}</span>
                    </div>
                ) : (
                        <div style={statsBarColor}>
                            <span style={statsNumber}>{props.number}</span>
                        </div>
                    ))
            }
        </div>
    </span>
)
}

export default PokeStatus







