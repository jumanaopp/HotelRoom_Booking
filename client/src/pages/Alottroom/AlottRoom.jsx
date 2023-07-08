import React from 'react'

import AdminNavM from '../../components/NavBar/AdminNavM'

export default function AlottRoom() {
  return (
    
    <>
<AdminNavM/>
<br/><br/>
<div class="form-container">
<h2 style={{color:"#dfa974"}}>Alott Room </h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="phno">Phone No:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="room">Room:</label>
        <select id="room" name="room" required>
          <option value="">Select a room</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <div class="form-group">
        <label for="checkin">Check-in Date:</label>
        <input type="date" id="checkin" name="checkin" required/>
      </div>
      <div class="form-group">
        <label for="checkout">Check-out Date:</label>
        <input type="date" id="checkout" name="checkout" required/>
      </div>
      <div class="form-group button">
        <input type="submit" value="ALOTT"/>
      </div>
    </form>
  </div>
    </>
  )
}
