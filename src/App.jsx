import { useState } from 'react'

import './App.css'
import DreamJournalBio from './projects/DreamJournalBio'
import HiveHeaven from './projects/HiveHeaven'
// import IslamResearch from './projects/IslamResearch'
import SimplePOS from './projects/SimplePOS'
import SolarSystemGame from './projects/SolarSystemGame'
import SimplePlanner from './projects/SimplePlanner'
import PursuitCalculator from './projects/PursuitCalculator'
import RPIearthquake from './projects/RPIearthquake'
import sharukhprofilepic from "./assets/sharukhprofilepic.png"
import CelestialRespire from './projects/CelestialRespire'
import JeopardyImmigration from './projects/JeopardyImmigration'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>

<img style={{width:"150px", height:"150px", borderRadius:"50%"}} src={sharukhprofilepic}></img>
<br></br>
      <h2>Welcome to Sharukh's Portfolio</h2>
  <h3>Software Development Projects</h3>

  <div class="container">  
    
    <fieldset>
    <legend>About Me</legend>
    <p>
      I'm a creative and solutions-driven developer with a deep passion for combining technology and innovation to solve real-world problems. With experience spanning app development, game design, and astronomy-focused projects, I excel in crafting unique digital experiences that are both functional and impactful. I enjoy working on cutting-edge applications that merge science, interactivity, and user-friendly design, whether it's an astronomy-based card game, an Android app bridging communication gaps, or a React.js tool for environmental reporting.

      Beyond development, I thrive on bringing ideas to life through strategic planning, collaboration, and attention to detail. I love exploring new challenges, from making apps accessible and efficient to creating engaging educational content. Whether you're here to collaborate, learn, or connect, welcome to my corner of innovation!
    </p>
  </fieldset>

  
  <fieldset>
    <legend>Icon Link Meanings</legend>
    <ul>
      <li>🌐 - Backend Server Repository</li>
      <li>🌎 - Frontend Web Site Repository</li>
      <li>🖥️ - Desktop SnapCraft Linux Application</li>
      <li>🗺️ - Deployed Website</li>
    </ul>
  </fieldset>


</div>





<br></br>
<br></br>
   <div className='cardContainer'>

<CelestialRespire/>


<HiveHeaven />


<SolarSystemGame />

{/* <IslamResearch /> */}


<SimplePOS />

<DreamJournalBio/>


<SimplePlanner />

<PursuitCalculator/>

<RPIearthquake/>

<JeopardyImmigration/>
    </div>
        {/* <h3>Piano Hobbyist</h3>

    <div className='cardContainer'>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Zr2_Wy-8Fsw?si=WNm3qAsYh7iZlWCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jWJMMlFIIgI?si=TQdiRGjjBGeB6BcG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    
    </div> */}
    </>
  )
}

export default App
