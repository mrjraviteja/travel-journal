import './App.css'
import Card from './components/Card'
import data from './components/data'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const cards = data.map(item => {
    return(
      <Card item={item}/>
    )
  })

  return(
    <div className='App'>
      <Navbar/>
      {cards}
      <Footer/>
    </div>
  )
}

export default App
