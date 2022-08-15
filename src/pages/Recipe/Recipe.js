import React from 'react'
import './Recipe.css'
import {useParams} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {
   const {id} = useParams()
   const url = 'http://localhost:3000/recipes/' + id 
   const {error, isPending, data: recipe} = useFetch(url)
  return (
    <div className='recipe'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>This might take a minute...</p>}
        {recipe && (
            <>
            <h2 className='page-title'>{recipe.title}</h2>
            <p>Time: {recipe.cookingTime}</p>
            <ul>
                {recipe.ingredients?.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className='method'>{recipe.method}</p>
            </>
        )}
    </div>
  )
}
