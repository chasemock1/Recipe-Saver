import api from './apiConfig'

export const getALLRecipes = async () =>{
    const resp = await api.get('/recipes')
    return resp.data
}

export const getOneRecipe = async (id) =>{
    const resp = await api.get(`/recipes/${id}`)
    return resp.data
}

export const createRecipe = async (recipeData) =>{
    const resp = await api.post('/recipes', {recipe: recipeData})
    return resp.data
}

export const putRecipe = async (id, recipeData) => {
    const resp = await api.put(`/recipes/${id}`, {recipe: recipeData})
    return resp.data
}

export const destroyRecipe = async (id) =>{
    const resp = await api.get(`/recipes/${id}`)
    return resp 
}