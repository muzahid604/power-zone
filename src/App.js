import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/Common/Header/Header';
import NotFound from './pages/Common/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Mission from './pages/Home/Mission/Mission';
import Services from './pages/Home/Services/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import Login from './pages/Sign/Login/Login';
import Register from './pages/Sign/Register/Register';
import RequireAuth from './pages/Sign/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/pricing' element={
          <RequireAuth><Pricing></Pricing></RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/mission' element={
          <RequireAuth><Mission></Mission></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div >
  );
}

export default App;