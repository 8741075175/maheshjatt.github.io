import React from 'react'
import './TopNav.css'

import {Link,NavLink} from 'react-router-dom'
export const TopNav = () => {
  return (
     <div className='maindiv'>
    <div className='heading'><h3>MAHESH KUMAT JAT</h3></div>
    <div className='main2'>
    <Link to='/Home'>Home</Link>
    <Link to='/About'>About</Link>
     <Link to='/Contact'>Contact</Link>
    </div>

 </div>

  )
}
export default TopNav