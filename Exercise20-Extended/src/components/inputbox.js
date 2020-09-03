import React from "react"
import PropTypes from "prop-types"

export default function InputBox({label,value,type,onChange}){
    return (<div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupText">{label}</span>
        </div>
        <input type={type} className="form-control" aria-label={label} value={value}
           onChange={onChange} aria-describedby="inputGroupText"  />
    </div>);
}
InputBox.propTypes ={
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func
}
InputBox.defaultProps = {
    value: "",
    type:"text"
}