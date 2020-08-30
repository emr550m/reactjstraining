import React from "react"
import PropTypes from "prop-types"

export function ListItem({ key, image, title, description }) {

    return (<li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
        {title}<br />
        {description}
        <div className="image-parent">
            <img src={image} style={{width:250}} className="img-fluid" alt="quixote" />
        </div>
    </li>)
}
