import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Messages from './components/Messages'
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
        <Gallery />
        <Messages />
      </main>
      <Footer />
    </>
  )
}

export default App