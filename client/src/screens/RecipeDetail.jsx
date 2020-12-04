import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneRecipe } from '../services/recipes';
import {Link} from 'react-router-dom'

export default function RecipeDetail(props) {
    const [recipeItem, setRecipeItem] = useState(null);
    const {id} = useParams()
    
    useEffect(() => {
        const fetchRecipeItem = async () => {
          const recipeData = await getOneRecipe(id);
          setRecipeItem(recipeData);
        }
        fetchRecipeItem();
      }, [id])

    return (
        <div>
            <h1>{recipeItem?.name}</h1>
            <h3>{recipeItem?.description}</h3>
            <h3>{recipeItem?.ingredients}</h3>
            <h3>{recipeItem?.steps}</h3>
            {
                recipeItem?.user_id === props.currentUser?.id &&
            <div>  
                <Link to ={`/recipes/${recipeItem?.id}/edit`}><button>Edit</button></Link>
                <button onClick={()=> props.handleDelete(recipeItem?.id)}>Delete</button> 
            </div>
            }
            <button>Favorite</button>


        </div>
    )
}
