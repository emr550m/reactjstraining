import React from "react"
import PropTypes from "prop-types"

export class NameSurname extends React.Component {
    render() { 
        return <div>
            {this.props.Name} {this.props.Surname}   
        </div>
    }
}

NameSurname.propTypes = {
    Name: PropTypes.string.isRequired,
    Surname: PropTypes.string.isRequired 
}

NameSurname.defaultProps = {
    Name: "Your" 
};