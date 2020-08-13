import React,{Component} from "react";

function Conditional(props){
if(props.isLoading==true){
    return(
        <div>
            <h1>loading..</h1>
        </div>
    )}

    else{
        return(
        <div>
             <h1>Some cool stuff aout conditonal rendering</h1>
        </div>
           
        )
    }
}

export default Conditional;