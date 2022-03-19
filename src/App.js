
import './App.css';
import {useState} from 'react'
import MoleContainer from './components/MoleContainer'
function App() {
  let [score, setScore] = useState(0)
  //generate 3x3 grid for moles
  let createMoleHills = () =>{
    let grid = []
    for(let i = 0; i < 9; i++){
      grid.push(
        <MoleContainer
          setScore={setScore}
          score={score}        
        />
      )
    }

    return (
      <div className='grid'>
        {grid}
      </div>
    )
  }//end createMoleHills
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <p className="score">{score}</p>
      {createMoleHills()}
    </div>
  );
}

export default App;
