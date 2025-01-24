import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CelestialRespiration from './projects/celestialrespiration'
import DreamJournalBio from './projects/DreamJournalBio'
import HiveHeaven from './projects/HiveHeaven'
import IslamResearch from './projects/IslamResearch'
import SimplePOS from './projects/SimplePOS'
import SolarSystemGame from './projects/SolarSystemGame'
import SimplePlanner from './projects/SimplePlanner'
import PursuitCalculator from './projects/PursuitCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
 <div>Welcome to Sharukh's Professional Portfolio</div>
    <div className='cardContainer'>

<CelestialRespiration/>


<HiveHeaven />


<SolarSystemGame />

<IslamResearch />


<SimplePOS />

<DreamJournalBio/>


<SimplePlanner />

<PursuitCalculator/>


    </div></>
  )
}

export default App
