import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AdminMain from './pages/AdminMain/AdminMain';
import UserIndex from './pages/UserIndex/UserIndex';
import Rooms from './pages/Rooms/Rooms';
import Contact from './pages/Contact/Contact';
import Booking from './pages/booking/Booking';
import AdminIndex from './pages/AdminMain/AdminIndex';


import Gallery from './pages/gallery/Gallery';
import AddRoom from './pages/addroom/AddRoom';

import Review from './pages/review/Review';
import ViewReview from './pages/review/ViewReview';
import ViewBooking from './pages/viewbooking/ViewBooking';
import ViewRoom from './pages/Rooms/ViewRoom';
import Edit from './pages/Rooms/Edit';
import Profile from './pages/Profile';



function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route  path='/user' element={<MainPage/>}/>
   <Route path='/userindex' element={<UserIndex/>}/>

   <Route  path='/admin' element={<AdminMain/>}/>
   <Route  path='/adminindex' element={<AdminIndex/>}/>
  
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     
     
     <Route path='/rooms' element={<Rooms/>}/>
     <Route path='/viewrooms' element={<ViewRoom/>}/>

     <Route path='/edit/:id' element={<Edit/>}/>
     

     <Route path='/profile' element={<Profile/>}/>
     <Route path='/booking/:id' element={<Booking/>}/>
     

     <Route path='/viewbooking' element={<ViewBooking/>}/>

    
     <Route path='/addroom' element={<AddRoom/>}/>
     
    
     <Route path='/review' element={<Review/>}/>
     <Route path='/viewreview' element={<ViewReview/>}/>
     
     
     
     
     <Route path='/gallery' element={<Gallery/>}/>
    
     </Routes>
     </BrowserRouter>
  );
}

export default App;
