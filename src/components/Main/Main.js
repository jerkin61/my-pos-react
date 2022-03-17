import React from 'react'
import Header from '../Header/Header'
import Search from '../Searchbar/Search'
const Main = () => {
  return (
    <div className='container p-2' style={{ width: "50%", backgroundColor: "pink", height: "100vh"}}>
        <Header />
        <Search />
    </div>
  )
}

export default Main