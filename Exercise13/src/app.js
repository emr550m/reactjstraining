import React from "react"
const axios = require('axios').default;

import { NameSurname } from "./components/namesurname";

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Emrah",
            surname: "Öz",
            show: true,
            isLoading: true,
            list: []
        }
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    }

    onShow = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    doBackendCall = () => {
        this.setState({
            isLoading: false
        })
    }

    componentDidMount() {

        axios.get('http://localhost:8090/api/getList')
            .then( (response)=> {
                // handle success
                this.setState({
                    isLoading: false,
                    list:response.data.list
                }) ;
            })
    }

    render() {
        return <div>
            <label><input type="checkbox" onChange={this.onShow} />Show Hide</label> <br />
            {
                (this.state.show ? <NameSurname list={this.state.list} Name={this.state.name} Surname={this.state.surname} isLoading={this.state.isLoading}>
                    <span>Test</span>
                </NameSurname> : null)
            }
            {
                (this.state.isLoading ? null : <><input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
                    <input type="text" value={this.state.surname} onChange={this.updateSurname} /> </>)
            }

        </div>
    }
}
