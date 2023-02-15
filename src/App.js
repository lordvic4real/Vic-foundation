import { BrowserRouter } from 'react-router-dom'
import MainRoute from './routes'
import  "./App.css"
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
