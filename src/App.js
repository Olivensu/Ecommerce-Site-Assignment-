import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Pages/Shared/Header';

import Banner from './Pages/Banner/Banner';


function App() {
  return (
    <div className='mx-auto max-length'>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Banner></Banner>}></Route>
    </Routes>
    <ToastContainer />
    
    </div>
  );
}

export default App;
