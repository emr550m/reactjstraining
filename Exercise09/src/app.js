import React from "react" 


import {NameSurname} from "./components/namesurname";

export class App extends React.Component {

    render(){
        return <div>
                <NameSurname Name="Emrah" Surname="Öz" />
             </div>
    }
}