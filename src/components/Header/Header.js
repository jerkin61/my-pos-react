import React from 'react'

const Header = () => {
  return (
    <div className='container d-flex justify-content-between mt-2'>
        <div className='border p-2 text-center bg-white' style={{ borderRadius: "25px"}}>Logo</div>
        <div className='border p-2 text-center bg-white' style={{width: "400px", borderRadius: "25px"}}><h1>Random Store</h1></div>
    </div>
  )
}

export default Header