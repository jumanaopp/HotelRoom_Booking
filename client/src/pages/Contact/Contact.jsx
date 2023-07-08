import React from 'react'
import UserNavM from '../../components/NavBar/UserNavM'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
  return (
    <>
    <UserNavM/>
<br/>
<br/>   
<br/>

<div class="rd-reviews">
<h4>Reviews</h4>
<div class="review-item">
<div class="ri-pic">
<img src="assets/img/room/avatar/avatar-1.jpg" alt=""/>
</div>
<div class="ri-text">
<span>27 Aug 2019</span>
<div class="rating">
 <i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star-half_alt"></i>
</div>
<h5>Brandon Kelley</h5>
<p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore
magnam.</p>
</div>
</div>
<div class="review-item">
<div class="ri-pic">
<img src="assets/img/room/avatar/avatar-2.jpg" alt=""/>
</div>
<div class="ri-text">
<span>27 Aug 2019</span>
<div class="rating">
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star-half_alt"></i>
</div>
<h5>Brandon Kelley</h5>
<p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore
magnam.</p>
</div>
</div>
</div>
<div class="review-add">
<h4>Add Review</h4>
<form action="#" class="ra-form">
<div class="row">
<div class="col-lg-6">
<input type="text" placeholder="Name*"/>
</div>
<div class="col-lg-6">
<input type="text" placeholder="Email*"/>
</div>
<div class="col-lg-12">
<div>
<h5>You Rating:</h5>
<div class="rating">
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star"></i>
<i class="icon_star-half_alt"></i>
</div>
</div>
<textarea placeholder="Your Review"></textarea>
<button type="submit">Submit Now</button>
</div>
</div>
</form>
</div>

    </>
  )
}
