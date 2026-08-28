import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Stats from './components/Stats'
import Roster from './components/Roster'
import MemoryHeatmap from './components/MemoryHeatmap'
import Gallery from './components/Gallery'
import ScrambleQuotes from './components/ScrambleQuotes'
import Messages from './components/Messages'
import InteractiveTerminal from './components/InteractiveTerminal'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Stats />
        <Roster />
        <MemoryHeatmap />
        <Gallery />
        <ScrambleQuotes />
        <Messages />
        <InteractiveTerminal />
      </main>
      <Footer />
    </>
  )
}

export default App