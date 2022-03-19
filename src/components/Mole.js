//imports
import React, {useEffect} from 'react'
import moleImage from '../images/mole.png'
//function
function Mole(data){
    useEffect(()=>{
        let randSeconds = Math.ceil(Math.random() * 2500)
        let timer = setTimeout(()=>{
            data.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })//end useEffect
    return (
            <img
            src={moleImage}
            onClick={data.handleClick}
            />
    )
}

export default Mole