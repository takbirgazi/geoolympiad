import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
     <div>
      <Header></Header>
       <h2 className='text-center font-bold text-xl'>This is main page</h2>
       <div className='flex items-center justify-center'>
            <Outlet/>
       </div>
       <Footer></Footer>
     </div>
    </>
  )
}

export default App
