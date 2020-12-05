import React from 'react'
import {Link} from 'react-router-dom'

export default function MainPage(props) {
    return (
        <div>
            
            {
                props.recipes.map(recipe => (
                    <div>
                         <Link to={`/recipes/${recipe.id}`}>         
                            <p key={recipe.id} className='recipes'>{recipe.name}</p>
                <p>{props.recipes.length}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
