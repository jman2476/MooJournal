import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import 'tachyons'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import LoadingIndicator from './components/LoadingIndicator'


function App() {

  const [loading, setLoading] = useState(true)

  const simulateLoading = (toggle) => {

    if(toggle){
      const delayedFunction = () => {
        setLoading(false)    
      };
  
      // Set a timeout to execute the function after 10 seconds
      const timeoutId = setTimeout(delayedFunction, 2000);
  
      // Clean-up function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    } else {
      setLoading(false)    
    }
  }
  
  useEffect(() => {
    // If you want to simulate loading screen
    simulateLoading(false)
  })


  return (

      loading ?
        <LoadingIndicator />
        :
      <>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          
        </Routes>
      </>
  )
}

export default App
