import React from 'react'
import Header from '../components/Header'

export default function Layout(props) {
    return (
        <div>
            <Header 
            currentUser = {props.currentUser}
            handleLogout = {props.handleLogout}

            />
            {props.children}
        </div>
    )
}
