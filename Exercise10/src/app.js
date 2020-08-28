import React from "react" 

import {NameSurname} from "./components/namesurname";

export class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            name:"Emrah",
            surname:"Öz"
        }
    }

    updateName(e){
        this.setState({
            name: e.target.value
        })
    }

    updateSurname=(e)=>{
        this.setState({
            surname: e.target.value
        })
    }


    render(){
        return <div>
                <NameSurname Name={this.state.name} Surname={this.state.surname} />
                <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
                <input type="text" value={this.state.surname} onChange={this.updateSurname } />
             </div>
    }
}
