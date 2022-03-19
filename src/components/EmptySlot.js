//imports
import React, {useEffect} from 'react'
import emptySlot from '../images/molehill.png'
//function
function EmptySlot(data){
    useEffect(()=>{
        let randSeconds = Math.ceil(Math.random() * 2500)
        let timer = setTimeout(()=>{
            data.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
            <img
            src={emptySlot}
            />
        
    )
}

export default EmptySlot