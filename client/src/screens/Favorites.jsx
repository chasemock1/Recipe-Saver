import React from 'react'
import {Link} from 'react-router-dom'

export default function Favorites(props) {
    return (
        <div>
            <h3 className= 'recipes-title'>Favorites</h3>
            {
                props.favorites.map(recipe =>(
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
