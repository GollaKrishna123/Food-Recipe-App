import React from 'react'

const Products = ({ items }) => {
    return (
        <div className="items-container" >
            
            {items.map((item,index) =>
                <div key={index}>
                    <div className='recipe-card text-center p-3'>
                    <img className='recipe-card-image' src={item.recipe.image} />
                    <h5 className='recipe-card-title'>{item.recipe.label}</h5>
                    <p className='recipe-card-description'>Total Amount Of Calories : {Math.round(item.recipe.calories)}</p>
                    <button className='btn btn-primary'>Buy</button>
                    </div>
                </div>
            )}
            </div>
        
    )
}

export default Products
