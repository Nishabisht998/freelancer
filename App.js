
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Home';
// import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Jobform from './components/Jobform';
import Howitwork from './components/Howitwork';
import Project from './components/Project';
import { Toaster } from 'react-hot-toast';
import 'rsuite/dist/rsuite.min.css';
import BrowseJobs from './components/BrowseJobs';



function App() {
  return (
    <div >
      <Toaster/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='login' />
          <Route element={<Signup />} path='signup' />
          <Route element={<Jobform />} path='jobform' />
          <Route element={<Howitwork />} path='howitwork' />
          <Route element={<Project/>} path='project' />
          <Route element={<BrowseJobs/>} path='browsejobs' />

        </Routes>
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
