import React from "react"
import PropTypes from "prop-types"

export class NameSurname extends React.Component {
    render() {
        var props = this.props;
        return <div>
            {this.props.Name} {this.props.Surname}   <br/>
            {this.props.children}
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