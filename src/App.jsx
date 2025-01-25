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

 <h3>About Me</h3>
 <h5>
I'm a creative and solutions-driven developer with a deep passion for combining technology and innovation to solve real-world problems. With experience spanning app development, game design, and astronomy-focused projects, I excel in crafting unique digital experiences that are both functional and impactful. I enjoy working on cutting-edge applications that merge science, interactivity, and user-friendly design, whether it's an astronomy-based card game, an Android app bridging communication gaps, or a React.js tool for environmental reporting.

Beyond development, I thrive on bringing ideas to life through strategic planning, collaboration, and attention to detail. I love exploring new challenges, from making apps accessible and efficient to creating engaging educational content. Whether you're here to collaborate, learn, or connect, welcome to my corner of innovation!
   </h5> 
   
      <h3>Software Development Projects</h3>

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
