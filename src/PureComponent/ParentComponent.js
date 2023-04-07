import React, { Component } from 'react'
import Purecomp from './PureComponent'

export class ParentComponent extends Component {
  constructor(props){
    super(props)
      this.state = {
        fName : "",
        lName : ""
    }
    
  }
  render() {

    return (
      <div>
        {console.log("Parent Component")}
         <Purecomp name = {this.state.fName}></Purecomp>
      </div>
    )
  }
}

export default ParentComponent