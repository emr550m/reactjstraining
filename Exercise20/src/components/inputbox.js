import React from "react"
import PropTypes from "prop-types"

export function InputBox(props) {



    return (<div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">{props.label}</span>
        </div>
        <input type={props.type} className="form-control" aria-label={props.label} value={props.value} 
             onChange={props.onChange} aria-describedby="inputGroup-sizing-default" />
    </div>)
}

InputBox.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type:PropTypes.string
}

InputBox.defaultProps = {
    value: "",
    type: "text"
};