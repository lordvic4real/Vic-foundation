import { BrowserRouter } from 'react-router-dom'
import MainRoute from './routes'
import  "./App.css"

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  )
}

export default App
