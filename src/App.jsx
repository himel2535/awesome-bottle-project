
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'

function App() {
  
  const bottlesPromise=fetch("../public/bottles.json")
  .then(res=>res.json())

  // console.log(bottlesPromise)

  return (
    <>

      <h1>Awesome Bottle App</h1>
      <Suspense fallback={<p>Bottles are loading...</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App
