import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
     <div>
       <h2 className='text-center font-bold text-xl'>This is main page</h2>
       <div>
            <Outlet/>
       </div>
     </div>
    </>
  )
}

export default App
