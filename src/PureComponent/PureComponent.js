import React, { PureComponent } from 'react'


class Purecomp extends PureComponent{
    
    render(){
        return(
            <div>
                {console.log("Pure Component")}
                <h1>PureComponent</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}


export default Purecomp