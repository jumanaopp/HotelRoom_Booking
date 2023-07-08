import React from 'react'

export default function AdminNav() {
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
                    
          <li class="active"><a href={"/user"}>Home</a></li>

      <li class="active"><a href={"/login"}> SignIn</a></li>

      

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
