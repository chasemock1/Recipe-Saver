import React from 'react'
import {Link} from 'react-router-dom'
import './Recipes.css'

export default function Recipes(props) {
    return (
        <div>
            <h3 className= 'recipes-title'>Recipes</h3>
            {
                props.recipes.map(recipe =>(
                    <div>
                        <Link to={`/recipes/${recipe.id}`}>         
                            <p key={recipe.id} className='recipes'>{recipe.name}</p>
                        </Link>
                    </div>
                ))
            }

           
        </div>
    )
}
