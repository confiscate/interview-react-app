import { React } from 'react'
import './App.css'
import Header from './Header.jsx'
import Body from './Body.jsx'

function App() {

  return (
    <div>
      <Header user="hlau" time="1:39" />
      <h1>this is not header not body!</h1>
      <Body />
    </div>
  )
}

export default App
