import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  


  // code here

  render(){
    const imgg = this.props.imageData()

    return (
      <div>
        <h1>Class Components</h1>
        <div className='pic'>
        {imgg.map((el)=>{
        return (<img src={el.img}/>)
      })}
      </div>
      </div>
    )
  }


}
