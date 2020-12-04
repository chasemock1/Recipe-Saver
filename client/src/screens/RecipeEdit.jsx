import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function RecipeEdit(props) {
    const [formData, setFormData] = useState({
        name: '',
        description:'',
        ingredients: '',
        steps:''
    })

    const {id} = useParams()

    useEffect(()=>{
        const prefillForm = () =>{
            const recipeItem = props.recipes.find(recipe => recipe.id === Number(id))
            setFormData({
                name: recipeItem.name,
                description: recipeItem.description,
                ingredients: recipeItem.ingredients,
                steps: recipeItem.steps
            })
        }
        if (props.recipes.length){
        prefillForm()
        }
    },[props.recipes])

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prevState =>({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
             props.handleUpdate(id, formData)
        }}>
            <h3>Edit Recipe</h3>
            <label>Name:</label>
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
            />
            <label>Description:</label>
            <input
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
            />
            <label>Ingredients:</label>
            <input
                type='text'
                name='ingredients'
                value={formData.ingredients}
                onChange={handleChange}
            />
            <label>Steps:</label>
            <input
                type='text'
                name='steps'
                value={formData.steps}
                onChange={handleChange}
            />
            
            <button>Submit</button>
        </form>
    )
}
