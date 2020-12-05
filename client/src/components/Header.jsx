import React from 'react'
import {Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    const { currentUser}  = props
    return (
            <nav className="nav2">
        
                
            <Link to ='/' id = 'logo'><div>RecipeSaver</div></Link>
            <div className="links">
            {
                currentUser ? 
                <>
                <Link className='link'>Hello, {currentUser.username.toUpperCase()}</Link>
                    
                <Link className = 'link' onClick = {props.handleLogout} >Logout</Link>
               </> 
                : <Link to='/login' className = 'link'>Login/Register</Link>
                
            }

            {
                currentUser && 
                <>
                <Link to ='/recipes' className = 'link'>Recipes</Link>
                <Link to ='/favorites' className = 'link'>Favorites</Link>
                <Link to='/recipes/new' className = 'link'>Create</Link>
                </>
            }
            </div> 
            
        
            </nav>
    )
}
