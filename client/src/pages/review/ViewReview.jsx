import React, { useEffect, useState } from 'react'
import UserNavM from '../../components/NavBar/UserNavM'
import axios from 'axios';

export default function ViewReview() {
  // const [input,setInput] = useState({});
    const [review,setReview] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/addreview/allreviews").then((data) => {
        console.log(data);
        setReview(data.data.details);
        // console.log(review);
      });
    }, []);
  return (
    <>
    <UserNavM/>
<br/><br/><br/>

   
<div class="rd-reviews">
<h4>Reviews</h4>
            {
review.map((user,key)=>(
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
<h5>{user.name}</h5>
<p>{user.review}</p>
</div>
</div>

))
}
{/* <div class="review-item">
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
</div> */}
</div>
</>
  )
}
