import React,{useState} from 'react'
import {RiMenu3Fill} from 'react-icons/ri'

function Header() {
  const{showHeader,setShowHeader} = useState(false);
  return (
    <div className='header'>
        <RiMenu3Fill className='menu-icon position-fixed top-0 end-0'></RiMenu3Fill>
        </div>
  )
}

export default Header