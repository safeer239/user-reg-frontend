import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import ViewUser from './Pages/ViewUser';
import UpdateUser from './Pages/UpdateUser';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/viewUser' element={<ViewUser/>}/>
        <Route path='/updateUser/:id' element={<UpdateUser/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
