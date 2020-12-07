import React from 'react'
import {Link} from 'react-router-dom'
import './Recipes.css'

export default function Recipes(props) {
    return (
        <div className='all-content'>
            <h1 className= 'recipes-title'>Recipes</h1>
            <div className = 'recipes'>
            {
                props.recipes.map(recipe =>(
                    <div>
                        <Link to={`/recipes/${recipe.id}`}>         
                            <a key={recipe.id} className='recipes-info'>{recipe.name}</a>
                        </Link>
                    </div>
                ))
            }
                </div>

           
        </div>
    )
}
