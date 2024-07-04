import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainRoutes from './Pages/MainRoutes'
import { BrowserRouter } from 'react-router-dom'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <MainRoutes/>
    </BrowserRouter >
    </>
  )
}

export default App
