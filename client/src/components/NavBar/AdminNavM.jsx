import React from 'react'

export default function AdminNavM() {
  return (
    <>
    <div class="menu-item">
       <div class="container">
         <div class="row">
           <div class="col-lg-2">
             <div class="logo">
               <a href="index-2.html">
                 <img src="img/logo.png" alt="" />
               </a>
             </div>
           </div>
           <div class="col-lg-10">
             <div class="nav-menu">
               <nav class="mainmenu">
                 <ul>
                   <li class="active"><a href="/adminindex">Home</a></li>
                  <li><a href="/viewbooking">View Booking</a></li>
                  <li><a href="/addroom">Add Rooms</a></li>
                  <li><a href="/viewrooms">View Rooms</a></li>
                  
                   <li><a href="/viewreview">View Review</a></li>
                   <li><a href="/admin">LogOut</a></li>
                  
                   {/* <li>
                     <a href="pages.html">Pages</a>
                     <ul class="dropdown">
                       <li><a href="room-details.html">Room Details</a></li>
                       <li><a href="blog-details.html">Blog Details</a></li>
                       <li><a href="#">Family Room</a></li>
                       <li><a href="#">Premium Room</a></li>
                     </ul>
                   </li>
                   <li><a href="blog.html">News</a></li>
                   <li><a href="contact.html">Contact</a></li> */}
                 </ul>
               </nav>
               <div class="nav-right search-switch">
                 <i class="icon_search"></i>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    </>
  )
}
