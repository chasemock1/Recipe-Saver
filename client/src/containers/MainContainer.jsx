import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import RecipeCreate from '../screens/RecipeCreate'
import Recipes from '../screens/Recipes'
import RecipeDetail from '../screens/RecipeDetail'
import { createRecipe, destroyRecipe, getALLRecipes, putRecipe } from '../services/recipes'
import RecipeEdit from '../screens/RecipeEdit'

export default function MainContainer(props) {
const [recipes, setRecipes] = useState([])
const history = useHistory()
useEffect(()=>{
    const fetchRecipes = async () => {
        const recipeData = await getALLRecipes()
        setRecipes(recipeData)
    }
    fetchRecipes()
},[])
    
    const handleCreate = async (recipeData) =>{
        const newRecipe = await createRecipe(recipeData)
        setRecipes(prevState => [...prevState, newRecipe])
        history.push('/recipes')
    }

    const handleUpdate = async (id,recipeData)=>{
        const updatedRecipe = await putRecipe(id, recipeData)
        setRecipes(prevState => prevState.map(recipe=>{
            return recipe.id === Number(id) ? updatedRecipe : recipe
        }))
        history.push('/recipes')
    }

    const handleDelete = async (id) =>{
        await destroyRecipe(id)
        setRecipes(prevState => prevState.filter(recipe => recipe.id !== id))
        history.push('/recipes')
        
    }
    return (
        <div>
           <Switch>
                <Route path='/recipes/new'>
                   <RecipeCreate handleCreate={handleCreate}/>
               </Route>
               <Route path='/recipes/:id/edit'>
                   <RecipeEdit recipes={recipes} handleUpdate={handleUpdate}/>
               </Route>
               <Route path='/recipes/:id'>
                   <RecipeDetail 
                   recipes={recipes} 
                   handleDelete={handleDelete}
                   currentUser = {props.currentUser}
                   />
               </Route>
               <Route path='/recipes'>
                   <Recipes recipes={recipes}/>
               </Route>
           </Switch>
        </div>
    )
}
