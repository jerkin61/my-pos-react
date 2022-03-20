import React from 'react'
<<<<<<< HEAD

const Header = () => {
  return (
    <div className='container d-flex justify-content-between mt-2'>
        <div className='border p-2 text-center bg-white' style={{ borderRadius: "25px"}}>Logo</div>
        <div className='border p-2 text-center bg-white' style={{width: "400px", borderRadius: "25px"}}><h1>Random Store</h1></div>
=======
import './Header.css'
const Header = () => {
  return (
    <div className="frame-2 flex-col-hstart-vstart first-row">
      <div className="frame-11 flex-col-hstart-vstart">
        <div className="group-694">
          <p className="txt-6100">Random Store</p>
        </div>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gn825ohxmek-118%3A95?alt=media&token=bef2b88f-8749-4c2e-89f9-9687ef1ae3da"
        alt="Not Found"
        className="frame-10"
      />
>>>>>>> f7ddfb48c36063fe75bb7936a85c9069765eb15b
    </div>
  )
}

export default Header