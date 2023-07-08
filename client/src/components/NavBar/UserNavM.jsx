import React from 'react'

export default function UserNavM() {
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
                   <li class="active"><a href="/userindex">Home</a></li>
                   {/* <li><a href="/rooms">Rooms</a> */}
                     <li><a href="/rooms">Rooms</a>


                   {/* <ul class="dropdown"> */}
              {/* <li><a href="room-details.html">Room Details</a></li> */}
              {/* <li><a href="#">Deluxe Room</a></li>
              <li><a href="#">Family Room</a></li>
              <li><a href="#">Single Room</a></li>
              <li><a href="#">Premium </a></li>
            </ul>
                    */}
                   </li>
                   <li><a href="/profile">View Booking</a></li>
                   {/* <li><a href="/activity">Activity</a></li> */}
                  
                  
                   <li><a href="/review">Review</a></li>
                   {/* <li><a href="/gallery">Gallery</a></li> */}
                  
                   <li><a href="/user">LogOut</a></li>
                  
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
