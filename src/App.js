import React,{Component} from "react";
import Conditional from "./Conditional";
class App extends React.Component {
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },1500)
    }

    render(){
        return (
            <div>
               <Conditonal isLoading={this.state.isLoading} />
            </div>
        )
    }
}


export default App;