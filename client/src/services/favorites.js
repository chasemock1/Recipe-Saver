import api from './apiConfig'

export const getALLFavorites = async (user_id) =>{
    const resp = await api.get(`/users/${user_id}/favorites`)
    return resp.data
}

export const getOneFavorite = async (user_id ,id) =>{
    const resp = await api.get(`/users/${user_id}/favorites/${id}`)
    return resp.data
}

export const createFavorite = async (favoriteData) =>{
    const resp = await api.post(`/favorites`, {favorite: favoriteData})
    return resp.data
}

// export const putFavorite = async (id, recipeData) => {
//     const resp = await api.put(`/recipes/${id}`, {recipe: recipeData})
//     return resp.data
// }

export const destroyFavorite = async (user_id, id) =>{
    const resp = await api.get(`/users/${user_id}/favorites/${id}`)
    return resp 
}