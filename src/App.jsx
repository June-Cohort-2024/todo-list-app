import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
  let url = import.meta.env.VITE_URL

  return (
    <>
      <h1>The Url env var: {url}</h1>
    </>
  )
}

export default App
