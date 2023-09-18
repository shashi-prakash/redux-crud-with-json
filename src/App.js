
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import UpdateUser from './components/UpdateUser';
function App() {
  return (
   <>
   <Routes>
   <Route exact path="/" element={<Home/>}></Route>
   <Route path="/create" element={<Create/>}></Route>
   <Route path="/edit/:id" element={<UpdateUser/>}></Route>
   </Routes>
   </>
  );
}

export default App;
