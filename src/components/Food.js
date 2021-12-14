import React from 'react'
import './Food.css'

const Food = ( {recipe} ) => {
    return (
        <div className='recipe'>
            <img className='food-img' src={recipe['recipe']['image']} alt='img'/>
            <p className='food-name'>{recipe['recipe']['label']}</p>
        </div>
    )
}

export default Food
