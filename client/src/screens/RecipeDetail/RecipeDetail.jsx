import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneRecipe } from '../../services/recipes';
import {Link} from 'react-router-dom'
import './RecipeDetail.css'
export default function RecipeDetail(props) {
    const [recipeItem, setRecipeItem] = useState(null);
    const {id} = useParams()

    const [favData, setFavData] = useState({
        user_id: props.currentUser,
        recipe_id: recipeItem?.id
    })
    
    useEffect(() => {
        const fetchRecipeItem = async () => {
          const recipeData = await getOneRecipe(Number(id));
          setRecipeItem(recipeData);
        }
        fetchRecipeItem();
      }, [id])

    

    return (
        <div id = 'detail-page'>
        {    recipeItem && 
        <div className = 'detail-container'>
            <h3 className="detail-name"><b>Name:</b> {recipeItem?.name}</h3>
            <h3 className="detail-descrip"><b>Description:</b> {recipeItem?.description}</h3>
            <h3 className="detail-descrip"><b>Ingredients</b>: {recipeItem?.ingredients}</h3>
            <h3 className="detail-descrip"><b>Steps:</b> {recipeItem?.steps}</h3>
            <div className = 'button-container'>
                
            {
                recipeItem?.user_id === props.currentUser?.id &&
                <div>  
                <button onClick={()=> props.handleDelete(recipeItem?.id)} className = 'delete-button'>Delete</button> 
                <Link to ={`/recipes/${recipeItem?.id}/edit`}className = 'edit-link'><button className = "edit-button">Edit</button></Link>
            </div>
            }
           
                
            <button className = 'fav-button' onClick={()=> props.handleFavorite({user_id:props.currentUser?.id,recipe_id:recipeItem?.id} )}>Favorite</button>
            
            </div>

            </div>
        }
        </div>
    )
}
