import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import data from './index.js';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App" >
      <Header propsheader={data.propsheader} />
      <MainContent samplePosts = {data.samplePosts}/>
      <Footer />
    </div>
    </>
  )
}

export default App
