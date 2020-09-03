import React from "react"
import PropTypes from "prop-types"

export function ListItem({title,description,image}){
    return (<li className="list-group-item d-flex justify-content-between align-items-center" >
         {title}<br />
         {description}
         <div  className="image-parent">
             <img src={image} style={{width:250}} className="img-fluid" alt={description} />
         </div>
    </li>);
} 