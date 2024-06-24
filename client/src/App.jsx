/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import SeatSelectionForm from './components/SeatSelectionForm';
import SwapResults from './pages/Swapresults';
import BackToTop from './components/BackToTop';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/SrollToTop';

import NotificationPage from './pages/NotificationPage';
import Help from './pages/Help';
export default function App() {
  return (
    // <div>
    //   App
    // </div>
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <BackToTop/>
    <Routes>  
         <Route path='/' element={<Home/>} />
        
        
         <Route path='/about' element={<About/>} />
         <Route path='/help' element={<Help/>} />
         <Route path='/sign-in' element={<SignIn/>} />
         <Route path='/sign-up' element={<SignUp/>} />
         
         <Route element={<PrivateRoute />}>
         <Route path='/notification' element={<NotificationPage/>}/>
        </Route>
         <Route element={<PrivateRoute />}>
         <Route path='/request' element={<Projects/>} />
        </Route>
         <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      
         <Route element={<PrivateRoute />}>
          <Route path='/swap-request/:pnrNumber' element={<SeatSelectionForm />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/SwapResults/:pnrNumber' element={<SwapResults />} />
        </Route>
         {/* <Route path='/swap-request/:pnrNumber' element={<SeatSelectionForm/>} />
         <Route  path="/SwapResults"   element={  <SwapResults /> }  /> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}
