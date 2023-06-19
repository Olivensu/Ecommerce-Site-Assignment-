import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Singup from './Pages/Login/Singup';
import RequiredAuth from './Pages/Login/RequiredAuth';
import ResetPassword from './Pages/Login/ResetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/ResetPassword' element={<ResetPassword></ResetPassword>}></Route>
      <Route path='/signup' element={<Singup></Singup>}></Route>
      <Route path='/Appointment' element={
        <RequiredAuth>
          <Appointment></Appointment>
        </RequiredAuth>}>
      </Route>
      <Route path='Dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}> 
        <Route index element={<MyAppointment></MyAppointment>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='history' element={<MyHistory></MyHistory>}></Route>
      </Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
