import React from 'react'

export default function SnackCard({snackCard}){


    return(
     <div className="snack-card">
        <h1>{snackCard.brand}</h1>
        <h2>{snackCard.flavor}</h2>
        <h3>{snackCard.rating}</h3>
        <img src={snackCard.image} alt="snack"/>
    </div>

    )
}