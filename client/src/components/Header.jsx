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
                <p>Hello, {currentUser.username.toUpperCase()}</p>
                    
                <button onClick = {props.handleLogout} >Logout</button>
               </> 
                : <Link to='/login' className = 'link'>Login/Register</Link>
                
            }

            {
                currentUser && 
                <>
                <Link to ='/recipes' className = 'link'>Recipes</Link>
                <Link to ='/favorites' className = 'link'>Favorites</Link>
                <Link to='/recipes/new' className = 'link'><button>Create</button></Link>
                </>
            }
            </div> 
            
        
            </nav>
    )
}
