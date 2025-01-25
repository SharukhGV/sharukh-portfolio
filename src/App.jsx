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
import RPIearthquake from './projects/RPIearthquake'
import sharukhprofilepic from "./assets/sharukhprofilepic.png"
function App() {
  const [count, setCount] = useState(0)

  return (

    <>

<img style={{width:"150px", height:"150px", borderRadius:"50%"}} src={sharukhprofilepic}></img>
<br></br>
 <h2>Welcome to Sharukh's Professional Portfolio</h2>


    <div className='cardContainer'>

<CelestialRespiration/>


<HiveHeaven />


<SolarSystemGame />

<IslamResearch />


<SimplePOS />

<DreamJournalBio/>


<SimplePlanner />

<PursuitCalculator/>

<RPIearthquake/>
    </div></>
  )
}

export default App
