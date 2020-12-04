import React from 'react'
import {Link} from 'react-router-dom'

export default function Recipes(props) {
    return (
        <div>
            <h3>Recipes</h3>
            {
                props.recipes.map(recipe =>(
                    <div>
                        <Link to={`/recipes/${recipe.id}`}>         
                            <p key={recipe.id}>{recipe.name}</p>
                        </Link>
                    </div>
                ))
            }

           
        </div>
    )
}
