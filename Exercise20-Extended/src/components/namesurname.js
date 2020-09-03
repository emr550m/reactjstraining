import React from "react"
import PropTypes from "prop-types"

export class  NameSurname extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor");

    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log("render")
        var props = this.props;
        return <div> 
            {
                (this.props.isLoading? <main>
                <ul className="o-vertical-spacing o-vertical-spacing--l">
                    <li className="blog-post o-media">
                        <div className="o-media__figure">
                            <span className="skeleton-box" style={{ width:100 ,height:80 }} ></span>
                        </div>
                        <div className="o-media__body">
                            <div className="o-vertical-spacing">
                                <h3 className="blog-post__headline">
                                    <span className="skeleton-box" style={{width:'55%'}}></span>
                                </h3>
                                <p>
                                    <span className="skeleton-box" style={{width:'80%'}}></span>
                                    <span className="skeleton-box" style={{width:'90%'}}></span>
                                    <span className="skeleton-box" style={{width:'83%'}}></span>
                                    <span className="skeleton-box" style={{width:'80%'}}></span>
                                </p>
                                <div className="blog-post__meta">
                                    <span className="skeleton-box" style={{width:70}}></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="blog-post o-media">
                        <div className="o-media__figure">
                            <span className="skeleton-box" style={{width:100,height:80}}></span>
                        </div>
                        <div className="o-media__body">
                            <div className="o-vertical-spacing">
                                <h3 className="blog-post__headline">
                                    <span className="skeleton-box" style={{width:'55%'}}></span>
                                </h3>
                                <p>
                                    <span className="skeleton-box" style={{width:'80%'}}></span>
                                    <span className="skeleton-box" style={{width:'90%'}}></span>
                                    <span className="skeleton-box" style={{width:'83%'}}></span>
                                    <span className="skeleton-box" style={{width:'80%'}}></span>
                                </p>
                                <div className="blog-post__meta">
                                    <span className="skeleton-box" style={{width:70}}></span>
                                </div>
                            </div>
                        </div>
                    </li> 
                </ul>
            </main> : <>
            
            <ul><div>
           { this.props.list.map((item)=>{
               return <li key={item.key}>
                         <img src={item.image} style={{height:50}} />
                        <h3>{item.title}</h3>
                         <p>{item.description}</p>
                     </li> 
            }) } 
                </div>
                </ul>
             </>   )}
        </div>
    }
}

NameSurname.propTypes = {
    Name: PropTypes.string.isRequired,
    Surname: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    list: PropTypes.array
}

NameSurname.defaultProps = {
    Name: "Your"
};