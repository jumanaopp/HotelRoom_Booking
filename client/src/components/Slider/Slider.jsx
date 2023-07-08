import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './slider.css'
export default function Slider() {
  return (
    <>

<OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={5}
          autoplay
  autoplayTimeout={3000}> 
<div>
<div className="image-wrapper">
      <img className="img" src={'assets/img/room/room-16.webp'}/>
      
      <div className="text-overlay">
      <h1 style={{color:"white"}}>Sona A Luxury <br/> Hotel</h1>
      <p style={{color:"white"}}>
              Here are the best hotel booking sites, including recommendations
              for <br/>  international travel and for finding low-priced hotel rooms.
            </p>
            <a href="#" class="primary-btn">Discover Now</a>
      </div>
    </div>
  </div>
  <div className="image-wrapper"> 
  <div><img  className="img" src= {'assets/img/room/ROOM-8.jpg'}/></div> 
  </div> 
  <div className="image-wrapper"> 
  <div><img  className="img" src= {'assets/img/room/room-9.jpg'} />
  </div>
  </div> 

  <div className="image-wrapper"> 
  <div><img  className="img" src= {'assets/img/room/room11.jpg'}/></div> 
  </div> 

  <div className="image-wrapper">  
  <div><img className="img" src= {'assets/img/room/room-10.jpg'}/></div>
  </div> 

  <div className="image-wrapper">   
  <div><img className="img" src= {'assets/img/room-2.jpg'}/></div> 
  </div> 
         </OwlCarousel>  
    </>
  )
}
