//imports
import {useState} from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'
//function

function MoleContainer(data){
    let [displayMole, setDisplayMole] = useState(false)
    let handleClick = () => {
        data.setScore(data.score + 1)
        setDisplayMole(false)
    }
        return (
            (displayMole)?
            <div className="moleContainer">
                <Mole setDisplayMole={setDisplayMole} handleClick={handleClick}/>
            </div>
            :
            <div className="moleContainer">
                <EmptySlot setDisplayMole={setDisplayMole}/>
            </div>
        )
    
}

export default MoleContainer