import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav'
import Github from './components/windows.jsx/Github'
import Note from './components/windows.jsx/Note.jsx'
import Resume from './components/windows.jsx/Resume.jsx'
import Spotify from './components/windows.jsx/Spotify.jsx'
import Cli from './components/windows.jsx/Cli.jsx'


function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
