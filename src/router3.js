import React from 'react'
import { BrowserRouter, NavLink, Route,Routes } from 'react-router-dom'
import Products from './products';
import Member from './member';
import Home from './home';
import './navlink.css'
export default function Router3() {
  return (
   
   <BrowserRouter>
   <nav className="nav">
<NavLink to='/' className={({isActive})=>isActive?
"active_menu":"menu"} style={({isActive})=>{
    return{
        fontWeight:isActive ? "bold":""

    };
}}>Home</NavLink> -&nbsp;
<NavLink to='product' className={({isActive}) =>
isActive?"active_menu":"menu"}>
    Product
</NavLink> -&nbsp; 
<NavLink to='/mamber' className={({isActive})=>
isActive?"active_menu":"menu"}>
    Member
</NavLink>-&nbsp;
<NavLink to='/contact' className={({isActive}) => isActive?"active_menu":"menu"}>
    Contact Us
</NavLink>
   </nav>
   <Routes style={{margin:'20px'}}>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' Component={Products}/>
    <Route path='/mamber' Component={Member}/>
    <Route path='/contact' element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
    <Route path='/*' element={<div style={{textAlign:'center'}}>Error 404 Not Found</div>}/>
   </Routes>
   </BrowserRouter> 
  )
}
