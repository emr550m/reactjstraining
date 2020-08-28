import React from "react"
import PropTypes from "prop-types"
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    rJss: {
    padding: 12
  },
  rJss1: props => ({
    display: 'block',
    color: 123,
    fontWeight: 12,
    fontStyle: 'bold'
  })
})

export class  JssButton extends React.Component {
    constructor(props) {
        super(props)
       

    }

   
    render() { 
        return <div><a className="rJss rJss1">Click Me!</a></div>
    }
}
 